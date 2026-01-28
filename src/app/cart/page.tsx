'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/components/cart/CartContext';

export default function CartPage() {
  const cart = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkout = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          items: cart.detailedItems.map((i) => ({
            name: i.product.name,
            price: i.product.price,
            quantity: i.quantity,
          })),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Checkout failed');
      }

      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error('Missing Stripe checkout URL');
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Checkout failed';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Cart</h1>
        <Link href="/shop" className="text-blue-600 hover:underline">
          Continue shopping →
        </Link>
      </div>

      {cart.detailedItems.length === 0 ? (
        <div className="bg-gray-50 border rounded-lg p-10 text-center">
          <p className="text-gray-600 mb-6">Your cart is empty.</p>
          <Link
            href="/shop"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Go to Shop
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.detailedItems.map((line) => (
              <div key={line.product.id} className="bg-white border rounded-lg p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold text-lg">{line.product.name}</div>
                    <div className="text-sm text-gray-600">{line.product.description}</div>
                    <div className="text-sm text-gray-600 mt-1">${line.product.price.toFixed(2)} each</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">${line.lineTotal.toFixed(2)}</div>
                    <button
                      onClick={() => cart.remove(line.product.id)}
                      className="text-sm text-red-600 hover:underline mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <span className="text-sm text-gray-600">Qty</span>
                  <input
                    type="number"
                    min={0}
                    value={line.quantity}
                    onChange={(e) => cart.setQuantity(line.product.id, Number(e.target.value))}
                    className="w-20 border rounded px-2 py-1"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border rounded-lg p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-semibold">${cart.subtotal.toFixed(2)}</span>
            </div>
            <div className="text-xs text-gray-500 mb-6">
              Taxes and shipping calculated at checkout.
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded mb-4 text-sm">
                {error}
              </div>
            )}

            <button
              disabled={loading}
              onClick={checkout}
              className="w-full bg-blue-600 disabled:bg-blue-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {loading ? 'Redirecting…' : 'Checkout'}
            </button>

            <button
              onClick={() => cart.clear()}
              className="w-full mt-3 text-sm text-gray-700 hover:underline"
            >
              Clear cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
