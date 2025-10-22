// src/components/Footer.jsx
import React from 'react'
export default function Footer(){
return (
<footer className="bg-secondary text-white py-6">
<div className="container mx-auto px-4 text-center">
<p>&copy; {new Date().getFullYear()} Abel Motsoane Secondary School — All rights reserved.</p>
<p className="text-sm mt-2">Follow us on Instagram and Facebook</p>
</div>
</footer>
)
}