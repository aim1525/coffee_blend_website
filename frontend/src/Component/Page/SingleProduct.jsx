// import React from "react";
// import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
// import espresso from "../../assets/images/shop/espresso.jpg"
// import cappuccino from "../../assets/images/shop/cappuccino.jpg"
// import grilledchickensalad from "../../assets/images/shop/grilledchickensalad.jpg"
// import chocolatelavacake from "../../assets/images/shop/chocolatelavacake.jpg"
// import creamylattecoffee from "../../assets/images/shop/creamylattecoffee.webp"

// export default function ProductDetail() {
//   const relatedProducts = [
//     {
//       name: "Espresso",
//       price: "$3.50",
//       img: espresso,
//       desc: "Strong and bold espresso made from freshly ground Arabica beans."
//     },
//     {
//       name: "Cappuccino",
//       price: "$4.50",
//       img: cappuccino,
//       desc: "Smooth blend of espresso, steamed milk, and frothy foam on top."
//     },
//     {
//       name: "Grilled Chicken Salad",
//       price: "$9.50",
//       img: grilledchickensalad,
//       desc: "Fresh greens topped with grilled chicken, cherry tomatoes, and vinaigrette."
//     },
//     {
//       name: "Chocolate Lava Cake",
//       price: "$5.00",
//       img: chocolatelavacake,
//       desc: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream."
//     }
//   ];

//   return (
//     <div className="bg-[#0d0d0d] text-white">

//       {/* HERO SECTION */}
//       <section
//         className="h-[70vh] bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1600&q=80')",
//         }}
//       >
//         <div className="text-center">
//           <h1 className="text-5xl font-semibold tracking-wider drop-shadow-lg">
//             PRODUCT DETAIL
//           </h1>

//           <div className="flex justify-center gap-6 mt-4 text-lg">
//             <a href="/" className="hover:text-yellow-400">HOME</a>
//             <span>|</span>
//             <span className="text-yellow-400 font-semibold">PRODUCT</span>
//           </div>
//         </div>
//       </section>

//       {/* PRODUCT DETAIL */}
//       <div className="max-w-6xl mx-auto px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
//         {/* PRODUCT IMAGE */}
//         <div>
//           <img
//             src={creamylattecoffee}
//             alt="Coffee"
//             className="rounded-xl shadow-2xl w-full"
//           />
//         </div>

//         {/* PRODUCT INFO */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-4xl font-bold tracking-wide">CREAMY LATTE COFFEE</h2>

//           <p className="text-3xl font-semibold text-yellow-400 mt-4">$4.90</p>

//           <p className="text-gray-300 mt-6 leading-relaxed">
//             Indulge in the creamy latte coffee, where velvety milk meets perfectly brewed espresso, creating a rich, comforting flavor that awakens your senses and turns every sip into a moment of bliss.
//           </p>

//           {/* SIZE DROPDOWN */}
//           <select className="bg-[#1c1c1c] border border-gray-700 px-4 py-3 rounded mt-6 w-full md:w-1/2">
//             <option>Small</option>
//             <option>Medium</option>
//             <option>Large</option>
//           </select>

//           {/* QUANTITY */}
//           <div className="flex items-center gap-6 mt-8">
//             <button className="px-4 py-2 bg-[#1a1a1a] hover:bg-yellow-500 hover:text-black transition rounded">
//               -
//             </button>
//             <span className="text-2xl font-semibold">1</span>
//             <button className="px-4 py-2 bg-[#1a1a1a] hover:bg-yellow-500 hover:text-black transition rounded">
//               +
//             </button>
//           </div>

//           {/* ADD TO CART */}
//           <button className="mt-10 bg-yellow-500 text-black px-8 py-3 rounded-lg hover:bg-yellow-600 transition font-semibold tracking-wide">
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* RELATED PRODUCTS */}
//       <div className="bg-[#111] py-20">
//         <div className="max-w-6xl mx-auto px-6 text-center">

//           <h3 className="text-yellow-500 text-xl italic">Discover</h3>
//           <h2 className="text-4xl font-bold tracking-wider mt-2">RELATED PRODUCTS</h2>

//           <p className="text-gray-400 mt-4 mb-12 max-w-2xl mx-auto">
//             Explore related coffee creations and delicious dishes, each crafted with rich flavors and aromas, delivering delightful moments and unforgettable experiences.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//             {relatedProducts.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-[#1a1a1a] rounded-xl shadow-xl overflow-hidden hover:scale-105 transition"
//               >
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-full h-48 object-cover"
//                 />

