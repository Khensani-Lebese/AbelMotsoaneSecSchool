// src/pages/Contact.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion"; 
import { FaPaperPlane } from "react-icons/fa"; 

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto py-10 px-6"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        variants={fadeInUp}
        className="text-3xl font-bold text-secondary mb-8"
      >
        Contact Us
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row gap-8"
        variants={fadeInUp}
      >
        {/* LEFT: CONTACT FORM */}
        <motion.div className="md:w-1/2" variants={fadeInUp}>
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

            {/* Submit button with icon */}
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              <FaPaperPlane className="text-white text-lg" /> Send Message
            </button>
          </form>
        </motion.div>

        {/* RIGHT: SCHOOL INFO + MAP */}
        <motion.div className="md:w-1/2 space-y-4" variants={fadeInUp}>
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
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
