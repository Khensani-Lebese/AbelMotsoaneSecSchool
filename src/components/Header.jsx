import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/school-logo.jpg';

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `px-3 py-2 rounded block ${
        isActive ? 'bg-secondary text-white' : 'hover:bg-primary/40'
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <header className="bg-white shadow fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Abel Motsoane School Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
          <div>
            <h1 className="text-sm md:text-xl font-semibold">
              Abel Motsoane Secondary School
            </h1>
            <p className="text-[10px] md:text-xs text-gray-600">Knowledge • is • Virtue</p>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-secondary text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/academics">Academics</NavItem>
          <NavItem to="/admissions">Admissions</NavItem>
          <NavItem to="/gallery">Gallery</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
      </div>

      {/* Mobile Dropdown with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white shadow px-4 py-3 space-y-1 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <NavItem to="/" onClick={() => setMenuOpen(false)}>Home</NavItem>
            <NavItem to="/about" onClick={() => setMenuOpen(false)}>About</NavItem>
            <NavItem to="/academics" onClick={() => setMenuOpen(false)}>Academics</NavItem>
            <NavItem to="/admissions" onClick={() => setMenuOpen(false)}>Admissions</NavItem>
            <NavItem to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavItem>
            <NavItem to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavItem>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