//                 <div className="p-5">
//                   <h4 className="text-lg font-semibold uppercase tracking-wide">
//                     {item.name}
//                   </h4>

//                   <p className="text-gray-400 text-sm mt-2">
//                     {item.desc}
//                   </p>

//                   <p className="text-yellow-400 text-xl font-semibold mt-3">{item.price}</p>

//                   <button className="mt-4 w-full border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* FOOTER */}
//       <footer className="bg-black text-gray-300 py-16 px-8 md:px-20">
//                         <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
                
//                           {/* About Us */}
//                           <div>
//                             <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
//                               About Us
//                             </h3>
//                             <p className="text-gray-400 leading-relaxed mb-6">
//                               Brewing passion and flavor, we serve quality coffee in a cozy space, creating moments of warmth, connection, and joy.
//                             </p>
//                             <div className="flex space-x-4 text-lg">
//                               <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
//                                 <FaTwitter />
//                               </a>
//                               <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
//                                 <FaFacebookF />
//                               </a>
//                               <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
//                                 <FaInstagram />
//                               </a>
//                             </div>
//                           </div>
                
//                           {/* Recent Blog */}
//                           <div>
//                             <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
//                               Recent Blog
//                             </h3>
                
//                             <div className="flex items-start mb-4">
//                               <img
//                                 src="https://vps029.manageserver.in/menu/wp-content/uploads/2024/01/images-8-1.jpeg"
//                                 alt="food"
//                                 className="w-16 h-16 object-cover mr-4"
//                               />
//                               <div>
//                                 <p className="font-medium text-white text-sm">
//                                   Even the all-powerful Pointing has no control about
//                                 </p>
//                                 <p className="text-xs text-gray-500 mt-1">
//                                   Sept 15, 2018 • Admin • 19
//                                 </p>
//                               </div>
//                             </div>
                
//                             <div className="flex items-start">
//                               <img
//                                 src="https://img.goodfon.com/wallpaper/big/e/cf/food-cofee-cooky.webp"
//                                 alt="pasta"
//                                 className="w-16 h-16 object-cover mr-4"
//                               />
//                               <div>
//                                 <p className="font-medium text-white text-sm">
//                                   Even the all-powerful Pointing has no control about
//                                 </p>
//                                 <p className="text-xs text-gray-500 mt-1">
//                                   Sept 15, 2018 • Admin • 19
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
                
//                           {/* Services */}
//                           <div>
//                             <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
//                               Services
//                             </h3>
//                             <ul className="space-y-2 text-gray-400 text-sm">
//                               <li>Cooked</li>
//                               <li>Deliver</li>
//                               <li>Quality Foods</li>
//                               <li>Mixed</li>
//                             </ul>
//                           </div>
                
//                           {/* Have a Questions */}
//                           <div>
//                             <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
//                               Have a Questions?
//                             </h3>
//                             <ul className="space-y-3 text-gray-400 text-sm">
//                               <li>
//                                 <span className="block">Tinkune, </span>
//                                 <span>Tinkune-32, Kathmandu, Nepal</span>
//                               </li>
//                               <li>+977- 9823478567</li>
//                               <li>coffeeblend@gmail.com</li>
//                             </ul>
//                           </div>
//                         </div>
                
//                         <p className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6">
//                           Copyright ©2025 All rights reserved | CofeeBlend | 
//                           <span className="text-red-500"></span> 
//                         </p>
//                       </footer>

//     </div>
//   );
// }


import React, { useState, useEffect } from "react";  
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import espresso from "../../assets/images/shop/espresso.jpg";
import cappuccino from "../../assets/images/shop/cappuccino.jpg";
import grilledchickensalad from "../../assets/images/shop/grilledchickensalad.jpg";
import chocolatelavacake from "../../assets/images/shop/chocolatelavacake.jpg";
import creamylattecoffee from "../../assets/images/shop/creamylattecoffee.webp";
import { useNavigate } from "react-router-dom";


