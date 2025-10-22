// src/App.jsx
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'


export default function App(){
return (
<div className="min-h-screen flex flex-col">
<Header />
<main className="flex-1 container mx-auto px-4 py-8">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/academics" element={<Academics/>} />
<Route path="/admissions" element={<Admissions/>} />
<Route path="/gallery" element={<Gallery/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>
</main>
<Footer />
</div>
)
}