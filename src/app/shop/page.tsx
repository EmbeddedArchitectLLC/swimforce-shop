'use client';

import { useState } from 'react';

// Placeholder products - will be replaced with dynamic data from Stripe/database
const products = [
  { id: 1, name: 'Pro Swim Paddles', price: 34.99, category: 'paddles', image: null },
  { id: 2, name: 'Training Fins - Blue', price: 49.99, category: 'fins', image: null },
  { id: 3, name: 'Pull Buoy Pro', price: 24.99, category: 'buoys', image: null },
  { id: 4, name: 'Kickboard Elite', price: 29.99, category: 'kickboards', image: null },
  { id: 5, name: 'Swim Snorkel', price: 39.99, category: 'snorkels', image: null },
  { id: 6, name: 'Resistance Bands Set', price: 44.99, category: 'resistance', image: null },
  { id: 7, name: 'Tempo Trainer Pro', price: 59.99, category: 'electronics', image: null },
  { id: 8, name: 'Mesh Gear Bag', price: 19.99, category: 'bags', image: null },
];

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'paddles', name: 'Paddles' },
  { id: 'fins', name: 'Fins' },
  { id: 'buoys', name: 'Pull Buoys' },
  { id: 'kickboards', name: 'Kickboards' },
  { id: 'snorkels', name: 'Snorkels' },
  { id: 'resistance', name: 'Resistance' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'bags', name: 'Bags' },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Shop</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <h2 className="font-semibold text-lg mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full text-left px-3 py-2 rounded ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Product grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Product Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <p className="text-gray-500 text-center py-8">
              No products found in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
