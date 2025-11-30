// import React, { useState } from "react";
// import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
// import shopbackground from "../../assets/images/shop/shopbackground.webp"
// import cappuccino from "../../assets/images/shop/coffee/cappuccino.webp"
// import espresso from "../../assets/images/shop/coffee/espresso.jpg"
// import latte from "../../assets/images/shop/coffee/latte.jpg"
// import mocha from "../../assets/images/shop/coffee/mocha.jpg"
// import beefburger from "../../assets/images/shop/maindish/beef burger.jpg"
// import grilled from "../../assets/images/shop/maindish/grilledchickensalad.jpg"
// import spaghetti from "../../assets/images/shop/maindish/spaghetti carbonara.jpg"
// import freshorangejuice from "../../assets/images/shop/drinks/freshorangejuice.jpg"
// import pineapplesmoothie from "../../assets/images/shop/drinks/pineapplesmoothie.jpg"
// import icedlemontea from "../../assets/images/shop/drinks/icedlemontea.avif"
// import chocolatelavacake from "../../assets/images/shop/desserts/chocolatelavacake.jpg"
// import cheesecake from "../../assets/images/shop/desserts/cheesecake.jpg"
// import tiramisu from "../../assets/images/shop/desserts/tiramisu.avif"

// export default function Shop() {
//   const [activeTab, setActiveTab] = useState("Coffee");

//   const menuData = {
//     Coffee: [
//       {
//         name: "Espresso",
//         price: "$3.50",
//         img: espresso,
//         desc: "Strong and bold espresso made from freshly ground Arabica beans."
//       },
//       {
//         name: "Cappuccino",
//         price: "$4.50",
//         img: cappuccino,
//         desc: "Smooth blend of espresso, steamed milk, and frothy foam on top."
//       },
//       {
//         name: "Latte",
//         price: "$4.20",
//         img: latte,
//         desc: "Rich espresso with steamed milk and a light layer of foam."
//       },
//       {
//         name: "Mocha",
//         price: "$4.80",
//         img: mocha,
//         desc: "Delicious mix of chocolate, espresso, and steamed milk topped with whipped cream."
//       }
//     ],

//     "Main Dish": [
//       {
//         name: "Grilled Chicken Salad",
//         price: "$9.50",
//         img: grilled,
//         desc: "Fresh greens topped with grilled chicken, cherry tomatoes, and vinaigrette."
//       },
//       {
//         name: "Spaghetti Carbonara",
//         price: "$12.00",
//         img: spaghetti,
//         desc: "Classic Italian pasta with creamy sauce, pancetta, and Parmesan cheese."
//       },
//       {
//         name: "Beef Burger",
//         price: "$10.50",
//         img: beefburger,
//         desc: "Juicy beef patty served with lettuce, tomato, cheese, and a soft bun."
//       }
//     ],

//     Drinks: [
//       {
//         name: "Fresh Orange Juice",
//         price: "$3.00",
//         img: freshorangejuice,
//         desc: "100% fresh-squeezed orange juice, rich in vitamin C."
//       },
//       {
//         name: "Pineapple Smoothie",
//         price: "$4.00",
//         img: pineapplesmoothie,
//         desc: "Creamy and tropical smoothie made with fresh pineapple and yogurt."
//       },
//       {
//         name: "Iced Lemon Tea",
//         price: "$3.50",
//         img: icedlemontea,
//         desc: "Refreshing iced tea with a hint of lemon and natural sweetness."
//       }
//     ],

//     Desserts: [
//       {
//         name: "Chocolate Lava Cake",
//         price: "$5.00",
//         img: chocolatelavacake,
//         desc: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream."
//       },
//       {
//         name: "Cheesecake",
//         price: "$4.80",
//         img: cheesecake,
//         desc: "Creamy cheesecake with a buttery crust and fresh berry topping."
//       },
//       {
//         name: "Tiramisu",
//         price: "$5.50",
//         img: tiramisu,
//         desc: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream."
//       }
//     ]
//   };

//   return (
//     <div className="bg-[#0d0d0d] text-white">
//       <section
//         className="h-[70vh] bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage:
//             `url(${shopbackground})`,
//         }}
//       >
//         <div className="text-center">
//           <h1 className="text-5xl font-semibold tracking-wider">ORDER ONLINE</h1>
//           <div className="flex justify-center gap-6 mt-4 text-lg">
//             <a href="/" className="hover:text-yellow-400">HOME</a>
//             <span>|</span>
//             <span className="text-yellow-400 font-semibold">SHOP</span>
//           </div>
//         </div>
//       </section>

