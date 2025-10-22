// src/pages/Gallery.jsx
import React from "react";

// Import images from assets folder
import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpg";
import img5 from "../assets/gallery5.jpg";
import img6 from "../assets/gallery6.jpg";
import img7 from "../assets/gallery7.jpg";
import img8 from "../assets/gallery8.jpg";

export default function Gallery() {
  // Put all images in an array
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-secondary mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            className="h-32 rounded overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
