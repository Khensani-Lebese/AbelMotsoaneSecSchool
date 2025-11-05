// src/pages/Gallery.jsx
import React from "react";
import { motion } from "framer-motion"; 

import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpg";
import img5 from "../assets/gallery5.jpg";
import img6 from "../assets/gallery6.jpg";
import img7 from "../assets/gallery7.jpg";
import img8 from "../assets/gallery8.jpg";

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto py-10 px-4 sm:px-6"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.h2
        variants={fadeInUp}
        className="text-3xl sm:text-4xl font-bold text-secondary mb-6 text-center"
      >
        Gallery
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
        variants={fadeInUp}
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="h-32 sm:h-40 md:h-48 rounded overflow-hidden shadow hover:shadow-lg transition-transform duration-300"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