//       <div className="flex justify-center gap-10 mt-10 text-xl">
//         {["Coffee", "Main Dish", "Drinks", "Desserts"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-2 ${
//               activeTab === tab
//                 ? "text-yellow-400 border-b-2 border-yellow-400"
//                 : "hover:text-yellow-300"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       <div className="px-10 md:px-20 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//         {menuData[activeTab].map((item, index) => (
//           <div key={index} className="text-center">
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-full h-64 object-cover rounded-lg"
//             />
//             <h3 className="uppercase mt-4 text-lg font-semibold tracking-wide">{item.name}</h3>
//             <p className="text-gray-400 mt-2 text-sm w-[80%] mx-auto">{item.desc}</p>
//             <p className="mt-3 text-lg font-semibold">{item.price}</p>
//             <button className="mt-3 border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="h-20"></div>

//       <footer className="bg-black text-gray-300 py-16 px-8 md:px-20">
//                   <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          
//                     <div>
//                       <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
//                         About Us
//                       </h3>
//                       <p className="text-gray-400 leading-relaxed mb-6">
//                         Brewing passion and flavor, we serve quality coffee in a cozy space, creating moments of warmth, connection, and joy.
//                       </p>
//                       <div className="flex space-x-4 text-lg">
//                         <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
//                           <FaTwitter />
//                         </a>
//                         <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
//                           <FaFacebookF />
//                         </a>
//                         <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
//                           <FaInstagram />
//                         </a>
//                       </div>
//                     </div>
          
//                     <div>
//                       <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
//                         Recent Blog
//                       </h3>
          
//                       <div className="flex items-start mb-4">
//                         <img
//                           src="https://vps029.manageserver.in/menu/wp-content/uploads/2024/01/images-8-1.jpeg"
//                           alt="food"
//                           className="w-16 h-16 object-cover mr-4"
//                         />
//                         <div>
//                           <p className="font-medium text-white text-sm">
//                             Even the all-powerful Pointing has no control about
//                           </p>
//                           <p className="text-xs text-gray-500 mt-1">
//                             Sept 15, 2018 • Admin • 19
//                           </p>
//                         </div>
//                       </div>
          
//                       <div className="flex items-start">
//                         <img
//                           src="https://img.goodfon.com/wallpaper/big/e/cf/food-cofee-cooky.webp"
//                           alt="pasta"
//                           className="w-16 h-16 object-cover mr-4"
//                         />
//                         <div>
//                           <p className="font-medium text-white text-sm">
//                             Even the all-powerful Pointing has no control about
//                           </p>
//                           <p className="text-xs text-gray-500 mt-1">
//                             Sept 15, 2018 • Admin • 19
//                           </p>
//                         </div>
//                       </div>
//                     </div>
          
//                     {/* Services */}
//                     <div>
//                       <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
//                         Services
//                       </h3>
//                       <ul className="space-y-2 text-gray-400 text-sm">
//                         <li>Cooked</li>
//                         <li>Deliver</li>
//                         <li>Quality Foods</li>
//                         <li>Mixed</li>
//                       </ul>
//                     </div>
          
//                     {/* Have a Questions */}
//                     <div>
//                       <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
//                         Have a Questions?
//                       </h3>
//                       <ul className="space-y-3 text-gray-400 text-sm">
//                         <li>
//                           <span className="block">Tinkune, </span>
//                           <span>Tinkune-32, Kathmandu, Nepal</span>
//                         </li>
//                         <li>+977- 9823478567</li>
//                         <li>coffeeblend@gmail.com</li>
//                       </ul>
//                     </div>
//                   </div>
          
