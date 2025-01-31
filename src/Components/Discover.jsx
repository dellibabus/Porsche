import React from "react";
import { motion } from "framer-motion";
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
    <div className="py-12 bg-white text-center" id="discover">
      {/* Title Section */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-bold text-gray-900 mb-8"
      >
        Discover
      </motion.h2>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 px-6 md:px-12">
        {cards.map((card, index) => (
          <motion.a
            key={index}
            href={card.link}
            className="group block w-full sm:w-2/3 md:w-1/4 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
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
          </motion.a>
        ))}
      </div>

      {/* Video Section */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <video
          src={Video}
          className="w-full h-[400px] sm:h-[500px] md:h-[600px]"
          autoPlay
          muted
          loop
          controls
        />
      </motion.div>
    </div>
  );
};

export default Discover;
