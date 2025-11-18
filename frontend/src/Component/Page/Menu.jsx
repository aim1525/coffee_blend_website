import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// Updated products data
export const products = {
  main: [
    {
      name: "Grilled Salmon",
      description: "Freshly grilled salmon with garlic butter, served with roasted vegetables.",
      price: "$18.99",
      img: "https://www.thecookierookie.com/wp-content/uploads/2023/05/featured-grilled-salmon-recipe.jpg",
    },
    {
      name: "Chicken Parmesan",
      description: "Crispy breaded chicken topped with marinara sauce and melted cheese.",
      price: "$15.50",
      img: "https://assets.bonappetit.com/photos/5ea8f0df16738800085ad5d2/1:1/w_2560%2Cc_limit/Chicken-Parmesean-Recipe-Lede.jpg",
    },
    {
      name: "Beef Stroganoff",
      description: "Tender beef strips cooked in creamy mushroom sauce, served with noodles.",
      price: "$17.75",
      img: "https://healthyrecipesblogs.com/wp-content/uploads/2025/07/beef-stroganoff-featured-2025.jpg",
    },
    {
      name: "Veggie Lasagna",
      description: "Layers of pasta, fresh vegetables, and creamy béchamel sauce.",
      price: "$13.25",
      img: "https://cdn.loveandlemons.com/wp-content/uploads/2023/12/vegetarian-lasagna-scaled.jpg",
    },
    {
      name: "Lamb Chops",
      description: "Grilled lamb chops seasoned with herbs and served with mashed potatoes.",
      price: "$22.00",
      img: "https://assets.bonappetit.com/photos/5caf8dd043874c0b662978ed/1:1/w_2560%2Cc_limit/seven-spice-grilled-lamb-chops-with-parsley-salad.jpg",
    },
  ],
  drinks: [
    {
      name: "Iced Caramel Macchiato",
      description: "Espresso with cold milk, ice, and rich caramel drizzle.",
      price: "$5.50",
      img: "https://www.allrecipes.com/thmb/LgtetzzQWH3GMxFISSii84XEAB8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/258686-IcedCaramelMacchiato-ddmps-4x3-104704-2effb74f7d504b8aa5fbd52204d0e2e5.jpg",
    },
    {
      name: "Mango Smoothie",
      description: "Creamy smoothie made with ripe mangoes and yogurt.",
      price: "$4.75",
      img: "https://greenheartlove.com/wp-content/uploads/2022/08/tropical-mango-smoothie-vegan-2.jpg",
    },
    {
      name: "Fresh Lemonade",
      description: "Refreshing lemon drink with a hint of mint and ice.",
      price: "$3.50",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5hQGYlSjpl8FJFnyHxyq4QavvU1qfz464g&s",
    },
    {
      name: "Hot Chocolate",
      description: "Rich and creamy chocolate drink topped with whipped cream.",
      price: "$4.25",
      img: "https://www.allrecipes.com/thmb/lnb_004MI6wGuJXQ-uDxMUNZmQk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20211-creamy-hot-cocoa-DDMFS-4x3-ed6183b2bbb74bbba4a06a78e4d72350.jpg",
    },
    {
      name: "Strawberry Milkshake",
      description: "Smooth milkshake blended with fresh strawberries and vanilla ice cream.",
      price: "$4.99",
      img: "https://www.thehungrybites.com/wp-content/uploads/2023/06/Strawberry-milkshake-frappuccino-featured.jpg",
    },
  ],
  desserts: [
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, served with vanilla ice cream.",
      price: "$6.50",
      img: "https://images.getrecipekit.com/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.png?width=650&quality=90&",
    },
    {
      name: "Classic Cheesecake",
      description: "Creamy cheesecake with buttery graham crust and fresh berries.",
      price: "$5.90",
      img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af",
    },
    {
      name: "Mango Pudding",
      description: "Smooth mango pudding served chilled with mango sauce.",
      price: "$4.50",
      img: "https://www.mjandhungryman.com/wp-content/uploads/2023/06/Mango-pudding.jpg",
    },
    {
      name: "Fruit Tart",
      description: "Seasonal fruits over a creamy custard in a flaky tart shell.",
      price: "$5.20",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
    {
      name: "Blueberry Muffin",
      description: "Soft muffin packed with fresh blueberries, lightly sweetened.",
      price: "$3.50",
      img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b",
    },
  ],
};

