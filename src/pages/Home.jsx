// src/pages/Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(){
return (
<div className="space-y-8">
<section className="bg-primary rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<h2 className="text-3xl font-bold">Welcome to Abel Motsoane Secondary School</h2>
<p className="mt-3">Our mission is to provide quality education that empowers learners to succeed.</p>
<div className="mt-4 flex gap-3">
<Link to="/admissions" className="px-4 py-2 rounded bg-secondary text-white">Apply Now</Link>
<Link to="/contact" className="px-4 py-2 rounded border">Contact Us</Link>
</div>
</div>
<div className="w-full md:w-1/3 h-48 bg-white rounded-md flex items-center justify-center">Banner Image</div>
</section>


<section>
<h3 className="text-2xl font-semibold">Latest News & Events</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
<article className="p-4 border rounded">Event 1 (placeholder)</article>
<article className="p-4 border rounded">Event 2 (placeholder)</article>
<article className="p-4 border rounded">Event 3 (placeholder)</article>
</div>
</section>
</div>
)
}