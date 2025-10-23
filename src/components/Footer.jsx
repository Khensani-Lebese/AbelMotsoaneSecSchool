// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; 

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Abel Motsoane Secondary School — All rights reserved.</p>
        <p className="text-sm mt-2">Follow us on Instagram and Facebook</p>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-4 mt-3">
          <a
            href="https://www.instagram.com/abelmotshoanesecondary/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition-colors"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="https://www.facebook.com/p/Abel-Motshoane-High-School-100063781761130/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <FaFacebookF size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
