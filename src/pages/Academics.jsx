// src/pages/Academics.jsx
import React from 'react'
export default function Academics(){
const departments = ['Mathematics','Science','Languages','Arts','ICT']
return (
<div>
<h2>Academics</h2>
<p>Overview of our curriculum.</p>
<ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
{departments.map(d => (
<li key={d} className="p-4 border rounded">{d}</li>
))}
</ul>
</div>
)
}