import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products, productId }) => {
  const product = products.find((p) => p.id === parseInt(productId));
  if (!product) {
    return <div>Loading...</div>;
  }

  // Hardcoded dummy reviews
  const reviews = ["Great product!", "I love it!", "Amazing quality."];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>

      <div className="aspect-w-1 aspect-h-1 mb-2">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-1/6 h-1/6 rounded-lg"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Price</h2>
      <p className="text-gray-600">₹{product.price}</p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
