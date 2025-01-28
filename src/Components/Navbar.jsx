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
        <nav className="w-full h-16 bg-white text-gray-800 flex items-center justify-between px-4 shadow-md top-0 fixed z-50">
            <div className="text-2xl font-porsche">
                <h1 className="font-bold cursor-pointer">PORSCHE</h1>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-6 cursor-pointer">
                {NavList.map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.path}
                            smooth={true}
                            duration={500}
                            className="text-gray-800 hover:text-blue-600 font-medium"
                            activeClass="text-blue-600 font-bold"
                            spy={true} // Enables observing the active section
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="hidden md:flex items-center gap-4">
                <button className="bg-transparent text-black border-2 border-gray-300 px-4 py-1 rounded-md hover:bg-gray-300 hover:border-2">
                    Login
                </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden">
                    {NavList.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            smooth={true}
                            duration={500}
                            className="text-gray-800 hover:text-blue-600 font-medium"
                            activeClass="text-blue-600 font-bold"
                            spy={true}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex flex-col items-center space-y-2 w-4/5">
                        <button className="bg-transparent text-black border-2 border-gray-300 px-4 py-1 rounded-md hover:bg-gray-300 w-[100px]">
                            Login
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
