import React from "react";
import { motion } from "framer-motion";
import P718 from "../assets/Porsche 718 Boxster.png";
import P911 from "../assets/Porsche 911 GT3.png";
import P918 from "../assets/Porsche 918 Spyder.png";
import Cayenne from "../assets/Porsche Cayenne.png";
import Macan from "../assets/Porsche Macan.png";
import Panamera from "../assets/Porsche Panamera.png";

const Models = () => {
  const models = [
    {
      name: "Porsche 918 Spyder",
      image: P918,
      description:
        "This super sports car is a high-performance plug-in hybrid drive and combines a combustion engine delivering",
    },
    {
      name: "Porsche 911 GT3",
      image: P911,
      description:
        "This super sports car is a high-performance plug-in hybrid drive and combines a combustion engine delivering",
    },
    {
      name: "Porsche 718 Boxster",
      image: P718,
      description:
        "This super sports car is a high-performance plug-in hybrid drive and combines a combustion engine delivering",
    },
    {
      name: "Porsche Cayenne",
      image: Cayenne,
      description:
        "This super sports car is a high-performance plug-in hybrid drive and combines a combustion engine delivering",
    },
    {
      name: "Porsche Macan",
      image: Macan,
      description:
        "This super sports car is a high-performance plug-in hybrid drive and combines a combustion engine delivering",
    },
    {
      name: "Porsche Panamera",
      image: Panamera,
      description:
        "This super sports car is a high-performance plug-in hybrid drive and combines a combustion engine delivering",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6" id="models">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-gray-900">Our Models</h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {models.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            className="bg-gray-300 rounded-lg shadow-lg overflow-hidden"
          >
            <motion.img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4 text-sm">{item.description}</p>

              {/* View More Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-[120px] py-2 bg-[#478CCF] text-white font-semibold rounded-md hover:bg-[#36C2CE] transition duration-300"
              >
                View More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Models;
