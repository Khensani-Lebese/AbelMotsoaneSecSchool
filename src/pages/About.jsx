// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion"; 
import {
  Eye,
  Target,
  Heart,
  MessageSquare,
} from "lucide-react"; 
import principalImg from "../assets/principal.jpg";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <motion.div
      className="max-w-5xl mx-auto py-10 px-6"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      {/* PAGE TITLE */}
      <motion.h2
        variants={fadeInUp}
        className="text-3xl font-bold text-secondary mb-8 flex items-center justify-center gap-2 text-center"
      >
        About Us <Heart className="w-6 h-6 text-secondary" />
      </motion.h2>

      {/* SCHOOL OVERVIEW */}
      <motion.p
        variants={fadeInUp}
        className="text-gray-700 leading-relaxed mb-10 text-center"
      >
        Abel Motsoane Secondary School is dedicated to nurturing excellence in
        academics, leadership, and character. Established in the heart of
        Winterveldt, Pretoria, our school has been a beacon of hope and success
        for learners from diverse backgrounds.
      </motion.p>

      {/* VISION, MISSION, VALUES */}
      <section className="mt-8 space-y-12">
        <motion.div variants={fadeInUp} className="text-center">
          <h3 className="text-2xl font-semibold text-secondary mb-3 flex items-center justify-center gap-2">
            Our Vision <Eye className="w-6 h-6 text-secondary" />
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            To be a leading educational institution producing confident, skilled,
            and responsible citizens who will shape a better future.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center">
          <h3 className="text-2xl font-semibold text-secondary mb-3 flex items-center justify-center gap-2">
            Our Mission <Target className="w-6 h-6 text-secondary" />
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            To provide quality education that fosters creativity, discipline, and
            lifelong learning through committed teaching and community
            involvement.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center">
          <h3 className="text-2xl font-semibold text-secondary mb-3 flex items-center justify-center gap-2">
            Our Values <Heart className="w-6 h-6 text-secondary" />
          </h3>
          <ul className="list-disc list-inside text-gray-700 max-w-md mx-auto text-left space-y-1">
            <li>Respect and Integrity</li>
            <li>Excellence and Hard Work</li>
            <li>Teamwork and Leadership</li>
            <li>Innovation and Responsibility</li>
          </ul>
        </motion.div>
      </section>

      {/* PRINCIPAL'S MESSAGE */}
      <motion.section
        variants={fadeInUp}
        className="mt-16 bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row items-center justify-center gap-6 shadow-sm hover:shadow-md transition"
      >
        <motion.img
          src={principalImg}
          alt="Principal"
          className="w-40 h-40 rounded-full object-cover shadow-md"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-secondary mb-2 flex items-center justify-center md:justify-start gap-2">
            Principal's Message{" "}
            <MessageSquare className="w-6 h-6 text-secondary" />
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Dear learners, parents, and community members — <br />
            Welcome to Abel Motsoane Secondary School. Our institution stands as
            a symbol of dedication, growth, and opportunity. Together, we
            continue to inspire a love for learning and prepare our students to
            thrive in a changing world.
          </p>
          <p className="mt-3 font-medium text-secondary">
            – Principal M. Dlamini
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
}
