import React from "react";

function Gallery() {
  const images = [
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/200",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gallery</h1>
      <p>Explore moments from our school events and activities.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`School Event ${index + 1}`}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
