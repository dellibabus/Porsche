import React from 'react';
import Porsche from "../assets/aboutimg.png";

const About = () => {
    return (
        <div className="max-w-7xl mx-auto p-8" id='about'>
            {/* Title Section */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">
                    About Porsche
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    The legacy of performance, luxury, and innovation, driving the future of automotive excellence.
                </p>
            </div>

            {/* Image and Content Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Image Section */}
                <div className="flex-1">
                    <img
                        src={Porsche}
                        alt="Porsche"
                        className="w-full rounded-3xl"
                    />
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center sm:text-left px-4 lg:px-16">
                    <h2 className="text-4xl font-semibold text-gray-100 mb-6">
                        Innovation, Performance, and Luxury — Porsche
                    </h2>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed tracking-wide">
                        Founded in 1931 by Ferdinand Porsche, Porsche has built a legacy rooted in excellence, precision, and a relentless pursuit of innovation.
                        From our iconic 911 to the groundbreaking electric Taycan, every Porsche vehicle is designed with one goal in mind: to deliver an unparalleled driving experience.
                    </p>
                    {/* <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
                        Porsche’s rich history includes decades of success in motorsport, with numerous victories at the prestigious 24 Hours of Le Mans and other racing events around the world. 
                        This legacy has influenced every aspect of our vehicles, from their handling to their power, ensuring each car is as exhilarating as the last.
                    </p> */}
                </div>
            </div>

            {/* Call to Action Section */}
            {/* <div className="text-center mt-12">
                <button className="bg-blue-500 text-white py-3 px-8 rounded-md text-xl font-semibold hover:bg-blue-600 transition-all duration-300">
                    Explore Our Models
                </button>
            </div> */}
        </div>
    );
};

export default About;
