import React from 'react';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Concerts</h1>
      <div className="flex flex-col space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Concert Name 1</h2>
          <p className="text-gray-600">Date: September 30, 2023</p>
          <p className="text-gray-600">Location: Concert Hall</p>
          <button className="bg-rose-500 text-white px-4 py-2 rounded mt-2 hover:bg-rose-600">Buy Tickets</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Concert Name 2</h2>
          <p className="text-gray-600">Date: October 15, 2023</p>
          <p className="text-gray-600">Location: Stadium</p>
          <button className="bg-rose-500 text-white px-4 py-2 rounded mt-2 hover:bg-rose-600">Buy Tickets</button>
        </div>
        {/* Add more concert items */}
      </div>
    </div>
  );
};

export default Home;
