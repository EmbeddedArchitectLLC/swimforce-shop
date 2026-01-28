import Link from 'next/link';

export default function CheckoutCancelPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Checkout canceled</h1>
      <p className="text-gray-600 mb-8">
        No worries — your cart is still here.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link
          href="/cart"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Back to cart
        </Link>
        <Link href="/shop" className="px-6 py-3 rounded-lg font-semibold border hover:bg-gray-50 transition">
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
