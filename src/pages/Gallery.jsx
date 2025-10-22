// src/pages/Gallery.jsx
import React from 'react'
export default function Gallery(){
const placeholders = new Array(8).fill(0)
return (
<div>
<h2>Gallery</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
{placeholders.map((_,i) => (
<div key={i} className="h-28 bg-gray-100 rounded flex items-center justify-center">Image {i+1}</div>
))}
</div>
</div>
)
}