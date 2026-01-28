import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Elevate Your Swimming Training
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Professional-grade swimming accessories designed to help you reach your full potential in the water.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/shop"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
            <Link
              href="/training"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Our Training
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product placeholders - will be replaced with dynamic content */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Product Image {i}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Training Accessory {i}</h3>
                  <p className="text-gray-600 mb-4">Professional-grade equipment for serious swimmers.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">$49.99</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/shop"
              className="text-blue-600 font-semibold hover:underline"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Training School Promo */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">SwimForce Training School</h2>
              <p className="text-lg mb-6">
                Join our professional swimming training programs. Whether you&apos;re a beginner 
                looking to learn or an athlete aiming to compete, our expert coaches will 
                help you achieve your goals.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Expert certified coaches
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All skill levels welcome
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Personalized training plans
                </li>
              </ul>
              <Link
                href="/training"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-blue-500 rounded-lg h-80 flex items-center justify-center">
              <span className="text-blue-300">Training Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for training tips, new product releases, and exclusive offers.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
