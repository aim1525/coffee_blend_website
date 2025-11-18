import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function ProductDetail() {
  const relatedProducts = [
    {
      name: "Espresso",
      price: "$3.50",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      desc: "Strong and bold espresso made from freshly ground Arabica beans."
    },
    {
      name: "Cappuccino",
      price: "$4.50",
      img: "https://guentercoffee.com/cdn/shop/articles/anleitung-cappuccino-blogheader.jpg?v=1758119315&width=1440",
      desc: "Smooth blend of espresso, steamed milk, and frothy foam on top."
    },
    {
      name: "Grilled Chicken Salad",
      price: "$9.50",
      img: "https://assets.epicurious.com/photos/64a845e67799ee8651e4fb8f/16:9/w_6179,h_3476,c_limit/AshaGrilledChickenSalad_RECIPE_070523_56498.jpg",
      desc: "Fresh greens topped with grilled chicken, cherry tomatoes, and vinaigrette."
    },
    {
      name: "Chocolate Lava Cake",
      price: "$5.00",
      img: "https://eightforestlane.com/wp-content/uploads/2020/02/Chocolate-Lava-Cakes_SQ-1.jpg",
      desc: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream."
    }
  ];

  return (
    <div className="bg-[#0d0d0d] text-white">

      {/* HERO SECTION */}
      <section
        className="h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-wider drop-shadow-lg">
            PRODUCT DETAIL
          </h1>

          <div className="flex justify-center gap-6 mt-4 text-lg">
            <a href="/" className="hover:text-yellow-400">HOME</a>
            <span>|</span>
            <span className="text-yellow-400 font-semibold">PRODUCT</span>
          </div>
        </div>
      </section>

      {/* PRODUCT DETAIL */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* PRODUCT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80"
            alt="Coffee"
            className="rounded-xl shadow-2xl w-full"
          />
        </div>

        {/* PRODUCT INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-wide">CREAMY LATTE COFFEE</h2>

          <p className="text-3xl font-semibold text-yellow-400 mt-4">$4.90</p>

          <p className="text-gray-300 mt-6 leading-relaxed">
            Indulge in the creamy latte coffee, where velvety milk meets perfectly brewed espresso, creating a rich, comforting flavor that awakens your senses and turns every sip into a moment of bliss.
          </p>

          {/* SIZE DROPDOWN */}
          <select className="bg-[#1c1c1c] border border-gray-700 px-4 py-3 rounded mt-6 w-full md:w-1/2">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>

          {/* QUANTITY */}
          <div className="flex items-center gap-6 mt-8">
            <button className="px-4 py-2 bg-[#1a1a1a] hover:bg-yellow-500 hover:text-black transition rounded">
              -
            </button>
            <span className="text-2xl font-semibold">1</span>
            <button className="px-4 py-2 bg-[#1a1a1a] hover:bg-yellow-500 hover:text-black transition rounded">
              +
            </button>
          </div>

          {/* ADD TO CART */}
          <button className="mt-10 bg-yellow-500 text-black px-8 py-3 rounded-lg hover:bg-yellow-600 transition font-semibold tracking-wide">
            Add to Cart
          </button>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="bg-[#111] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h3 className="text-yellow-500 text-xl italic">Discover</h3>
          <h2 className="text-4xl font-bold tracking-wider mt-2">RELATED PRODUCTS</h2>

          <p className="text-gray-400 mt-4 mb-12 max-w-2xl mx-auto">
            Explore related coffee creations and delicious dishes, each crafted with rich flavors and aromas, delivering delightful moments and unforgettable experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {relatedProducts.map((item, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-xl shadow-xl overflow-hidden hover:scale-105 transition"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h4 className="text-lg font-semibold uppercase tracking-wide">
                    {item.name}
                  </h4>

                  <p className="text-gray-400 text-sm mt-2">
                    {item.desc}
                  </p>

                  <p className="text-yellow-400 text-xl font-semibold mt-3">{item.price}</p>

                  <button className="mt-4 w-full border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-gray-300 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* ABOUT US */}
           <div>
                      <h3 className="text-lg font-semibold tracking-wider mb-4">ABOUT US</h3>
                      <p className="text-gray-400 text-sm leading-relaxed w-[80%]">
                        Far far away, behind the word mountains, far from the countries Vokalia 
                        and Consonantia, there live the blind texts.
                      </p>
                      <div className="flex gap-4 mt-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center rounded-full cursor-pointer hover:bg-yellow-500 hover:text-black transition"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center rounded-full cursor-pointer hover:bg-yellow-500 hover:text-black transition"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center rounded-full cursor-pointer hover:bg-yellow-500 hover:text-black transition"
            >
              <FaInstagram className="text-white" />
            </a>
          </div>
                    </div>

          {/* RECENT BLOG */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">RECENT BLOG</h3>
            <div className="flex gap-4 mb-6">
              <img
                src="https://www.foodnhotelasia.com/wp-content/uploads/2024/01/Types-of-Coffee.jpg"
                alt="Blog"
                className="w-20 h-20 object-cover rounded"
              />
              <div className="text-sm text-gray-400">
                <p className="text-white mb-1">
                  Even the all-powerful Pointing has no control about
                </p>
                <p>Sept 15, 2018 • Admin • 19</p>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                src="https://c.ndtvimg.com/2025-03/1589t3j_black-coffee-_650x400_07_March_25.jpg?im=FeatureCrop,algorithm=dnn,width=545,height=307"
                alt="Blog"
                className="w-20 h-20 object-cover rounded"
              />
              <div className="text-sm text-gray-400">
                <p className="text-white mb-1">
                  Even the all-powerful Pointing has no control about
                </p>
                <p>Sept 15, 2018 • Admin • 19</p>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Cooked</li>
              <li>Deliver</li>
              <li>Quality Foods</li>
              <li>Mixed</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">HAVE A QUESTIONS?</h3>
            <p className="flex gap-3 mb-4">
              📍 3rd Floor, Madan Bhandari Road, Tinkune-32, Kathmandu, Nepal
            </p>
            <p className="flex gap-3 mb-4">
              📞 +977-9834567844
            </p>
            <p className="flex gap-3">
              ✉️ coffeeblend@gmail.com
            </p>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-16">
          Copyright ©2025 All rights reserved | CoffeeBlend |
        </div>
      </footer>

    </div>
  );
}
