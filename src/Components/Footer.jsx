import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.div 
      className="bg-white py-12 mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        
        {/* Brand Information Section */}
        <motion.div 
          className="space-y-4 font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-porsche text-gray-900">Porsche</h2>
          <p className="text-gray-700">
            Drive into the future with Porsche’s legendary performance and luxury. Our commitment to precision and innovation is embodied in every vehicle.
          </p>
          <div className="flex space-x-6 mt-4">
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-700 hover:text-gray-600 transition duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={30} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Models", "Discover"].map((link, index) => (
              <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#" className="text-gray-800 hover:text-gray-600 transition duration-300">
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Support Section */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold">Support</h3>
          <ul className="space-y-2">
            {["FAQ", "Warranty", "Service Center", "Track Your Order"].map((link, index) => (
              <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#" className="text-gray-800 hover:text-gray-600 transition duration-300">
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom Section */}
      <motion.div 
        className="mt-12 border-t border-gray-700 pt-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="text-sm text-gray-700">© 2025 Porsche. All rights reserved.</p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
