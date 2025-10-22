// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import matricDance from "../assets/matric-dance.jpg";
import scienceExpo from "../assets/STEM.jpg";
import sportsDay from "../assets/sports-day.jpg";
import schoolBanner from "../assets/school-logo.jpg";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* HERO SECTION */}
      <section className="bg-primary rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-white">
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
              className="px-4 py-2 rounded bg-secondary text-white hover:bg-blue-700 transition"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded border border-white hover:bg-white hover:text-primary transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/3 h-48 bg-white rounded-md overflow-hidden flex items-center justify-center">
          <img
            src= {schoolBanner}
            alt="School banner"
            className="object-contain w-full h-full"
          />
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section>
        <h3 className="text-2xl font-semibold text-secondary">
          Latest News & Events
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Event 1 */}
          <article className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white">
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
          </article>

          {/* Event 2 */}
          <article className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white">
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
          </article>

          {/* Event 3 */}
          <article className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white">
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
          </article>
        </div>
      </section>
    </div>
  );
}
