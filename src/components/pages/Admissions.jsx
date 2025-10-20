import React, { useState } from "react";

function Admissions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grade: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admissions</h1>
      <p>Follow the simple steps below to apply for admission.</p>

      <h3>Application Form</h3>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade Applying For"
          value={formData.grade}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#003366",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default Admissions;
