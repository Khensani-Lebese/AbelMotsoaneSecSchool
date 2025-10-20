import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Get in touch with us below.</p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

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
          Send Message
        </button>
      </form>

      <div style={{ marginTop: "30px" }}>
        <h3>Our Contact Info</h3>
        <p>📍 123 School Lane, Soweto, Johannesburg</p>
        <p>📞 (011) 555-1234</p>
        <p>📧 info@abelmotsoane.co.za</p>
      </div>
    </div>
  );
}

export default Contact;
