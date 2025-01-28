import React from 'react';
import Travel from "../assets/Travel&experience.png";
import Approved from "../assets/Porsche Approved.png";
import Racing from "../assets/Racing.png";
import Video from "../assets/A drive like no other – the Porsche 911 GT3(1080P_HD).mp4";

const Discover = () => {
    const cards = [
        {
            title: "Travel & Experience",
            img: Travel,
            link: "#",
        },
        {
            title: "Porsche Approved",
            img: Approved,
            link: "#",
        },
        {
            title: "Motorsport Experience",
            img: Racing,
            link: "#",
        },
    ];

    return (
        <div className="py-12 bg-gradient-to-l from-gray-900 to-gray-700 text-center" id='discover'>
            <h2 className="text-5xl font-bold text-white mb-8">Discover</h2>
            
            <div className="flex flex-wrap justify-center gap-8 px-6 md:px-12">
                {cards.map((card, index) => (
                    <a
                        key={index}
                        href={card.link}
                        className="group block w-full sm:w-2/3 md:w-1/4 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
                    >
                        <div className="relative">
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                                <h3 className="text-white text-lg font-semibold">{card.title}</h3>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            
            <div className="mt-12">
                <iframe
                    src={Video}
                    allow="autoplay; encrypted-media"
                    className="w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-lg shadow-lg"
                    autoPlay
                    muted
                    loop
                />
            </div>
        </div>
    );
};

export default Discover;
