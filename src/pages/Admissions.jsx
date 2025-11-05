// src/pages/Admissions.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion"; 

export default function Admissions() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Application submitted", data);
    alert("Application submitted (demo)");
  };

  // 🔹 Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto py-10 px-4 sm:px-6"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        variants={fadeInUp}
        className="text-3xl sm:text-4xl font-bold text-secondary mb-4 text-center"
      >
        Admissions
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        className="text-gray-700 mb-8 text-center text-sm sm:text-base"
      >
        Follow the steps below to submit your application.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4"
        variants={fadeInUp}
      >
        {/* Full Name */}
        <motion.div variants={fadeInUp}>
          <input
            {...register("fullName", { required: "Full name is required" })}
            placeholder="Full name"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-secondary text-sm sm:text-base"
          />
          {errors.fullName && (
            <span className="text-red-600 text-sm">{errors.fullName.message}</span>
          )}
        </motion.div>

        {/* Email */}
        <motion.div variants={fadeInUp}>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-secondary text-sm sm:text-base"
          />
          {errors.email && (
            <span className="text-red-600 text-sm">{errors.email.message}</span>
          )}
        </motion.div>

        {/* Grade */}
        <motion.div variants={fadeInUp}>
          <select
            {...register("grade", { required: "Please select a grade" })}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-secondary text-sm sm:text-base"
          >
            <option value="">Select Grade</option>
            <option>Grade 8</option>
            <option>Grade 9</option>
            <option>Grade 10</option>
            <option>Grade 11</option>
          </select>
          {errors.grade && (
            <span className="text-red-600 text-sm">{errors.grade.message}</span>
          )}
        </motion.div>

        {/* Terms checkbox */}
        <motion.div className="flex items-center gap-2" variants={fadeInUp}>
          <input
            type="checkbox"
            {...register("terms", { required: "You must confirm the information" })}
          />
          <label className="text-sm sm:text-base">I confirm the information is correct</label>
        </motion.div>
        {errors.terms && (
          <span className="text-red-600 text-sm">{errors.terms.message}</span>
        )}

        {/* Submit button */}
        <motion.button
          type="submit"
          className="px-6 py-3 bg-secondary text-white font-semibold rounded hover:bg-blue-700 transition text-sm sm:text-base"
          variants={fadeInUp}
        >
          Submit Application
        </motion.button>
      </motion.form>

      <motion.p
        variants={fadeInUp}
        className="mt-4 text-sm text-gray-600 text-center"
      >
        (Document upload is mocked in this starter. To enable real uploads, connect an API or storage provider.)
      </motion.p>
    </motion.div>
  );
}
