import React from "react";
import blog1 from "../../assets/images/blogimages/blog1.webp";
import blog2 from "../../assets/images/blogimages/blog2.webp";
import blog3 from "../../assets/images/blogimages/blog3.webp";
import blog4 from "../../assets/images/blogimages/blog4.jpg";
import blog5 from "../../assets/images/blogimages/blog5.jpg";
import blog6 from "../../assets/images/blogimages/blog6.jpg";
import coffeeblogtop from "../../assets/images/blogimages/coffeeblogtop.png";
import { MessageCircle } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

// Blog data with realistic descriptions
const blogs = [
  {
    id: 1,
    img: blog1,
    title: "Morning Coffee Art",
    description: "Start your day with beautifully crafted latte art and aromas."
  },
  {
    id: 2,
    img: blog2,
    title: "Roasting Experience",
    description: "Learn how we roast our coffee beans to perfection daily."
  },
  {
    id: 3,
    img: blog3,
    title: "Barista Skills Day",
    description: "A behind-the-scenes look at mastering espresso and latte techniques."
  },
  {
    id: 4,
    img: blog4,
    title: "New Coffee Beans",
    description: "Discover our latest coffee bean selection sourced from top farms."
  },
  {
    id: 5,
    img: blog5,
    title: "Latte Making Class",
    description: "Hands-on classes teaching latte pouring, foam art, and flavor blends."
  },
  {
    id: 6,
    img: blog6,
    title: "Coffee Tasting Event",
    description: "Join us for an exclusive tasting of our signature blends."
  },
];

function App() {
  return (
    <div className="bg-[#0d0b0b] text-white font-sans">

      {/* ---------------- HERO SECTION ---------------- */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${coffeeblogtop})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-center text-white z-10 mt-16">
          <h1 className="text-5xl font-semibold tracking-wider mb-4">BLOG</h1>

          <p className="uppercase text-sm">
            <Link
              to="/"
              className="opacity-80 hover:opacity-100 cursor-pointer"
            >
              Home
            </Link>

            <span className="text-yellow-400"> / Blog</span>
          </p>
        </div>
      </section>

      {/* ---------------- BLOG GRID (3x2) ---------------- */}
      <section className="bg-[#141010] text-white py-20 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="space-y-4 bg-[#1a1414] p-4 rounded-xl shadow-md hover:-translate-y-1 transition"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="rounded-xl h-56 w-full object-cover hover:opacity-80 transition"
              />

              <div className="text-gray-400 text-xs flex items-center space-x-2">
                <p>Sept {20 + blog.id}, 2024</p>
                <p>Admin</p>
                <MessageCircle size={14} />
                <p>{blog.id}</p>
              </div>

              <h3 className="font-semibold text-lg">{blog.title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {blog.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="bg-[#1a1414] py-20 px-6 md:px-20 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
            alt="coffee beans"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-white">
          <h3 className="text-yellow-400 text-sm uppercase mb-2 tracking-wider">
            About Us
          </h3>
          <h2 className="text-4xl font-semibold mb-6">Discover Our Story</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Our coffee journey started with a love for quality and community.
            We carefully select and roast the finest beans to craft every cup.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Explore our cozy shop, where every brew tells a story of passion,
            connection, and warmth.
          </p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
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
                  Discover our latest coffee flavors and brewing tips.
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
                  Join our coffee tasting events to explore unique blends.
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
          Copyright ©2025 All rights reserved | CofeeBlend
        </p>
      </footer>
    </div>
  );
}

export default App;
