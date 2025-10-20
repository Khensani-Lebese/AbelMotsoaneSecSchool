import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Academics from "./components/pages/Academics";
import Admissions from "./components/pages/Admissions";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", backgroundColor: "#003366", color: "#fff" }}>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0 }}>
          <li><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link></li>
          <li><Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link></li>
          <li><Link to="/academics" style={{ color: "#fff", textDecoration: "none" }}>Academics</Link></li>
          <li><Link to="/admissions" style={{ color: "#fff", textDecoration: "none" }}>Admissions</Link></li>
          <li><Link to="/gallery" style={{ color: "#fff", textDecoration: "none" }}>Gallery</Link></li>
          <li><Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
