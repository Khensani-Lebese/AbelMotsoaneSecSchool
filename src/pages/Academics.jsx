// src/pages/Academics.jsx
import React from "react";

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

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      {/* HEADER */}
      <h2 className="text-3xl font-bold text-secondary mb-4">Academics</h2>
      <p className="text-gray-700 mb-8 leading-relaxed">
        Our academic programme provides a balanced curriculum designed to
        prepare learners for tertiary education and future careers. We emphasize
        both theoretical knowledge and practical skills.
      </p>

      {/* DEPARTMENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((d) => (
          <div
            key={d.name}
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-secondary mb-2">
              {d.name}
            </h3>
            <p className="text-gray-700">{d.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
