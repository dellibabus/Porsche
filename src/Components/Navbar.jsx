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
    <nav className="w-full h-16 bg-white text-gray-900 flex items-center justify-between px-6 md:px-10 shadow-lg fixed top-0 z-50 transition-all duration-300">
      {/* Logo - Always Visible */}
      <div className="text-2xl font-bold text-gray-900 cursor-pointer z-50">
        PORSCHE
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 cursor-pointer">
        {NavList.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              smooth={true}
              duration={500}
              className="text-gray-900 hover:text-gray-600 font-medium transition duration-300"
              activeClass="border-b-2 border-gray-900 font-bold"
              spy={true}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <div className="hidden md:flex items-center">
        <button className="px-5 py-2 rounded-lg bg-[#478CCF] text-white font-medium hover:bg-[#36C2CE] transition duration-300 shadow-md">
          Login
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 h-screen w-64 bg-white shadow-2xl transform ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } transition-transform duration-500 ease-in-out flex flex-col items-center pt-20 space-y-6 md:hidden`}
      >
        {NavList.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            smooth={true}
            duration={500}
            className="text-gray-900 hover:text-gray-600 font-medium transition duration-300"
            activeClass="border-b-2 border-gray-900 font-bold"
            spy={true}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <button className="px-6 py-2 rounded-lg bg-[#478CCF] text-white font-medium hover:bg-[#36C2CE] transition duration-300 shadow-md">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