//                   <p className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6">
//                     Copyright ©2025 All rights reserved | CofeeBlend | 
//                     <span className="text-red-500"></span> 
//                   </p>
//                 </footer>
//     </div>
//   );
// }





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import shopbackground from "../../assets/images/shop/shopbackground.webp";
// import cappuccino from "../../assets/images/shop/coffee/cappuccino.webp";
// import espresso from "../../assets/images/shop/coffee/espresso.jpg";
// import latte from "../../assets/images/shop/coffee/latte.jpg";
// import mocha from "../../assets/images/shop/coffee/mocha.jpg";
// import beefburger from "../../assets/images/shop/maindish/beef burger.jpg";
// import grilled from "../../assets/images/shop/maindish/grilledchickensalad.jpg";
// import spaghetti from "../../assets/images/shop/maindish/spaghetti carbonara.jpg";
// import freshorangejuice from "../../assets/images/shop/drinks/freshorangejuice.jpg";
// import pineapplesmoothie from "../../assets/images/shop/drinks/pineapplesmoothie.jpg";
// import icedlemontea from "../../assets/images/shop/drinks/icedlemontea.avif";
// import chocolatelavacake from "../../assets/images/shop/desserts/chocolatelavacake.jpg";
// import cheesecake from "../../assets/images/shop/desserts/cheesecake.jpg";
// import tiramisu from "../../assets/images/shop/desserts/tiramisu.avif";

// export default function Shop() {
//   const [activeTab, setActiveTab] = useState("Coffee");
//   const [cartItems, setCartItems] = useState([]);
//   const userId = localStorage.getItem("userId");

//   const menuData = {
//     Coffee: [
//       { name: "Espresso", price: 3.5, img: espresso, desc: "Strong and bold espresso made from freshly ground Arabica beans." },
//       { name: "Cappuccino", price: 4.5, img: cappuccino, desc: "Smooth blend of espresso, steamed milk, and frothy foam on top." },
//       { name: "Latte", price: 4.2, img: latte, desc: "Rich espresso with steamed milk and a light layer of foam." },
//       { name: "Mocha", price: 4.8, img: mocha, desc: "Delicious mix of chocolate, espresso, and steamed milk topped with whipped cream." }
//     ],
//     "Main Dish": [
//       { name: "Grilled Chicken Salad", price: 9.5, img: grilled, desc: "Fresh greens topped with grilled chicken, cherry tomatoes, and vinaigrette." },
//       { name: "Spaghetti Carbonara", price: 12.0, img: spaghetti, desc: "Classic Italian pasta with creamy sauce, pancetta, and Parmesan cheese." },
//       { name: "Beef Burger", price: 10.5, img: beefburger, desc: "Juicy beef patty served with lettuce, tomato, cheese, and a soft bun." }
//     ],
//     Drinks: [
//       { name: "Fresh Orange Juice", price: 3.0, img: freshorangejuice, desc: "100% fresh-squeezed orange juice, rich in vitamin C." },
//       { name: "Pineapple Smoothie", price: 4.0, img: pineapplesmoothie, desc: "Creamy and tropical smoothie made with fresh pineapple and yogurt." },
//       { name: "Iced Lemon Tea", price: 3.5, img: icedlemontea, desc: "Refreshing iced tea with a hint of lemon and natural sweetness." }
//     ],
//     Desserts: [
//       { name: "Chocolate Lava Cake", price: 5.0, img: chocolatelavacake, desc: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream." },
//       { name: "Cheesecake", price: 4.8, img: cheesecake, desc: "Creamy cheesecake with a buttery crust and fresh berry topping." },
//       { name: "Tiramisu", price: 5.5, img: tiramisu, desc: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream." }
//     ]
//   };

//   useEffect(() => {
//     const fetchCart = async () => {
//       if (!userId) return;
//       try {
//         const res = await axios.get(`http://localhost:5000/api/cart/${userId}`);
//         if (res.data && res.data.items) setCartItems(res.data.items);
//       } catch {
//         setCartItems([]);
//       }
//     };
//     fetchCart();
//   }, [userId]);

//   const saveCart = async (items) => {
//     setCartItems(items);
//     if (!userId) return;
//     await axios.post(`http://localhost:5000/api/cart/${userId}`, { items });
//   };

//   const addToCart = (item) => {
//     const exists = cartItems.find((i) => i.name === item.name);
//     if (exists) {
//       const updated = cartItems.map((i) =>
//         i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
//       );
//       saveCart(updated);
//       toast.info(`${item.name} quantity increased!`, {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         theme: "dark"
//       });
//     } else {
//       saveCart([...cartItems, { ...item, quantity: 1 }]);
//       toast.success(`${item.name} added to cart!`, {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         theme: "colored"
//       });
//     }
//   };

