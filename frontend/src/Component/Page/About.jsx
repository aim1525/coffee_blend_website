import React, { useState, useEffect } from "react";
import aboutmenu1 from "../../assets/images/aboutmenu/aboutmenu1.webp"
import aboutmenu2 from "../../assets/images/aboutmenu/aboutmenu2.webp"
import aboutmenu3 from "../../assets/images/aboutmenu/aboutmenu3.jpeg"
import aboutmenu4 from "../../assets/images/aboutmenu/aboutmenu4.jpg"
import aboutbackground from "../../assets/images/aboutmenu/aboutbackground.webp"
import aboutbackground1 from "../../assets/images/aboutmenu/aboutbackground1.webp"
import aboutbackground2 from "../../assets/images/aboutmenu/aboutbackground2.webp"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import aboutustop from "../../assets/images/aboutmenu/aboutustop.jpg"
import aboutourstory from "../../assets/images/aboutmenu/aboutourstory.webp"
import {
  Quote,
  Coffee,
  MapPin,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  Calendar,
  User,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

// ✅ Page 1 — Hero Section

function About() {
  useEffect(() => {
    document.title = "About Us | Coffee Blend";
  }, []);

  return (
    <div className="relative h-[70vh] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutustop})` // change to your image path
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
          ABOUT US
        </h1>

        <div className="mt-3 flex gap-2 text-sm">
          <Link
            to="/"
            className="opacity-80 hover:opacity-100 cursor-pointer"
          >
            HOME
          </Link>

          <span>/</span>

          <span className="opacity-100 font-semibold">ABOUT</span>
        </div>
      </div>
    </div>
  );
}


// ✅ Page 2 — Our Story Section
function AboutStory() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      <div className="md:w-1/2 w-full h-[70vh]">
        <img
          src={aboutourstory}
          alt="Coffee shop interior"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 w-full bg-black text-white flex items-center">
        <div className="bg-black/80 p-10 md:p-16">
          <h3 className="text-[#c6975c] text-2xl italic font-serif mb-2">
            Discover
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">
            Our Story
          </h2>
          <p className="text-gray-300 leading-relaxed text-[15px]">
            Our coffee shop began with a passion for exceptional coffee and community. We carefully source and roast the finest beans, crafting every cup with dedication. Each sip delivers warmth, flavor, and memorable moments. We invite you to experience our cozy space, where coffee brings people together.
          </p>
        </div>
      </div>
    </section>
  );
}

// ✅ Page 3 — Customer Testimonials
function CustomerTestimonials() {
  const testimonials = [
    {
      quote:
        "The coffee here is amazing! I visit daily and never get tired of it.",
      name: "Ramesh Yonjan",
      title: "Coffee Enthusiast",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      quote:
        "A cozy place to enjoy my favorite latte. The staff is always welcoming.",
      name: "Sita Gurung",
      title: "Barista Lover",
      img: "https://randomuser.me/api/portraits/women/34.jpg",
    },
    {
      quote:
        "Best espresso in town! Perfect aroma, rich flavor, and relaxing environment.",
      name: "Anil Thapa",
      title: "Coffee Aficionado",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      quote:
        "Their cappuccino is top-notch. I love spending mornings here with friends.",
      name: "Maya Shrestha",
      title: "Regular Customer",
      img: "https://randomuser.me/api/portraits/women/56.jpg",
    },
  ];

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${aboutbackground})`
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto text-center text-white px-6">
        <h3 className="text-[#c6975c] italic text-2xl font-serif mb-2">
          Testimony
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
          Customers Says
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Our customers love the aroma, flavor, and cozy atmosphere of our café.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#b68d53]/90 text-left p-6 rounded-md flex flex-col justify-between shadow-lg"
            >
              <Quote className="text-white opacity-50 mb-4" />
              <p className="text-white mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-200">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ✅ Page 4 — Discover Our Menu
function DiscoverMenu() {
  const menuImages = [aboutmenu1, aboutmenu2, aboutmenu3, aboutmenu4];

  return (
    <section className="bg-[#0e0d0d] text-white py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h3 className="text-[#c6975c] italic text-2xl font-serif mb-2">
          Discover
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">
          Our Menu
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Explore our menu filled with rich aromas, freshly brewed coffees, delicious pastries, and handcrafted beverages that delight every taste bud.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {menuImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Menu item ${index + 1}`}
              className="rounded-lg object-cover w-full h-[250px] hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        <a href="/menu">
        <button className="border border-[#c6975c] text-[#c6975c] hover:bg-[#c6975c] hover:text-black px-6 py-3 rounded-md font-semibold transition duration-300">
          View Full Menu
        </button></a>
      </div>
    </section>
  );
}

//stats
function CoffeeStats() {
  const stats = [
    { number: 100, label: "Coffee Branches" },
    { number: 85, label: "Number of Awards" },
    { number: 10567, label: "Happy Customer" },
    { number: 900, label: "Staff" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 8000; // animation duration in ms
    let animationFrame;

    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out for smoother counting
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const newCounts = stats.map((item) =>
        Math.floor(item.number * easedProgress)
      );

      setCounts(newCounts);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${aboutbackground1})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center text-white gap-10 px-6">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="border border-[#c6975c] p-6 rounded-md">
              <Coffee className="text-[#c6975c] w-10 h-10" />
            </div>
            <h3 className="text-[#c6975c] text-3xl font-bold">
              {counts[index].toLocaleString()}
            </h3>
            <p className="text-gray-300">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


// ✅ Page 6 — Footer Section
function Footer() {
  return (
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
  );
}

// ✅ Main About Page (All 6 Pages Combined)
export default function AboutPage() {
  return (
    <div className="font-sans">
      <About />
      <AboutStory />
      <CustomerTestimonials />
      <DiscoverMenu />
      <CoffeeStats />
      <Footer />
    </div>
  );
}
