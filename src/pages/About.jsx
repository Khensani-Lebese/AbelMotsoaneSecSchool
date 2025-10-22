// src/pages/About.jsx
import React from "react";
import principalImg from "../assets/principal.jpg"; // 👈 Add your image here

export default function About() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      {/* PAGE TITLE */}
      <h2 className="text-3xl font-bold text-secondary mb-4">About Us</h2>

      {/* SCHOOL OVERVIEW */}
      <p className="text-gray-700 leading-relaxed mb-6">
        Abel Motsoane Secondary School is dedicated to nurturing excellence in
        academics, leadership, and character. Established in the heart of
        Winterveldt, Pretoria, our school has been a beacon of hope and success
        for learners from diverse backgrounds.
      </p>

      {/* VISION, MISSION, VALUES */}
      <section className="mt-8">
        <h3 className="text-2xl font-semibold text-secondary mb-3">
          Our Vision
        </h3>
        <p className="text-gray-700 mb-4">
          To be a leading educational institution producing confident, skilled,
          and responsible citizens who will shape a better future.
        </p>

        <h3 className="text-2xl font-semibold text-secondary mb-3">
          Our Mission
        </h3>
        <p className="text-gray-700 mb-4">
          To provide quality education that fosters creativity, discipline, and
          lifelong learning through committed teaching and community
          involvement.
        </p>

        <h3 className="text-2xl font-semibold text-secondary mb-3">
          Our Values
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Respect and Integrity</li>
          <li>Excellence and Hard Work</li>
          <li>Teamwork and Leadership</li>
          <li>Innovation and Responsibility</li>
        </ul>
      </section>

      {/* PRINCIPAL'S MESSAGE */}
      <section className="mt-12 bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src={principalImg}
          alt="Principal"
          className="w-40 h-40 rounded-full object-cover shadow-md"
        />
        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-2">
            Principal's Message
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Dear learners, parents, and community members —
            <br />
            Welcome to Abel Motsoane Secondary School. Our institution stands as
            a symbol of dedication, growth, and opportunity. Together, we
            continue to inspire a love for learning and prepare our students to
            thrive in a changing world.
          </p>
          <p className="mt-3 font-medium text-secondary">– Principal M. Dlamini</p>
        </div>
      </section>
    </div>
  );
}
