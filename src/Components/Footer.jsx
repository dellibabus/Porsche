import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Brand Information Section */}
        <div className="space-y-4 font-bold">
          <h2 className="text-3xl font-porsche text-gray-900">Porsche</h2>
          <p className="text-gray-700">
            Drive into the future with Porsche’s legendary performance and luxury. Our commitment to precision and innovation is embodied in every vehicle.
          </p>
          <div className="flex space-x-6 mt-4">
            <a href="#" className="text-gray-700 hover:text-gray-600 transition duration-300">
              <FaFacebook size={30} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-600 transition duration-300">
              <FaTwitter size={30} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-600 transition duration-300">
              <FaInstagram size={30} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-600 transition duration-300">
              <FaLinkedin size={30} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-600 transition duration-300">
              <FaYoutube size={30} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-600 transition duration-300">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-600 transition duration-300">About</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-600 transition duration-300">Models</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-600 transition duration-300">Discover</a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-600 transition duration-300">FAQ</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-600 transition duration-300">Warranty</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-600 transition duration-300">Service Center</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-600 transition duration-300">Track Your Order</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-700">© 2025 Porsche. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
