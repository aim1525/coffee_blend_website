import React, { useState } from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";


export default function Shop() {
  const [activeTab, setActiveTab] = useState("Coffee");

  const menuData = {
    Coffee: [
      {
        name: "Espresso",
        price: "$3.50",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        desc: "Strong and bold espresso made from freshly ground Arabica beans."
      },
      {
        name: "Cappuccino",
        price: "$4.50",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigjM6kQelUkoD9ZupFpRTru5vspXapA2sUr8DW0BVNlf2AU1r4ZXUz5WtzamvNUoEYa8&usqp=CAU",
        desc: "Smooth blend of espresso, steamed milk, and frothy foam on top."
      },
      {
        name: "Latte",
        price: "$4.20",
        img: "https://images.unsplash.com/photo-1541167760496-1628856ab772",
        desc: "Rich espresso with steamed milk and a light layer of foam."
      },
      {
        name: "Mocha",
        price: "$4.80",
        img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
        desc: "Delicious mix of chocolate, espresso, and steamed milk topped with whipped cream."
      }
    ],

    "Main Dish": [
      {
        name: "Grilled Chicken Salad",
        price: "$9.50",
        img: "https://gimmesomegrilling.com/wp-content/uploads/2021/05/Grilled-Chicken-Salad-Recipe-Square.jpg",
        desc: "Fresh greens topped with grilled chicken, cherry tomatoes, and vinaigrette."
      },
      {
        name: "Spaghetti Carbonara",
        price: "$12.00",
        img: "https://images.services.kitchenstories.io/z_bWPIhhM6qs38B0E46CRaYs81Q=/3840x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R2568-photo-final-_0.jpg",
        desc: "Classic Italian pasta with creamy sauce, pancetta, and Parmesan cheese."
      },
      {
        name: "Beef Burger",
        price: "$10.50",
        img: "https://cdn.shopify.com/s/files/1/0725/3911/1726/files/20240831035110-andy-20cooks-20-20juicy-20beef-20burger-20recipe.jpg?v=1725076272&width=1600&height=900",
        desc: "Juicy beef patty served with lettuce, tomato, cheese, and a soft bun."
      }
    ],

    Drinks: [
      {
        name: "Fresh Orange Juice",
        price: "$3.00",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fakeq1lXYvjkOJL2l4qkIH4dQlk66EuSmQ&s",
        desc: "100% fresh-squeezed orange juice, rich in vitamin C."
      },
      {
        name: "Pineapple Smoothie",
        price: "$4.00",
        img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
        desc: "Creamy and tropical smoothie made with fresh pineapple and yogurt."
      },
      {
        name: "Iced Lemon Tea",
        price: "$3.50",
        img: "https://images.unsplash.com/photo-1577803645773-f96470509666",
        desc: "Refreshing iced tea with a hint of lemon and natural sweetness."
      }
    ],

    Desserts: [
      {
        name: "Chocolate Lava Cake",
        price: "$5.00",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcawkg9fEAXw8WBOkGDkALLXbLnq9qDnS2A&s",
        desc: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream."
      },
      {
        name: "Cheesecake",
        price: "$4.80",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Baked_cheesecake_with_raspberries_and_blueberries.jpg/1200px-Baked_cheesecake_with_raspberries_and_blueberries.jpg",
        desc: "Creamy cheesecake with a buttery crust and fresh berry topping."
      },
      {
        name: "Tiramisu",
        price: "$5.50",
        img: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
        desc: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream."
      }
    ]
  };

  return (
    <div className="bg-[#0d0d0d] text-white">
      {/* HERO SECTION */}
      <section
        className="h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-wider">ORDER ONLINE</h1>
          <div className="flex justify-center gap-6 mt-4 text-lg">
            <a href="/" className="hover:text-yellow-400">HOME</a>
            <span>|</span>
            <span className="text-yellow-400 font-semibold">SHOP</span>
          </div>
        </div>
      </section>

      {/* TABS */}
      <div className="flex justify-center gap-10 mt-10 text-xl">
        {["Coffee", "Main Dish", "Drinks", "Desserts"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "hover:text-yellow-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* PRODUCT LIST */}
      <div className="px-10 md:px-20 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {menuData[activeTab].map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="uppercase mt-4 text-lg font-semibold tracking-wide">{item.name}</h3>
            <p className="text-gray-400 mt-2 text-sm w-[80%] mx-auto">{item.desc}</p>
            <p className="mt-3 text-lg font-semibold">{item.price}</p>
            <button className="mt-3 border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* SPACING */}
      <div className="h-20"></div>

      {/* FOOTER */}
      <footer className="bg-[#0b0b0b] py-16 px-10 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
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
            <h3 className="text-lg font-semibold tracking-wider mb-4">RECENT BLOG</h3>
            <div className="flex gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1543353071-873f17a7a088"
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="font-semibold leading-tight">
                  Even the all-powerful Pointing has no control about
                </p>
                <p className="text-gray-500 text-xs mt-1 flex items-center gap-2">
                  <i className="fa-regular fa-calendar"></i> Sept 15, 2018  
                  <i className="fa-regular fa-user"></i> Admin  
                  <i className="fa-regular fa-comment"></i> 19
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="font-semibold leading-tight">
                  Even the all-powerful Pointing has no control about
                </p>
                <p className="text-gray-500 text-xs mt-1 flex items-center gap-2">
                  <i className="fa-regular fa-calendar"></i> Sept 15, 2018  
                  <i className="fa-regular fa-user"></i> Admin  
                  <i className="fa-regular fa-comment"></i> 19
                </p>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider mb-4">SERVICES</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Cooked</li>
              <li>Deliver</li>
              <li>Quality Foods</li>
              <li>Mixed</li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider mb-4">HAVE A QUESTION?</h3>
            <ul className="text-gray-400 space-y-4 text-sm">
              <li className="flex gap-3">📍 3rd Floor, Tinkune-32, Kathmandu, Nepal</li>
              <li className="flex gap-3">📞 +977 9828998732</li>
              <li className="flex gap-3">✉️ coffeeblend@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-gray-500 text-sm mt-10">
          Copyright ©2025 All rights reserved | CoffeeBlend |
        </div>
      </footer>
    </div>
  );
}
