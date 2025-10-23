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
  return (
    <motion.div
      className="space-y-8"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      {/* HERO SECTION */}
      <motion.section
        variants={fadeInUp}
        className="bg-primary rounded-lg p-8 flex flex-col md:flex-row items-center gap-8"
      >
        <motion.div variants={fadeInUp} className="flex-1 text-white">
          <h2 className="text-3xl font-bold">
            Welcome to Abel Motsoane Secondary School
          </h2>
          <p className="mt-3">
            Our mission is to provide quality education that empowers learners
            to succeed.
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              to="/admissions"
              className="flex items-center gap-2 px-4 py-2 rounded bg-secondary text-white hover:bg-blue-700 transition"
            >
              <FaUserEdit className="text-white text-lg" />
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded border border-white hover:bg-white hover:text-primary transition"
            >
              <FaEnvelope className="text-white group-hover:text-primary text-lg" />
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="w-full md:w-1/3 h-48 bg-white rounded-md overflow-hidden flex items-center justify-center"
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
        <h3 className="text-2xl font-semibold text-secondary">
          Latest News & Events
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Event 1 */}
          <motion.article
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
          >
            <img
              src={matricDance}
              alt="Matric Dance 2025"
              className="rounded-md mb-3 h-40 w-full object-cover"
            />
            <h4 className="font-semibold text-lg text-secondary">
              Matric Dance 2025
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              A night to remember! Our Matric class of 2025 celebrated their
              achievements in style.
            </p>
          </motion.article>

          {/* Event 2 */}
          <motion.article
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
          >
            <img
              src={scienceExpo}
              alt="Science Expo"
              className="rounded-md mb-3 h-40 w-full object-cover"
            />
            <h4 className="font-semibold text-lg text-secondary">
              Annual Science Expo
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Learners showcased creative experiments and projects, inspiring a
              love for STEM innovation.
            </p>
          </motion.article>

          {/* Event 3 */}
          <motion.article
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
          >
            <img
              src={sportsDay}
              alt="Sports Day"
              className="rounded-md mb-3 h-40 w-full object-cover"
            />
            <h4 className="font-semibold text-lg text-secondary">Sports Day</h4>
            <p className="text-sm text-gray-600 mt-1">
              Students and teachers came together for a fun day filled with
              athletics, teamwork, and spirit.
            </p>
          </motion.article>
        </div>
      </motion.section>
    </motion.div>
  );
}
