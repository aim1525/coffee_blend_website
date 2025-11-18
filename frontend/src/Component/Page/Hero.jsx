import React, { useState } from "react";
import { ClipboardList, Truck, Coffee, MessageSquare } from "lucide-react";
import hero from "../../assets/heroimage.jpg"
import CountUp from "react-countup";

// Hero Section
function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center text-white px-4">
        <p className="text-lg italic text-yellow-400 mb-2">Welcome</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AMAZING TASTE & BEAUTIFUL PLACE
        </h1>
        <p className="max-w-2xl mb-6">
          “Good ideas start with great coffee shared among friends.”
        </p>
        <div className="flex gap-6">
          <button className="bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-lg text-lg font-semibold transition">
            Order Now
          </button>
          <button className="border border-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
}

// Our Story Section
function OurStory() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white"
    >
      <div
        className="w-full md:w-1/2 h-[400px] md:h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://preview.colorlib.com/theme/coffeeblend/images/about.jpg')",
        }}
      ></div>
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-black/70">
        <h3 className="text-yellow-500 italic text-2xl mb-2">Discover</h3>
        <h2 className="text-4xl font-bold mb-6">OUR STORY</h2>
        <p className="text-gray-300 leading-relaxed">
          Our journey began with a simple love for coffee and a dream to create a space where people could gather, share stories, and enjoy perfectly brewed beverages. From selecting the finest beans to crafting each cup with care, we focus on quality, warmth, and connection. Every sip reflects our passion, dedication, and the joy of bringing communities together over coffee
        </p>
      </div>
    </section>
  );
}

