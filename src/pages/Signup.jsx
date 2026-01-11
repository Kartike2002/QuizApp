import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!formData.fullName || !formData.email || !formData.password) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    // Demo mode: save user
    localStorage.setItem(
      "registeredUser",
      JSON.stringify(formData)
    );

    setLoading(false);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gray-100 dark:bg-gray-900 px-4">

      <div className="bg-white dark:bg-gray-800 
                      rounded-2xl shadow-xl p-8 w-full max-w-md">

        <h1 className="text-2xl font-extrabold text-center mb-6
                       text-gray-900 dark:text-gray-100">
          Create Account
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700 
                          dark:bg-red-900 dark:text-red-200
                          p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium 
                               text-gray-800 dark:text-gray-200">
              Full Name
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-3 py-2 rounded-lg border
                         bg-white text-gray-900
                         placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium 
                               text-gray-800 dark:text-gray-200">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg border
                         bg-white text-gray-900
                         placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium 
                               text-gray-800 dark:text-gray-200">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full px-3 py-2 rounded-lg border
                         bg-white text-gray-900
                         placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700
                       text-white py-2 rounded-lg font-bold transition">
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4 
                      text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 dark:text-blue-400 font-semibold"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
