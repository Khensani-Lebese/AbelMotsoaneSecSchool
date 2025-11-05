// src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/school-logo.jpg'; 

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded ${
        isActive ? 'bg-secondary text-white' : 'hover:bg-primary/40'
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left section: Logo + School name */}
        <Link to="/" className="flex items-center gap-3">
          
          <img
            src={logo}
            alt="Abel Motsoane School Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h1 className="text-xl font-semibold">
              Abel Motsoane Secondary School
            </h1>
            <p className="text-xs text-gray-600">Knowledge • is • Virtue</p>
          </div>
        </Link>

        {/* Right section: Navigation menu */}
        <nav className="flex items-center gap-2">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/academics">Academics</NavItem>
          <NavItem to="/admissions">Admissions</NavItem>
          <NavItem to="/gallery">Gallery</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
      </div>
    </header>
  );
}
