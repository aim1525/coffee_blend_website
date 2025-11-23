// src/pages/Services.jsx
import React from "react";
import { FaTruck, FaCoffee, FaRegListAlt } from "react-icons/fa";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import servicestop from "../../assets/images/services/servicestop.webp"
import { Link } from "react-router-dom";


const Services = () => {
  return (
    <div className="font-sans">

      {/* ---------- HERO SECTION ---------- */}
      <section
        className="relative bg-cover bg-center h-[70vh] flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            `url(${servicestop})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="text-5xl font-semibold z-10 tracking-widest">SERVICES</h1>
        <p className="z-10 mt-3">
          <Link to="/" className="text-gray-200 hover:underline">
            HOME
          </Link>{" "}
          <span className="mx-2">•</span> SERVICES
        </p>
      </section>

      {/* ---------- SERVICES SECTION ---------- */}
      <section className="bg-[#c89f67] text-center py-20 px-4 md:px-12">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Easy to Order */}
          <div className="flex flex-col items-center">
            <div className="border border-black p-6 mb-6">
              <FaRegListAlt size={50} />
            </div>
            <h2 className="text-lg font-semibold uppercase mb-3">
              Easy to Order
            </h2>
            <p className="text-sm leading-relaxed text-gray-900 max-w-sm">
              Even the all-powerful Pointing has no control about the blind texts;
              it is an almost unorthographic.
            </p>
          </div>

          {/* Fastest Delivery */}
          <div className="flex flex-col items-center">
            <div className="border border-black p-6 mb-6">
              <FaTruck size={50} />
            </div>
            <h2 className="text-lg font-semibold uppercase mb-3">
              Fastest Delivery
            </h2>
            <p className="text-sm leading-relaxed text-gray-900 max-w-sm">
              Even the all-powerful Pointing has no control about the blind texts;
              it is an almost unorthographic.
            </p>
          </div>

          {/* Quality Coffee */}
          <div className="flex flex-col items-center">
            <div className="border border-black p-6 mb-6">
              <FaCoffee size={50} />
            </div>
            <h2 className="text-lg font-semibold uppercase mb-3">
              Quality Coffee
            </h2>
            <p className="text-sm leading-relaxed text-gray-900 max-w-sm">
              Even the all-powerful Pointing has no control about the blind texts;
              it is an almost unorthographic.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER SECTION ---------- */}
      <footer className="bg-black text-gray-300 py-16 px-8 md:px-20">
        <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">

          {/* About Us */}
          <div>
            <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
              About Us
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Brewing passion and flavor, we serve quality coffee in a cozy space, creating moments of warmth, connection, and joy.
            </p>
            <div className="flex space-x-4 text-lg">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Recent Blog */}
          <div>
            <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
              Recent Blog
            </h3>

            <div className="flex items-start mb-4">
              <img
                src="https://vps029.manageserver.in/menu/wp-content/uploads/2024/01/images-8-1.jpeg"
                alt="food"
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <p className="font-medium text-white text-sm">
                  Even the all-powerful Pointing has no control about
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Sept 15, 2018 • Admin • 19
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                src="https://img.goodfon.com/wallpaper/big/e/cf/food-cofee-cooky.webp"
                alt="pasta"
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <p className="font-medium text-white text-sm">
                  Even the all-powerful Pointing has no control about
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Sept 15, 2018 • Admin • 19
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
              Services
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Cooked</li>
              <li>Deliver</li>
              <li>Quality Foods</li>
              <li>Mixed</li>
            </ul>
          </div>

          {/* Have a Questions */}
          <div>
            <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
              Have a Questions?
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <span className="block">Tinkune, </span>
                <span>Tinkune-32, Kathmandu, Nepal</span>
              </li>
              <li>+977- 9823478567</li>
              <li>coffeeblend@gmail.com</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6">
          Copyright ©2025 All rights reserved | CofeeBlend |
          <span className="text-red-500"></span>
        </p>
      </footer>
    </div>
  );
};

export default Services;
