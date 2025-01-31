import React from "react";
import { motion } from "framer-motion";
import Center from "../assets/center.png";

const CenterPorsche = () => {
  return (
    <motion.div 
      className="max-w-6xl mx-auto p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl font-bold text-gray-900">Our Services</h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Text Section */}
        <motion.div 
          className="text-center sm:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Find Your Porsche Center
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            A Porsche Center, and your dream Porsche vehicle, may be closer than
            you think. Search our Porsche Center network for the location
            closest to you. A Porsche Center, and your dream Porsche vehicle,
            await.
          </p>
          <motion.button 
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Search Now
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img
            src={Center}
            alt="Service-center"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default CenterPorsche;