export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Small");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userId");
    if (storedUser) setUserId(storedUser);
  }, []);

  const relatedProducts = [
    { name: "Espresso", price: 3.5, img: espresso, desc: "Strong and bold espresso made from freshly ground Arabica beans." },
    { name: "Cappuccino", price: 4.5, img: cappuccino, desc: "Smooth blend of espresso, steamed milk, and frothy foam on top." },
    { name: "Grilled Chicken Salad", price: 9.5, img: grilledchickensalad, desc: "Fresh greens topped with grilled chicken, cherry tomatoes, and vinaigrette." },
    { name: "Chocolate Lava Cake", price: 5, img: chocolatelavacake, desc: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream." }
  ];

  const product = {
    id: "creamylattecoffee",
    name: "CREAMY LATTE COFFEE",
    price: 4.9,
    quantity: quantity,
    img: creamylattecoffee,
    description: "Indulge in the creamy latte coffee, where velvety milk meets perfectly brewed espresso."
  };

  // const handleAddToCart = async (item = null) => {
  //   if (!userId) return toast.error("Please login ");
  //   const productToAdd = item || product;
  //   try {
  //     await axios.post("http://localhost:5000/api/cart/add", { userId, product: productToAdd });
  //     toast.success("Added to cart");
  //   } catch {
  //     toast.error("Failed to add to cart");
  //   }
  // };



const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const handleAddToCart = async (item = null) => {
  if (!userId) {
    setLoading(true);
    toast.error("Please login");
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1500);
    return;
  }

  const productToAdd = item || product;
  setLoading(true);
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await axios.post("http://localhost:5000/api/cart/add", { userId, product: productToAdd });
    toast.success("Added to cart");
  } catch {
    toast.error("Failed to add to cart");
  } finally {
    setLoading(false);
  }
};




  return (
    <div className="bg-[#0d0d0d] text-white">
      <ToastContainer />
      <section className="h-[70vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1600&q=80')" }}>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-wider drop-shadow-lg">PRODUCT DETAIL</h1>
          <div className="flex justify-center gap-6 mt-4 text-lg">
            <a href="/" className="hover:text-yellow-400">HOME</a>
            <span>|</span>
            <span className="text-yellow-400 font-semibold">PRODUCT</span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div><img src={creamylattecoffee} alt="Coffee" className="rounded-xl shadow-2xl w-full" /></div>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold tracking-wide">CREAMY LATTE COFFEE</h2>
          <p className="text-3xl font-semibold text-yellow-400 mt-4">$4.90</p>
          <p className="text-gray-300 mt-6 leading-relaxed">
            Indulge in the creamy latte coffee, where velvety milk meets perfectly brewed espresso, creating a rich, comforting flavor.
          </p>

          <select value={size} onChange={e => setSize(e.target.value)} className="bg-[#1c1c1c] border border-gray-700 px-4 py-3 rounded mt-6 w-full md:w-1/2">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>

          <div className="flex items-center gap-6 mt-8">
            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="px-4 py-2 bg-[#1a1a1a] hover:bg-yellow-500 hover:text-black transition rounded">-</button>
            <span className="text-2xl font-semibold">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 bg-[#1a1a1a] hover:bg-yellow-500 hover:text-black transition rounded">+</button>
          </div>

          <button onClick={() => handleAddToCart()} className="mt-10 bg-yellow-500 text-black px-8 py-3 rounded-lg hover:bg-yellow-600 transition font-semibold tracking-wide">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="bg-[#111] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-yellow-500 text-xl italic">Discover</h3>
          <h2 className="text-4xl font-bold tracking-wider mt-2">RELATED PRODUCTS</h2>
          <p className="text-gray-400 mt-4 mb-12 max-w-2xl mx-auto">Explore related coffee creations and delicious dishes, each crafted with rich flavors and aromas.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {relatedProducts.map((item, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-xl shadow-xl overflow-hidden hover:scale-105 transition">
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h4 className="text-lg font-semibold uppercase tracking-wide">{item.name}</h4>
                  <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
                  <p className="text-yellow-400 text-xl font-semibold mt-3">${item.price}</p>
                  <button onClick={() => handleAddToCart({ id: item.name, name: item.name, price: item.price, quantity: 1, img: item.img, description: item.desc })} className="mt-4 w-full border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-black text-gray-300 py-16 px-8 md:px-20">
        <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <div>
            <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">About Us</h3>
            <p className="text-gray-400 leading-relaxed mb-6">Brewing passion and flavor, we serve quality coffee in a cozy space.</p>
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
              <div><p className="font-medium text-white text-sm">Even the all-powerful Pointing has no control about</p><p className="text-xs text-gray-500 mt-1">Sept 15, 2018 • Admin • 19</p></div>
            </div>
            <div className="flex items-start">
              <img src="https://img.goodfon.com/wallpaper/big/e/cf/food-cofee-cooky.webp" alt="pasta" className="w-16 h-16 object-cover mr-4" />
              <div><p className="font-medium text-white text-sm">Even the all-powerful Pointing has no control about</p><p className="text-xs text-gray-500 mt-1">Sept 15, 2018 • Admin • 19</p></div>
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
              <li><span className="block">Tinkune, </span><span>Tinkune-32, Kathmandu, Nepal</span></li>
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
