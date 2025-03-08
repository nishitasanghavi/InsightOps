import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setError(""); // Clear error message on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === formData.email);

    if (!user) {
      setError("This email is not registered. Please sign up first.");
    } else if (user.password !== formData.password) {
      setError("Incorrect password. Please try again.");
    } else {
      setError("");
      alert("Welcome back!");
      navigate('/dashboard', {replace:true})
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-100 overflow-hidden">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-2xl rounded-3xl w-full max-w-4xl flex overflow-hidden"
    >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="hidden md:flex w-1/2 bg-[#000000] text-white p-12 flex-col justify-center"
        >
          <h1 className="text-4xl font-extrabold mb-4">Welcome Back!</h1>
          <p className="text-lg leading-relaxed mb-4">
            Login to access exclusive job opportunities tailored just for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="w-full md:w-1/2 p-10"
        >
          <h2 className="text-3xl font-bold text-black mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
          <div>
  <label
    htmlFor="email"
    className="block text-sm font-medium text-black text-left pl-1"
  >
    Email Address
  </label>
  <input
    id="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Enter your email"
    className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
  />
</div>
<div>
  <label
    htmlFor="password"
    className="block text-sm font-medium text-black text-left pl-1"
  >
    Password
  </label>
  <input
    id="password"
    type="password"
    value={formData.password}
    onChange={handleChange}
    placeholder="Enter your password"
    className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
  />
</div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-[#E2511A] text-white rounded-lg font-semibold hover:bg-orange-600"
            >
              Login
            </motion.button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link to="/signup" replace className="text-green-600 font-bold hover:underline">
              Sign up here
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;