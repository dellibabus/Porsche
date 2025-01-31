import React from "react";
import { motion } from "framer-motion";
import Porsche from "../assets/Aboutimg.png";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-8" id="about">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          About Porsche
        </h1>
        <p className="text-xl text-gray-800 max-w-2xl mx-auto">
          The legacy of performance, luxury, and innovation, driving the future
          of automotive excellence.
        </p>
      </motion.div>

      {/* Image and Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Image Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={Porsche}
            alt="Porsche"
            className="w-full rounded-3xl drop-shadow-lg"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="flex-1 text-center sm:text-left px-4 lg:px-16"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-semibold text-gray-700 mb-6">
            Innovation, Performance, and Luxury — Porsche
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed tracking-wide">
            Founded in 1931 by Ferdinand Porsche, Porsche has built a legacy
            rooted in excellence, precision, and a relentless pursuit of
            innovation. From our iconic 911 to the groundbreaking electric
            Taycan, every Porsche vehicle is designed with one goal in mind: to
            deliver an unparalleled driving experience.
          </p>
        </motion.div>
      </div>

      {/* Call to Action Section (Uncomment if needed) */}
      {/* <motion.div 
          className="text-center mt-12"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          >
          <button className="bg-blue-500 text-gray-900 py-3 px-8 rounded-md text-xl font-semibold hover:bg-blue-600 transition-all duration-300">
              Explore Our Models
          </button>
      </motion.div> */}
    </div>
  );
};

export default About;
