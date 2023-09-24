import React from 'react';

const Store = () => {
  // Dummy product data
  const products = [
    {
      name: 'Album 1',
      price: '$10.99',
      image: '/album1.jpg',
    },
    {
      name: 'Album 2',
      price: '$12.99',
      image: '/album2.jpg',
    },
    {
      name: 'Merchandise 1',
      price: '$25.99',
      image: '/merch1.jpg',
    },
    // Add more products
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
