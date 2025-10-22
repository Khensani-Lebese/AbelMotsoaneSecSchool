// src/pages/Admissions.jsx
import React from "react";
import { useForm } from "react-hook-form";

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

  return (
    <div className="max-w-2xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-secondary mb-2">Admissions</h2>
      <p className="text-gray-700 mb-6">
        Follow the steps below to submit your application.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 grid grid-cols-1 gap-4"
      >
        {/* Full Name */}
        <div>
          <input
            {...register("fullName", { required: "Full name is required" })}
            placeholder="Full name"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          {errors.fullName && (
            <span className="text-red-600 text-sm">{errors.fullName.message}</span>
          )}
        </div>

        {/* Email */}
        <div>
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
        </div>

        {/* Grade */}
        <div>
          <select
            {...register("grade", { required: "Please select a grade" })}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
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
        </div>

        {/* Terms checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("terms", { required: "You must confirm the information" })}
          />
          <label>I confirm the information is correct</label>
        </div>
        {errors.terms && (
          <span className="text-red-600 text-sm">{errors.terms.message}</span>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="px-6 py-3 bg-secondary text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        (Document upload is mocked in this starter. To enable real uploads, connect an API or storage provider.)
      </p>
    </div>
  );
}
