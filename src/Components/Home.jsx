import React from "react";
import CarImage from "../assets/Heroimage.png";

const Home = () => {
    return (
        <div className="w-full min-h-screen bg-white text-gray-800 flex flex-col-reverse md:flex-row items-center px-6 md:px-16 lg:px-24 py-12" id="home">

            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="text-red-500">P</span>orsche 911 GT3 RS
                </h1>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Top performance requires more than perfect conditions and luck. Relentless training to become stronger and faster. Questioning everything, especially yourself.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">The 911 GT3 RS is a limited-production vehicle, making it highly sought after by collectors and driving enthusiasts. Its price reflects its high-performance pedigree and exceptional craftsmanship.</p>
                <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg text-sm md:text-base hover:bg-blue-700 transition duration-200">
                    Explore More
                </button>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={CarImage}
                    alt="Porsche 911 GT3 RS"
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
                />
            </div>
        </div>
    );
};

export default Home;
