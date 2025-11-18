import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import React from "react";

import Menu from "./Component/Page/Menu";
import Services from "./Component/Page/Services";
import Blog from "./Component/Page/Blog";
import About from "./Component/Page/About";
import Shop from "./Component/Page/Shop";
import Contact from "./Component/Page/Contact";
import Hero from "./Component/Page/Hero";
import SignupForm from "./Component/Page/Signup";
import LoginForm from "./Component/Page/Login";
import VerifyEmail from "./Component/auth/VerifyEmail";
import ScrollToTop from "./Component/Page/ScrollToTop";
import SingleProduct from "./Component/Page/SingleProduct";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <ScrollToTop />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/SingleProduct" element={<SingleProduct />} />
          {/* Future expansion */}
        <Route path="/verify/:token" element={<VerifyEmail />} />

          <Route path="/cart" element={<div>Cart Page</div>} />
          <Route path="/checkout" element={<div>Checkout Page</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