export default function MenuPage() {
  const MenuItem = ({ img, name, price, description }) => (
    <div className="flex items-center justify-between border-b border-gray-700 py-4">
      <div className="flex items-center gap-4">
        <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
      <p className="text-yellow-500 font-bold">{price}</p>
    </div>
  );

  const [activeTab, setActiveTab] = useState("main");

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold">OUR MENU</h1>
          <p className="mt-3">
            <span className="text-gray-300">HOME</span> <span> / MENU</span>
          </p>
        </div>
      </div>

      {/* Contact Info + Booking Form */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Contact Info */}
        <div className="bg-black flex-1 p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-yellow-500 text-xl">📞</p>
            <h4 className="font-bold">+977-9823453345</h4>
            <p className="text-gray-400 text-sm mt-2">Call for reservations</p>
          </div>
          <div>
            <p className="text-yellow-500 text-xl">📍</p>
            <h4 className="font-bold">3rd Floor Tinkune</h4>
            <p className="text-gray-400 text-sm mt-2">Tinkune-32, Kathmandu, Nepal</p>
          </div>
          <div>
            <p className="text-yellow-500 text-xl">⏰</p>
            <h4 className="font-bold">Open Sunday-Friday</h4>
            <p className="text-gray-400 text-sm mt-2">8:00am - 9:00pm</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-[#c49b63] flex-1 p-8">
          <h2 className="text-lg font-bold mb-4">BOOK A TABLE</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="p-2 border-b bg-transparent outline-none"/>
            <input type="text" placeholder="Last Name" className="p-2 border-b bg-transparent outline-none"/>
            <input type="date" className="p-2 border-b bg-transparent outline-none"/>
            <input type="time" className="p-2 border-b bg-transparent outline-none"/>
            <input type="tel" placeholder="Phone" className="p-2 border-b bg-transparent outline-none"/>
            <textarea placeholder="Message" className="p-2 border-b bg-transparent outline-none md:col-span-2"></textarea>
            <button type="submit" className="bg-white text-black font-semibold px-6 py-2 mt-2 md:col-span-2">
              Appointment
            </button>
          </form>
        </div>
      </div>

      {/* Menu Section */}
      <div className="bg-black py-16 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Starters */}
          <div>
            <h2 className="text-2xl font-bold mb-6">STARTERS</h2>
            <MenuItem
              name="Bruschetta"
              price="$8.50"
              img="https://www.allrecipes.com/thmb/QSsjryxShEx1L6o0HLer1Nn4jwA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/54165-balsamic-bruschetta-DDMFS-4x3-e2b55b5ca39b4c1783e524a2461634ea.jpg"
              description="Toasted bread topped with fresh tomatoes, basil, and olive oil."
            />
            <MenuItem
              name="Garlic Prawns"
              price="$12.00"
              img="https://casuallypeckish.com/wp-content/uploads/2020/09/Butter-garlic-prawns.jpg"
              description="Juicy prawns sautéed with garlic, chili, and fresh herbs."
            />
            <MenuItem
              name="Stuffed Mushrooms"
              price="$9.75"
              img="https://www.allrecipes.com/thmb/oSmkmY45dr_9IkVk5ZTNdLowPf8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-JF-15184-Mouth-Watering-Mushrooms-ddmfs-2x1-e6418200bc6e44f7971b53ef7b675bb7.jpg"
              description="Mushrooms stuffed with cheese, herbs, and breadcrumbs, baked to perfection."
            />
          </div>

          {/* Main Dish */}
          <div>
            <h2 className="text-2xl font-bold mb-6">MAIN DISH</h2>
            {products.main.map((item, idx) => (
              <MenuItem key={idx} {...item} />
            ))}
          </div>

          {/* Desserts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">DESSERTS</h2>
            {products.desserts.map((item, idx) => (
              <MenuItem key={idx} {...item} />
            ))}
          </div>

          {/* Drinks */}
          <div>
            <h2 className="text-2xl font-bold mb-6">DRINKS</h2>
            {products.drinks.map((item, idx) => (
              <MenuItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* OUR PRODUCTS Section */}
      <div className="bg-black py-16 px-6 lg:px-20">
        <div className="text-center mb-10">
          <h2 className="text-yellow-500 italic">Discover</h2>
          <h1 className="text-4xl font-bold">OUR PRODUCTS</h1>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Experience the finest flavors, crafted with passion and fresh ingredients for unforgettable taste and quality
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => setActiveTab("main")}
            className={`px-6 py-2 ${activeTab === "main" ? "bg-yellow-600" : "bg-transparent"}`}
          >
            Main Dish
          </button>
          <button
            onClick={() => setActiveTab("drinks")}
            className={`px-6 py-2 ${activeTab === "drinks" ? "bg-yellow-600" : "bg-transparent"}`}
          >
            Drinks
          </button>
          <button
            onClick={() => setActiveTab("desserts")}
            className={`px-6 py-2 ${activeTab === "desserts" ? "bg-yellow-600" : "bg-transparent"}`}
          >
            Desserts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products[activeTab].map((item, idx) => (
            <div key={idx} className="bg-[#1a1a1a] p-4 shadow-lg text-center flex flex-col">
              <img src={item.img} alt={item.name} className="w-full h-56 object-cover mb-4"/>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-400 text-sm my-2">{item.description}</p>
              <p className="text-yellow-500 font-bold">{item.price}</p>
              <button className="mt-4 bg-yellow-600 px-4 py-2 text-black font-semibold">Add to cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-bold mb-4">ABOUT US</h3>
            <p className="text-gray-400 mb-4">
              We serve freshly brewed coffee, delicious meals, and desserts with love.
            </p>
            <div className="flex gap-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-2 rounded-full hover:bg-yellow-600"
          >
            <FaFacebookF className="text-white" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-2 rounded-full hover:bg-yellow-600"
          >
            <FaInstagram className="text-white" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-2 rounded-full hover:bg-yellow-600"
          >
            <FaTwitter className="text-white" />
          </a>
        </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">RECENT BLOG</h3>
            <div className="flex items-center gap-4 mb-4">
              <img src="https://media.istockphoto.com/id/1467739359/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.webp?b=1&s=612x612&w=0&k=20&c=asoR7HmPKbQWtY26exR0ZfIYwtsbXVprJmYSIV-oGIs=" alt="Blog" className="w-16 h-16 object-cover"/>
              <div>
                <h4 className="text-sm">Even the all-powerful Pointing has no control</h4>
                <p className="text-gray-500 text-xs">Sept 15, 2025 • Admin</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Cooked</li>
              <li>Deliver</li>
              <li>Quality Foods</li>
              <li>Mixed</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">HAVE A QUESTION?</h3>
            <p className="text-gray-400">📍 Tinkune-32, Kathmandu, Nepal</p>
            <p className="text-gray-400 mt-2">📞 +977-9823776345</p>
            <p className="text-gray-400 mt-2">✉️ Coffeeblend@gmail.com</p>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-12">
          Copyright ©2025 All rights reserved | CoffeeBlend |
        </div>
      </footer>
    </div>
  );
}
