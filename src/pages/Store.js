import React from "react";
import { albumProducts, merchandiseProducts } from "../constants";
import { useCart } from "../store/cartContext";
import { Link } from "react-router-dom";
const Store = () => {
  const { addItemToCart } = useCart();
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Store</h1>

      {/* Albums */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Albums</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {albumProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-w-1 aspect-h-1 mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600"> ₹{product.price}</p>
              <Link to={`/store/album/${product.id}`} className="text-rose-500 hover:underline mx-3">View Details</Link>
              <button
                className="bg-rose-500 text-white px-4 py-1 rounded mt-2 hover:bg-rose-600"
                onClick={() => {
                  addItemToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Merchandise */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Merchandise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {merchandiseProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-w-1 aspect-h-1 mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600">₹{product.price}</p>
              <Link to={`/store/merchandise/${product.id}`} className="text-rose-500 hover:underline mx-3">View Details</Link>
              <button
                className="bg-rose-500 text-white px-4 py-2 rounded mt-2 hover:bg-rose-600"
                onClick={() => {
                  addItemToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Store;
