// src/pages/Admissions.jsx
import React from 'react'
import { useForm } from 'react-hook-form'


export default function Admissions(){
const { register, handleSubmit, formState: { errors } } = useForm()
const onSubmit = data => {
console.log('Application submitted', data)
alert('Application submitted (demo)')
}


return (
<div className="max-w-2xl">
<h2>Admissions</h2>
<p>Follow the steps to register.</p>


<form onSubmit={handleSubmit(onSubmit)} className="mt-4 grid grid-cols-1 gap-4">
<input {...register('fullName', { required: 'Full name required' })} placeholder="Full name" className="p-2 border rounded" />
{errors.fullName && <span className="text-red-600">{errors.fullName.message}</span>}


<input {...register('email', { required: 'Email required' })} placeholder="Email" className="p-2 border rounded" />
{errors.email && <span className="text-red-600">{errors.email.message}</span>}


<select {...register('grade', { required: true })} className="p-2 border rounded">
<option value="">Select Grade</option>
<option>Grade 8</option>
<option>Grade 9</option>
<option>Grade 10</option>
<option>Grade 11</option>
</select>


<label className="flex items-center gap-2">
<input type="checkbox" {...register('terms')} /> I confirm the information is correct
</label>


<button className="px-4 py-2 bg-secondary text-white rounded" type="submit">Submit Application</button>
</form>


<p className="mt-4 text-sm text-gray-600">(Document upload is mocked in this starter. To enable real uploads, connect an API or storage provider.)</p>
</div>
)
}