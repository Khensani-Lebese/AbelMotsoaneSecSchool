// src/pages/Contact.jsx
import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message sent (demo)");
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-secondary mb-8">Contact Us</h2>

      {/* TWO COLUMN LAYOUT */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* LEFT: CONTACT FORM */}
        <div className="md:w-1/2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-4 bg-white p-6 rounded-lg shadow"
          >
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            {errors.name && (
              <span className="text-red-600 text-sm">{errors.name.message}</span>
            )}

            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            {errors.email && (
              <span className="text-red-600 text-sm">{errors.email.message}</span>
            )}

            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Message"
              className="w-full p-3 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
            />
            {errors.message && (
              <span className="text-red-600 text-sm">{errors.message.message}</span>
            )}

            <button
              type="submit"
              className="px-6 py-3 bg-secondary text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: SCHOOL INFO + MAP */}
        <div className="md:w-1/2 space-y-4">
          <div className="bg-gray-50 p-6 rounded-lg shadow space-y-3">
            <h4 className="text-xl font-semibold text-secondary">School Address</h4>
            <p>2788, Rolihlahla Avenue, Slovoville, Winterveldt, Pretoria 0198</p>
            <p>Phone: (+27) 127077177 | Email: montshogej@gmail.com</p>
          </div>

          <div className="h-64 md:h-full rounded overflow-hidden shadow">
            <iframe
              title="School Location"
              src="https://www.google.com/maps?q=2788,+Rolihlahla+Avenue,+Slovoville,+Winterveldt,+Pretoria+0198&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
