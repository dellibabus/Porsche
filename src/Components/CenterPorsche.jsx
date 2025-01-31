import React from "react";
import Center from "../assets/center.png";

const CenterPorsche = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900">Our Services</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Find Your Porsche Center
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            A Porsche Center, and your dream Porsche vehicle, may be closer than
            you think. Search our Porsche Center network for the location
            closest to you. A Porsche Center, and your dream Porsche vehicle,
            await.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Search Now
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={Center}
            alt="Service-center"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CenterPorsche;
