import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-rose-100 p-4">
      <h1 className="text-3xl font-bold text-black mb-4">Contact Us</h1>
      <form className="bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-rose-500 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full py-2 px-3 rounded-md border border-rose-300 focus:outline-none focus:border-rose-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-rose-500 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full py-2 px-3 rounded-md border border-rose-300 focus:outline-none focus:border-rose-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-rose-500 text-sm font-semibold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full py-2 px-3 rounded-md border border-rose-300 focus:outline-none focus:border-rose-500"
          />
        </div>
        <button
          type="submit"
          className="bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