// Features Section
function Features() {
  const features = [
    {
      icon: <ClipboardList className="w-12 h-12 mx-auto mb-4" />,
      title: "EASY TO ORDER",
      desc: "Even the all-powerful Pointing has no control about the blind texts...",
    },
    {
      icon: <Truck className="w-12 h-12 mx-auto mb-4" />,
      title: "FASTEST DELIVERY",
      desc: "Even the all-powerful Pointing has no control about the blind texts...",
    },
    {
      icon: <Coffee className="w-12 h-12 mx-auto mb-4" />,
      title: "QUALITY COFFEE",
      desc: "Even the all-powerful Pointing has no control about the blind texts...",
    },
  ];

  return (
    <section id="features" className="bg-amber-600 py-20 text-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((item, index) => (
          <div key={index} className="text-black">
            <div className="border p-6 inline-block">{item.icon}</div>
            <h3 className="font-bold text-xl mt-4 mb-2">{item.title}</h3>
            <p className="text-gray-800">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Our Menu Section
function OurMenu() {
  return (
    <section
      id="menu"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white"
    >
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center text-center md:text-left">
        <h3 className="text-yellow-500 italic text-2xl mb-2">Discover</h3>
        <h2 className="text-4xl font-bold mb-6">OUR MENU</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Coffee is a life, so enjoy.
        </p>
        <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-lg transition w-fit mx-auto md:mx-0">
          View Full Menu
        </button>
      </div>
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 p-6">
        <img
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
          alt="Latte"
          className="rounded-lg object-cover w-full h-48 md:h-64 hover:scale-105 transition"
        />
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="Espresso"
          className="rounded-lg object-cover w-full h-48 md:h-64 hover:scale-105 transition"
        />
        <img
          src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03"
          alt="Beans"
          className="rounded-lg object-cover w-full h-48 md:h-64 hover:scale-105 transition"
        />
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Cappuccino"
          className="rounded-lg object-cover w-full h-48 md:h-64 hover:scale-105 transition"
        />
      </div>
    </section>
  );
}

// Stats Section
function Stats() {
  const stats = [
    { number: 100, label: "Coffee Branches" },
    { number: 85, label: "Number of Awards" },
    { number: 10567, label: "Happy Customers" },
    { number: 900, label: "Staff" },
  ];

  return (
    <section
      id="stats"
      className="relative bg-cover bg-center text-white py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
        {stats.map((item, index) => (
          <div key={index} className="hover:scale-105 transform transition duration-300">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-500">
              <CountUp start={0} end={item.number} duration={10} separator="," />
            </h3>
            <p className="text-gray-300 mt-2 text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



// Best Sellers Section
function BestSellers() {
  const products = [
    {
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      name: "COFFEE CAPUCCINO",
      desc: "Savor every sip of creamy, rich cappuccino bliss",
      price: "$5.90",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbQCX3u4g1e_hmgaOAfQHT9RunewHHqIQpg&s",
      name: "AMERICANO",
      desc: "Bold and smooth, Americano awakens your senses daily",
      price: "$4.50",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBL477dOHACARGh2Thsw5t7t70K4cZNJFBA&s",
      name: "EXPRESSO",
      desc: "Intense and rich, espresso ignites your coffee passion",
      price: "$6.00",
    },
    {
      img: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/the_perfect_mocha_coffee_29100_16x9.jpg",
      name: "MOCHA",
      desc: "Chocolatey, rich, and smooth, mocha warms every heart",
      price: "$5.90",
    },
  ];

  return (
    <section id="sellers" className="bg-black text-white py-20 text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-yellow-500 italic text-2xl mb-2">Discover</h3>
        <h2 className="text-4xl font-bold mb-6">BEST COFFEE SELLERS</h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-12">
          "Taste excellence from our top coffee sellers, brewed just for you."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-black/40 border border-gray-700 rounded-lg overflow-hidden hover:scale-105 transition"
            >
              <img src={item.img} alt={item.name} className="w-full h-56" />
              <div className="p-4">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                <p className="text-yellow-500 font-bold mt-3">{item.price}</p>
                <button className="mt-4 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-lg transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1525610553991-2bede1a236e2",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
  ];

  return (
    <section id="gallery" className="bg-black py-20">
      <div className="container mx-auto px-6 text-center text-white">
        <h3 className="text-yellow-500 italic text-2xl mb-2">Discover</h3>
        <h2 className="text-4xl font-bold mb-10">OUR COMMUNITY</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-72 object-cover rounded-lg hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Products Section
function Products() {
  const categories = {
    "Main Dish": [
      {
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
        name: "Grilled Beef",
        desc: "Juicy, smoky, perfectly grilled beef delight",
        price: "$2.90",
      },
      {
        img: "https://ux2cms.imgix.net/images/glazed-lamb-ribs.jpg?auto=compress,format&w=750https://i0.wp.com/danieldiver.net/wp-content/uploads/2020/02/img_20190926_142935_8274081043488606540201.jpg?fit=2400%2C3000&ssl=1https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdEKUeoXmek9fSbJiPQxbdIg7e8r7IkuHPEg&shttps://thebigmansworld.com/wp-content/uploads/2023/06/lamb-ribs-recipe.jpghttps://www.seriouseats.com/thmb/7krlJdfnpXB53aqHg-vBSHjiDPc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfectly-grilled-lamb-rib-or-loin-chops-recipe-hero-03-262fe2defc7c491688cb2d363dad3446.JPG",
        name: "Lamb Ribs",
        desc: "Tender, flavorful lamb ribs, perfectly grilled",
        price: "$2.90",
      },
      {
        img: "https://media.istockphoto.com/id/587207508/photo/sliced-grilled-steak-ribeye-with-herb-butter.jpg?s=612x612&w=0&k=20&c=gm6Kg6rHYH0xWTF5oszm6NZ-hp9aPRbk9V1kvCr8MQI=",
        name: "Steak",
        desc: "Juicy, tender steak cooked to perfection",
        price: "$2.90",
      },
    ],
    Drinks: [
      {
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        name: "Espresso",
        desc: "Smooth, rich espresso shot.",
        price: "$1.90",
      },
      {
        img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
        name: "Cappuccino",
        desc: "Classic cappuccino with milk foam.",
        price: "$3.20",
      },
    ],
    Desserts: [
      {
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        name: "Chocolate Cake",
        desc: "Rich chocolate layered cake.",
        price: "$4.50",
      },
      {
        img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40",
        name: "Cheesecake",
        desc: "Delicious cheesecake with base.",
        price: "$4.90",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("Main Dish");

  return (
    <section id="products" className="bg-black text-white py-20 text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-yellow-500 italic text-2xl mb-2">Discover</h3>
        <h2 className="text-4xl font-bold mb-6">OUR PRODUCTS</h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-12">
          "Explore our flavors, crafted to delight every coffee lover's palate."
        </p>
        <div className="flex justify-center gap-6 mb-10">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 ${activeTab === cat
                  ? "bg-yellow-600 text-black font-bold"
                  : "text-gray-300 hover:text-yellow-500"
                } rounded transition`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories[activeTab].map((item, index) => (
            <div
              key={index}
              className="bg-black/40 border border-gray-700 rounded-lg overflow-hidden hover:scale-105 transition"
            >
              <img src={item.img} alt={item.name} className="w-full h-56" />
              <div className="p-4">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                <p className="text-yellow-500 font-bold mt-3">{item.price}</p>
                <button className="mt-4 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-lg transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section (9th page)
function Testimonials() {
  const feedbacks = [
    {
      text: "The coffee here is absolutely delicious, I keep coming back!",
      name: "Sunita Sharma",
      role: "Customer",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      text: "The staff are very friendly, and the ambiance is really cozy.",
      name: "Anil Thapa",
      role: "Customer",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      text: "The cappuccino tastes amazing, I always order it.",
      name: "Maya Gurung",
      role: "Customer",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      text: "The coffee blend here is unique and flavorful, makes me visit often.",
      name: "Rajesh Adhikari",
      role: "Customer",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative bg-cover bg-center text-white py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498804103079-a6351b050096')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h3 className="text-yellow-500 italic text-2xl mb-2">Testimony</h3>
        <h2 className="text-4xl font-bold mb-6">CUSTOMERS SAY</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-12">
          Here’s what our customers have to say about our coffee shop.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {feedbacks.map((f, i) => (
            <div
              key={i}
              className="bg-yellow-900/70 text-white p-6 rounded-lg text-left"
            >
              <p className="italic">“{f.text}”</p>
              <div className="flex items-center mt-4">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">{f.name}</h4>
                  <p className="text-sm text-gray-300">{f.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// BLOG SECTION (10th page)
function Blog() {
  const posts = [
    {
      img: "https://preview.colorlib.com/theme/coffeeblend/images/image_1.jpg",
      date: "Sept 10, 2018",
      title: "The Delicious Pizza",
      desc: "Hot, cheesy, and perfectly baked pizza that delights every bite you take.",
    },
    {
      img: "https://preview.colorlib.com/theme/coffeeblend/images/image_2.jpg",
      date: "Sept 10, 2018",
      title: "The Delicious Pasta",
      desc: "Freshly cooked pasta with rich sauce, bringing comfort and flavor in every bite.",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg",
      date: "Sept 10, 2018",
      title: "The Delicious Momo",
      desc: "Steamed or fried momos, bursting with flavor, making every bite pure happiness.",
    },
  ];

  return (
    <section id="blog" className="bg-black text-white py-20 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-3">RECENT FROM BLOG</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Discover stories, tips, and coffee inspirations that awaken your senses and brighten every day.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((p, i) => (
            <div
              key={i}
              className="bg-black/50 border border-gray-700 rounded-lg overflow-hidden hover:scale-105 transition"
            >
              <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
              <div className="p-5 text-left">
                <p className="text-sm text-gray-400">
                  {p.date} &nbsp; Admin &nbsp;
                  <MessageSquare className="inline w-4 h-4" /> 3
                </p>
                <h3 className="font-bold text-lg mt-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BookTable = () => {
  return (
    <section
      id="booktable"
      className="bg-black text-white py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">
          Book a Table
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First and Last Name */}
          <div>
            <label className="block mb-2 text-sm font-medium">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 focus:outline-none py-2"
            />
          </div>

          {/* Date and Time */}
          <div>
            <label className="block mb-2 text-sm font-medium">Date</label>
            <input
              type="date"
              className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Time</label>
            <input
              type="time"
              className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 focus:outline-none py-2"
            />
          </div>

          {/* Phone */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 focus:outline-none py-2"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              rows="3"
              placeholder="Write your message..."
              className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-500 focus:outline-none py-2 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold py-3 px-10 transition rounded-none"
            >
              Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-20 px-6 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ABOUT */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-6">ABOUT US</h2>
          <p className="leading-7 text-sm">
            Brewing passion and flavor, we serve quality coffee in a cozy space, creating moments of warmth, connection, and joy.
          </p>

          <div className="flex gap-4 mt-8">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.204-4.92 4.917 0 .385.045.76.127 1.122C7.728 8.84 4.1 6.88 1.671 3.885a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.214 2.19 4.099A4.903 4.903 0 0 1 .964 9.15v.062c0 2.385 1.693 4.374 3.946 4.827a4.935 4.935 0 0 1-2.212.084 4.93 4.93 0 0 0 4.604 3.417A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.01-7.506 14.01-14.01 0-.213-.006-.425-.016-.636A10.012 10.012 0 0 0 24 4.557z" /></svg>
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 320 512" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0C141.09 0 89.33 44.38 89.33 124.72v70.62H0V288h89.33v224h105.6V288z" /></svg>
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-115 51.5-115 115.1s51.4 115.1 115 115.1 115-51.5 115-115.1-51.4-115.1-115-115.1zm0 190.1c-41.4 0-75-33.7-75-75.1s33.6-75.1 75-75.1 75 33.7 75 75.1-33.6 75.1-75 75.1zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zM398.8 80c-1.7-35.3-9.9-66.7-36.2-93C336.3 7.7 305 0 269.7 0H178.3C142.1 0 110.7 7.7 85.5 33 59.2 59.3 51 90.7 49.3 126 47.7 161.6 47 206.2 47 256s.7 94.4 2.3 130c1.7 35.3 9.9 66.7 36.2 93 26.3 25.3 57.6 33 92.9 33h91.4c35.3 0 66.6-7.7 92.9-33 26.3-26.3 34.5-57.7 36.2-93 1.6-35.6 2.3-80.2 2.3-130s-.7-94.4-2.3-130z" /></svg>
            </div>
          </div>
        </div>

        {/* RECENT BLOG */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-6">RECENT BLOG</h2>

          <div className="flex gap-4 mb-6">
            <img src="https://bruvi.com/cdn/shop/articles/specialtycoffeeshop-header-min_1300x.jpg?v=1626718466" className="w-20 h-20 object-cover rounded" />
            <div>
              <p className="text-sm text-white font-medium leading-6">
                How to choose the best coffeeshop in the town.
              </p>
              <div className="flex items-center gap-3 text-xs mt-2">
                <span className="flex items-center gap-1"><span>📅</span> Sept 15, 2018</span>
                <span className="flex items-center gap-1"><span>👤</span> Admin</span>
                <span className="flex items-center gap-1"><span>💬</span> 19</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVWOX3cebBRuBfS5N3rJW7vCtG9k3a9ZGrA&s" className="w-20 h-20 object-cover rounded" />
            <div>
              <p className="text-sm text-white font-medium leading-6">
                Which coffee has best taste and improve health.
              </p>
              <div className="flex items-center gap-3 text-xs mt-2">
                <span className="flex items-center gap-1"><span>📅</span> Sept 15, 2018</span>
                <span className="flex items-center gap-1"><span>👤</span> Admin</span>
                <span className="flex items-center gap-1"><span>💬</span> 19</span>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-6">SERVICES</h2>
          <ul className="space-y-4 text-sm">
            <li>Cooked</li>
            <li>Deliver</li>
            <li>Quality Foods</li>
            <li>Mixed</li>
          </ul>
        </div>

        {/* QUESTIONS */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-6">HAVE A QUESTIONS?</h2>

          <div className="space-y-6 text-sm">
            <div className="flex gap-3">
              <span>📍</span>
              <p>Tinkune-32, Kathmandu, Nepal</p>
            </div>

            <div className="flex gap-3">
              <span>📞</span>
              <p>+977-9812577783</p>
            </div>

            <div className="flex gap-3">
              <span>✉️</span>
              <p>coffeeblend@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-20">
        Copyright ©2025 All rights reserved | CofeeBlend |
      </div>
    </footer>
  );
}



// MAIN APP
export default function App() {
  return (
    <div className="font-sans">
      <Hero />
      <OurStory />
      <Features />
      <OurMenu />
      <Stats />
      <BestSellers />
      <Gallery />
      <Products />
      <Testimonials />
      <Blog /> {/* 10th Section */}
      <BookTable />
      <Footer />
    </div>
  );
}
