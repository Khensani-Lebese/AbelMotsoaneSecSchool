// src/pages/Academics.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Academics() {
  const departments = [
    {
      name: "Mathematics",
      description:
        "Develops analytical thinking and problem-solving skills through a strong foundation in algebra, geometry, and statistics.",
    },
    {
      name: "Science",
      description:
        "Encourages curiosity and experimentation across Physical, Life, and Environmental Sciences.",
    },
    {
      name: "Languages",
      description:
        "Builds communication, comprehension, and writing skills in English, Setswana, and other local languages.",
    },
    {
      name: "Arts",
      description:
        "Inspires creativity and self-expression through visual arts, drama, and music.",
    },
    {
      name: "ICT",
      description:
        "Equips learners with modern digital literacy, programming, and computer applications knowledge.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto py-10 px-4 sm:px-6"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      {/* HEADER */}
      <motion.h2
        variants={fadeInUp}
        className="text-3xl sm:text-4xl font-bold text-secondary mb-4 text-center"
      >
        Academics
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        className="text-gray-700 mb-10 leading-relaxed text-center max-w-3xl mx-auto text-sm sm:text-base"
      >
        Our academic programme provides a balanced curriculum designed to prepare
        learners for tertiary education and future careers. We emphasize both
        theoretical knowledge and practical skills to build confident and
        capable learners.
      </motion.p>

      {/* DEPARTMENT GRID */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={fadeInUp}
      >
        {departments.map((d) => (
          <motion.div
            key={d.name}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2">
              {d.name}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">{d.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
