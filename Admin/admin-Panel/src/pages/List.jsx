import React from 'react';
import {products} from '../assets/frontend_assets/assets.js'
const List = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">All Products</h2>

      {products.length === 0 ? (
        <p className="text-gray-500">No products available.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow hover:shadow-md transition p-4 bg-white flex flex-col"
            >
              <img
                src={product.image[0]}
                alt={product.name}
                className="h-48 w-full object-cover rounded mb-4"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-2">
                  {product.description.length > 60
                    ? product.description.slice(0, 60) + '...'
                    : product.description}
                </p>

                <p className="text-blue-600 font-bold text-sm mb-1">₹{product.price}</p>

                <p className="text-sm text-gray-500">
                  {product.category} / {product.subCategory}
                </p>

                <div className="mt-2 flex flex-wrap gap-1 text-xs">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-2 py-1 bg-gray-200 rounded font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                {product.bestseller && (
                  <span className="inline-block mt-3 px-2 py-1 bg-yellow-400 text-black text-xs font-bold rounded">
                    Bestseller
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