//   return (
//     <div className="bg-[#0d0d0d] text-white">
//       <ToastContainer />
//       <section className="h-[70vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${shopbackground})` }}>
//         <div className="text-center">
//           <h1 className="text-5xl font-semibold tracking-wider">ORDER ONLINE</h1>
//           <div className="flex justify-center gap-6 mt-4 text-lg">
//             <a href="/" className="hover:text-yellow-400">HOME</a>
//             <span>|</span>
//             <span className="text-yellow-400 font-semibold">SHOP</span>
//           </div>
//         </div>
//       </section>

//       <div className="flex justify-center gap-10 mt-10 text-xl">
//         {["Coffee", "Main Dish", "Drinks", "Desserts"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-2 ${activeTab === tab ? "text-yellow-400 border-b-2 border-yellow-400" : "hover:text-yellow-300"}`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       <div className="px-10 md:px-20 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//         {menuData[activeTab].map((item, index) => (
//           <div key={index} className="text-center">
//             <img src={item.img} alt={item.name} className="w-full h-64 object-cover rounded-lg" />
//             <h3 className="uppercase mt-4 text-lg font-semibold tracking-wide">{item.name}</h3>
//             <p className="text-gray-400 mt-2 text-sm w-[80%] mx-auto">{item.desc}</p>
//             <p className="mt-3 text-lg font-semibold">${item.price.toFixed(2)}</p>
//             <button
//               onClick={() => addToCart({ name: item.name, price: item.price, image: item.img, description: item.desc })}
//               className="mt-3 border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import shopbackground from "../../assets/images/shop/shopbackground.webp";
import cappuccino from "../../assets/images/shop/coffee/cappuccino.webp";
import espresso from "../../assets/images/shop/coffee/espresso.jpg";
import latte from "../../assets/images/shop/coffee/latte.jpg";
import mocha from "../../assets/images/shop/coffee/mocha.jpg";
import beefburger from "../../assets/images/shop/maindish/beef burger.jpg";
import grilled from "../../assets/images/shop/maindish/grilledchickensalad.jpg";
import spaghetti from "../../assets/images/shop/maindish/spaghetti carbonara.jpg";
import freshorangejuice from "../../assets/images/shop/drinks/freshorangejuice.jpg";
import pineapplesmoothie from "../../assets/images/shop/drinks/pineapplesmoothie.jpg";
import icedlemontea from "../../assets/images/shop/drinks/icedlemontea.avif";
import chocolatelavacake from "../../assets/images/shop/desserts/chocolatelavacake.jpg";
import cheesecake from "../../assets/images/shop/desserts/cheesecake.jpg";
import tiramisu from "../../assets/images/shop/desserts/tiramisu.avif";

