// src/pages/Contact.jsx
import React from 'react'
import { useForm } from 'react-hook-form'


export default function Contact(){
const { register, handleSubmit } = useForm()
const onSubmit = data => { console.log(data); alert('Message sent (demo)') }
return (
<div className="max-w-xl">
<h2>Contact Us</h2>
<form onSubmit={handleSubmit(onSubmit)} className="mt-4 grid gap-3">
<input {...register('name')} placeholder="Name" className="p-2 border rounded" />
<input {...register('email')} placeholder="Email" className="p-2 border rounded" />
<textarea {...register('message')} placeholder="Message" className="p-2 border rounded" />
<button className="px-4 py-2 bg-secondary text-white rounded" type="submit">Send Message</button>
</form>


<div className="mt-6">
<h4>School Address</h4>
<p>123 Main Rd, Local Town</p>
<p>Phone: +27 12 345 6789 | Email: info@abelmotsoane.school</p>
<div className="mt-4 h-48 bg-gray-100 rounded flex items-center justify-center">Map placeholder</div>
</div>
</div>
)
}