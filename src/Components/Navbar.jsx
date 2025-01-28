import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavList = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Models", path: "models" },
    { name: "Discover", path: "discover" },
  ];

  return (
    <nav className="w-full h-16 bg-gradient-to-l from-gray-900 to-gray-700 text-white flex items-center justify-between px-6 shadow-lg fixed top-0 z-50 transition-all duration-300">
      {/* Logo */}
      <div className="text-2xl font-porsche">
        <h1 className="font-bold cursor-pointer">PORSCHE</h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 cursor-pointer">
        {NavList.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              smooth={true}
              duration={500}
              className="text-white hover:text-blue-400 font-medium transition duration-300"
              activeClass="text-blue-600 font-bold"
              spy={true}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <div className="hidden md:flex items-center gap-4">
        <button className="bg-transparent to-green-500 text-white px-4 py-1 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition duration-300">
          Login
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg flex flex-col items-center space-y-6 py-4 transition-all duration-300 md:hidden">
          {NavList.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              smooth={true}
              duration={500}
              className="text-white hover:text-blue-400 font-medium transition duration-300"
              activeClass="text-blue-600 font-bold"
              spy={true}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-transparent text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition duration-300">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