export default function Shop() {
  const [activeTab, setActiveTab] = useState("Coffee");
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const checkLogin = localStorage.getItem("isLoggedIn");
    if (checkLogin === "true") fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/cart/${userId}`);
      if (res.data && res.data.items) setCartItems(res.data.items);
    } catch {
      setCartItems([]);
    }
  };

  const saveCart = async (items) => {
    setCartItems(items);
    await axios.post(`http://localhost:5000/api/cart/${userId}`, { items });
  };

  const addToCart = (item) => {
    const existing = cartItems.find((i) => i.name === item.name);
    if (existing) {
      const updated = cartItems.map((i) =>
        i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
      );
      saveCart(updated);
      toast.success(`${item.name} quantity increased`, { position: "top-right", autoClose: 2000 });
    } else {
      saveCart([...cartItems, { ...item, quantity: 1 }]);
      toast.success(`${item.name} added to cart`, { position: "top-right", autoClose: 2000 });
    }
  };

  const menuData = {
    Coffee: [
      { name: "Espresso", price: 3.5, img: espresso, desc: "Strong and bold espresso made from freshly ground Arabica beans." },
      { name: "Cappuccino", price: 4.5, img: cappuccino, desc: "Smooth blend of espresso, steamed milk, and frothy foam on top." },
      { name: "Latte", price: 4.2, img: latte, desc: "Rich espresso with steamed milk and a light layer of foam." },
      { name: "Mocha", price: 4.8, img: mocha, desc: "Delicious mix of chocolate, espresso, and steamed milk topped with whipped cream." }
    ],
    "Main Dish": [
      { name: "Grilled Chicken Salad", price: 9.5, img: grilled, desc: "Fresh greens topped with grilled chicken, cherry tomatoes, and vinaigrette." },
      { name: "Spaghetti Carbonara", price: 12, img: spaghetti, desc: "Classic Italian pasta with creamy sauce, pancetta, and Parmesan cheese." },
      { name: "Beef Burger", price: 10.5, img: beefburger, desc: "Juicy beef patty served with lettuce, tomato, cheese, and a soft bun." }
    ],
    Drinks: [
      { name: "Fresh Orange Juice", price: 3, img: freshorangejuice, desc: "100% fresh-squeezed orange juice, rich in vitamin C." },
      { name: "Pineapple Smoothie", price: 4, img: pineapplesmoothie, desc: "Creamy and tropical smoothie made with fresh pineapple and yogurt." },
      { name: "Iced Lemon Tea", price: 3.5, img: icedlemontea, desc: "Refreshing iced tea with a hint of lemon and natural sweetness." }
    ],
    Desserts: [
      { name: "Chocolate Lava Cake", price: 5, img: chocolatelavacake, desc: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream." },
      { name: "Cheesecake", price: 4.8, img: cheesecake, desc: "Creamy cheesecake with a buttery crust and fresh berry topping." },
      { name: "Tiramisu", price: 5.5, img: tiramisu, desc: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream." }
    ]
  };

  return (
    <div className="bg-[#0d0d0d] text-white">
      <section className="h-[70vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${shopbackground})` }}>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-wider">ORDER ONLINE</h1>
          <div className="flex justify-center gap-6 mt-4 text-lg">
            <a href="/" className="hover:text-yellow-400">HOME</a>
            <span>|</span>
            <span className="text-yellow-400 font-semibold">SHOP</span>
          </div>
        </div>
      </section>
      <div className="flex justify-center gap-10 mt-10 text-xl">
        {["Coffee", "Main Dish", "Drinks", "Desserts"].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-2 ${activeTab === tab ? "text-yellow-400 border-b-2 border-yellow-400" : "hover:text-yellow-300"}`}>
            {tab}
          </button>
        ))}
      </div>
      <div className="px-10 md:px-20 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {menuData[activeTab].map((item, index) => (
          <div key={index} className="text-center">
            <img src={item.img} alt={item.name} className="w-full h-64 object-cover rounded-lg" />
            <h3 className="uppercase mt-4 text-lg font-semibold tracking-wide">{item.name}</h3>
            <p className="text-gray-400 mt-2 text-sm w-[80%] mx-auto">{item.desc}</p>
            <p className="mt-3 text-lg font-semibold">${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart({ name: item.name, price: item.price, image: item.img, description: item.desc })} className="mt-3 border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
      <div className="h-20"></div>
      <footer className="bg-black text-gray-300 py-16 px-8 md:px-20">
        <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <div>
            <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">About Us</h3>
            <p className="text-gray-400 leading-relaxed mb-6">Brewing passion and flavor, we serve quality coffee in a cozy space, creating moments of warmth, connection, and joy.</p>
            <div className="flex space-x-4 text-lg">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"><FaTwitter /></a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"><FaFacebookF /></a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"><FaInstagram /></a>
            </div>
          </div>
          <div>
            <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">Recent Blog</h3>
            <div className="flex items-start mb-4">
              <img src="https://vps029.manageserver.in/menu/wp-content/uploads/2024/01/images-8-1.jpeg" alt="food" className="w-16 h-16 object-cover mr-4" />
              <div>
                <p className="font-medium text-white text-sm">Even the all-powerful Pointing has no control about</p>
                <p className="text-xs text-gray-500 mt-1">Sept 15, 2018 • Admin • 19</p>
              </div>
            </div>
            <div className="flex items-start">
              <img src="https://img.goodfon.com/wallpaper/big/e/cf/food-cofee-cooky.webp" alt="pasta" className="w-16 h-16 object-cover mr-4" />
              <div>
                <p className="font-medium text-white text-sm">Even the all-powerful Pointing has no control about</p>
                <p className="text-xs text-gray-500 mt-1">Sept 15, 2018 • Admin • 19</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Cooked</li>
              <li>Deliver</li>
              <li>Quality Foods</li>
              <li>Mixed</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">Have a Questions?</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Tinkune, Tinkune-32, Kathmandu, Nepal</li>
              <li>+977- 9823478567</li>
              <li>coffeeblend@gmail.com</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6">Copyright ©2025 All rights reserved | CofeeBlend</p>
      </footer>
    </div>
  );
}

