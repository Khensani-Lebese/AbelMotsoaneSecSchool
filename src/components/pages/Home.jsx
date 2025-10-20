import React from "react";
import "./Home.css";
import heroImage from "../../assets/hero-school.jpg";
import logo from "../../assets/school-logo.png";

function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        {/* Logo always on top */}
        <img src={logo} alt="Abel Motsoane School Logo" className="logo" />

        {/* Hero content */}
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to Abel Motsoane Secondary School</h1>
            <p>
              Empowering future leaders through quality education, character development, and community engagement.
            </p>
            <div className="cta-buttons">
              <a href="/admissions" className="cta-button">Apply Now</a>
              <a href="/contact" className="cta-button secondary">Contact Us</a>
            </div>
          </div>
          <img src={heroImage} alt="School Banner" className="hero-image" />
        </div>
      </header>
    </div>
  );
}

export default Home;
