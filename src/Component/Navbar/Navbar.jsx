import { useState, useEffect } from "react";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") setIsLoggedIn(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-black shadow-lg" : "bg-black/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 text-white">
        {/* Logo */}
        <h1 className="text-4xl font-bold tracking-widest leading-tight pl-6 md:pl-0">
          COFFEE
          <span className="block text-sm font-normal tracking-[0.25em] text-gray-300">
            BLEND
          </span>
        </h1>

        {/* Nav Links */}
        <div className="flex items-center gap-10 ml-20">
          <ul className="hidden md:flex uppercase text-xl font-medium py-6 gap-16">
            {[
              { name: "Home", path: "/" },
              { name: "Menu", path: "/menu" },
              { name: "Services", path: "/services" },
              { name: "Blog", path: "/blog" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="relative transition duration-300 hover:text-yellow-500"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Shop Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <button className="relative transition duration-300 hover:text-yellow-500 uppercase">
                Shop
              </button>
              {shopOpen && (
                <ul className="absolute right-0 mt-3 bg-black/90 text-white rounded-lg shadow-lg w-40 py-2">
                  <li>
                    <Link
                      to="/shop"
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cart"
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition"
                    >
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/checkout"
                      className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition"
                    >
                      Checkout
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* Cart */}
          <div className="relative cursor-pointer flex items-center">
            <ShoppingCart className="w-6 h-6 hover:text-yellow-500 transition" />
            <span className="absolute -top-2 -right-3 bg-yellow-500 text-xs font-semibold rounded-full px-1.5">
              1
            </span>
          </div>

          {/* Auth Buttons */}
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="bg-yellow-500 px-4 py-2 rounded-md text-black font-semibold hover:bg-yellow-400 transition"
            >
              Login / Signup
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded-md text-white font-semibold hover:bg-red-500 transition"
            >
              Logout
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
