'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/components/cart/CartContext';

export default function CheckoutSuccessPage() {
  const cart = useCart();

  useEffect(() => {
    // Simple fulfillment placeholder: clear cart on success page.
    cart.clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Payment successful</h1>
      <p className="text-gray-600 mb-8">
        Thanks for your purchase! You’ll receive an email confirmation once order fulfillment is wired up.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link
          href="/shop"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Shop more
        </Link>
        <Link href="/" className="px-6 py-3 rounded-lg font-semibold border hover:bg-gray-50 transition">
          Back to home
        </Link>
      </div>
    </div>
  );
}
