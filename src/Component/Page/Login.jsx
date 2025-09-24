import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    if (isLogin) {
      // Login
      const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
      if (
        registeredUser &&
        registeredUser.email === email &&
        registeredUser.password === password
      ) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } else {
      // Signup
      localStorage.setItem(
        "registeredUser",
        JSON.stringify({ email, password })
      );
      alert("Registration successful! Please login.");
      setIsLogin(true);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-black text-white px-4">
      <AnimatePresence mode="wait">
        <motion.form
          key={isLogin ? "login" : "signup"}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">
            {isLogin ? "Login" : "Signup"}
          </h2>

          {/* Email */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              placeholder=" "
              className="block py-3 px-4 w-full text-white bg-gray-700 rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400 peer"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-focus:-translate-y-6 peer-focus:scale-75">
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="password"
              placeholder=" "
              className="block py-3 px-4 w-full text-white bg-gray-700 rounded-lg border border-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400 peer"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-focus:-translate-y-6 peer-focus:scale-75">
              Password
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
          >
            {isLogin ? "Login" : "Signup"}
          </button>

          {/* Switch Login/Signup */}
          <p className="text-center text-gray-300">
            {isLogin
              ? "Don't have an account? "
              : "Already have an account? "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-yellow-400 cursor-pointer hover:text-yellow-300 font-semibold"
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </motion.form>
      </AnimatePresence>
    </div>
  );
}
