import React from 'react'
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
            description: "This super sports car is a high-performance plug-in hybrid drive and combines a combustion engine delivering",
        },
        {
            name: "Porsche 911 GT3",
            image: P911,
            description: "This super sports car is a high-performance plug-in hybrid drive and combines a combustion engine delivering",
        },
        {
            name: "Porsche 718 Boxster",
            image: P718,
            description: "This super sports car is a high-performance plug-in hybrid drive and combines a combustion engine delivering",
        },
        {
            name: "Porsche Cayenne",
            image: Cayenne,
            description: "This super sports car is a high-performance plug-in hybrid drive and combines a combustion engine delivering",
        },
        {
            name: "Porsche Macan",
            image: Macan,
            description: "This super sports car is a high-performance plug-in hybrid drive and combines a combustion engine delivering",
        },
        {
            name: "Porsche Panamera",
            image: Panamera,
            description: "This super sports car is a high-performance plug-in hybrid drive and combines a combustion engine delivering",
        }
    ];

    return (
        <div className="max-w-6xl mx-auto p-6" id='models'>
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800">Our Models</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {models.map((items, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={items.image} alt={items.name} className="w-full h-64 object-cover hover:scale-105 transition duration-300 ease-in-out transform"/>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{items.name}</h2>
                            <p className="text-gray-600 mb-4 text-sm">{items.description}</p>
                            {/* View More Button */}
                            <button className="w-[100px] py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200">
                                View More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Models;
