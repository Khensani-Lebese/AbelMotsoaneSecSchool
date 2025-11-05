// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import { FaEnvelope, FaUserEdit } from "react-icons/fa";
import matricDance from "../assets/matric-dance.jpg";
import scienceExpo from "../assets/STEM.jpg";
import sportsDay from "../assets/sports-day.jpg";
import schoolBanner from "../assets/school-logo.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const events = [
    {
      img: matricDance,
      title: "Matric Dance 2025",
      text: "A night to remember! Our Matric class of 2025 celebrated their achievements in style.",
    },
    {
      img: scienceExpo,
      title: "Annual Science Expo",
      text: "Learners showcased creative experiments and projects, inspiring a love for STEM innovation.",
    },
    {
      img: sportsDay,
      title: "Sports Day",
      text: "Students and teachers enjoyed a fun day filled with athletics, teamwork, and spirit.",
    },
  ];

  return (
    <motion.div
      className="space-y-8 px-4 sm:px-6 md:px-0"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      {/* HERO SECTION */}
      <motion.section
        variants={fadeInUp}
        className="bg-primary rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6"
      >
        <motion.div
          variants={fadeInUp}
          className="flex-1 text-white text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">
            Welcome to Abel Motsoane Secondary School
          </h2>
          <p className="mt-3 text-sm sm:text-base px-2 md:px-0">
            Our mission is to provide quality education that empowers learners
            to succeed.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              to="/admissions"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded bg-secondary text-white hover:bg-blue-700 transition text-sm sm:text-base"
            >
              <FaUserEdit className="text-white text-lg" />
              Apply Now
            </Link>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded border border-white hover:bg-white hover:text-primary transition text-sm sm:text-base"
            >
              <FaEnvelope className="text-white text-lg" />
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-1/3 md:h-48 bg-white rounded-md overflow-hidden flex items-center justify-center shadow"
        >
          <img
            src={schoolBanner}
            alt="School banner"
            className="object-contain w-full h-full"
          />
        </motion.div>
      </motion.section>

      {/* EVENTS SECTION */}
      <motion.section variants={fadeInUp}>
        <h3 className="text-xl sm:text-2xl font-semibold text-secondary text-center md:text-left">
          Latest News & Events
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {events.map((event, i) => (
            <motion.article
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
            >
              <img
                src={event.img}
                alt={event.title}
                className="rounded-md mb-3 h-40 w-full object-cover"
              />
              <h4 className="font-semibold text-lg text-secondary">{event.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{event.text}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
