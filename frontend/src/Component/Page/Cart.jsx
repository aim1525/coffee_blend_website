// import { useEffect, useState } from "react";
// import axios from "axios";
// import React from "react";
// const Cart = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

//   const userId = localStorage.getItem("userId");

//   useEffect(() => {
//     const checkLogin = localStorage.getItem("isLoggedIn");
//     if (checkLogin === "true") {
//       setIsLoggedIn(true);
//       fetchCart();
//     }
//   }, []);

//   const fetchCart = async () => {
//     const res = await axios.get(`http://localhost:5000/api/cart/${userId}`);
//     if (res.data && res.data.items) setCartItems(res.data.items);
//   };

//   const saveCart = async (updated) => {
//     setCartItems(updated);
//     await axios.post(`http://localhost:5000/api/cart/${userId}`, {
//       items: updated,
//     });
//   };

//   const updateQuantity = (id, qty) => {
//     if (qty < 1) return;
//     const updated = cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: qty } : item
//     );
//     saveCart(updated);
//   };

//   const removeItem = (id) => {
//     const updated = cartItems.filter((item) => item.id !== id);
//     saveCart(updated);
//   };

//   if (!isLoggedIn)
//     return (
//       <div className="p-10 text-center">
//         <h2>Login Required</h2>
//       </div>
//     );

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div className="bg-white p-4 rounded shadow">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center justify-between p-3 border-b">
//               <div>
//                 <h3>{item.name}</h3>
//                 <p>{item.description}</p>
//               </div>

//               <div>${item.price.toFixed(2)}</div>

//               <div className="flex items-center">
//                 <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
//                 <span className="mx-3">{item.quantity}</span>
//                 <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//               </div>

//               <div>${(item.price * item.quantity).toFixed(2)}</div>

//               <button className="text-red-500" onClick={() => removeItem(item.id)}>×</button>
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="mt-6 bg-white p-4 shadow rounded">
//         <h2 className="text-xl font-bold">Total: ${subtotal.toFixed(2)}</h2>
//       </div>
//     </div>
//   );
// };

// export default Cart;



// import { useEffect, useState } from "react";
// import axios from "axios";
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import carttop from "../../assets/images/carttopbackground/carttop.avif"

// function CartTop() {
//   useEffect(() => {
//     document.title = "About Us | Coffee Blend";
//   }, []);

//   return (
//     <div className="relative h-[70vh] w-full">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${carttop})` // change to your image path
//         }}
//       ></div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Content */}
//       <div className="relative h-full flex flex-col items-center justify-center text-white text-center">
//         <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
//           ABOUT US
//         </h1>

//         <div className="mt-3 flex gap-2 text-sm">
//           <Link
//             to="/"
//             className="opacity-80 hover:opacity-100 cursor-pointer"
//           >
//             HOME
//           </Link>

//           <span>/</span>

//           <span className="opacity-100 font-semibold">ABOUT</span>
//         </div>
//       </div>
//     </div>
//   );
// }


// const Cart = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();
//   const userId = localStorage.getItem("userId");

//   useEffect(() => {
//     const checkLogin = localStorage.getItem("isLoggedIn");
//     if (checkLogin === "true") {
//       setIsLoggedIn(true);
//       fetchCart();
//     } else {
//       toast.info("🔒 Please login first", { position: "top-right" });
//       setTimeout(() => navigate("/login"), 1500);
//     }
//   }, []);

//   const fetchCart = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/cart/${userId}`);
//       if (res.data && res.data.items) setCartItems(res.data.items);
//     } catch {
//       setCartItems([]);
//     }
//   };

//   const saveCart = async (updated) => {
//     setCartItems(updated);
//     await axios.post(`http://localhost:5000/api/cart/${userId}`, { items: updated });
//   };

//   const updateQuantity = (id, qty) => {
//     if (qty < 1) return;
//     const updated = cartItems.map((item) => (item.id === id ? { ...item, quantity: qty } : item));
//     saveCart(updated);
//   };

//   const removeItem = (id) => {
//     const updated = cartItems.filter((item) => item.id !== id);
//     saveCart(updated);
//   };

//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div className="bg-white p-4 rounded shadow">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center justify-between p-3 border-b">
//               <div>
//                 <h3>{item.name}</h3>
//                 <p>{item.description}</p>
//               </div>
//               <div>${item.price.toFixed(2)}</div>
//               <div className="flex items-center">
//                 <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
//                 <span className="mx-3">{item.quantity}</span>
//                 <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//               </div>
//               <div>${(item.price * item.quantity).toFixed(2)}</div>
//               <button className="text-red-500" onClick={() => removeItem(item.id)}>×</button>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="mt-6 bg-white p-4 shadow rounded">
//         <h2 className="text-xl font-bold">Total: ${subtotal.toFixed(2)}</h2>
//       </div>
//       <br />

//       <ToastContainer />

//     </div>

//   );
// };


// // ✅ Page 6 — Footer Section
// function Footer() {
//   return (
//     <footer className="bg-black text-gray-300 py-16 px-8 md:px-20">
//       <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">

//         {/* About Us */}
//         <div>
//           <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
//             About Us
//           </h3>
//           <p className="text-gray-400 leading-relaxed mb-6">
//             Brewing passion and flavor, we serve quality coffee in a cozy space, creating moments of warmth, connection, and joy.
//           </p>
//           <div className="flex space-x-4 text-lg">
//             <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
//               <FaTwitter />
//             </a>
//             <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
//               <FaFacebookF />
//             </a>
//             <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
//               <FaInstagram />
//             </a>
//           </div>
//         </div>

//         {/* Recent Blog */}
//         <div>
//           <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
//             Recent Blog
//           </h3>

//           <div className="flex items-start mb-4">
//             <img
//               src="https://vps029.manageserver.in/menu/wp-content/uploads/2024/01/images-8-1.jpeg"
//               alt="food"
//               className="w-16 h-16 object-cover mr-4"
//             />
//             <div>
//               <p className="font-medium text-white text-sm">
//                 Even the all-powerful Pointing has no control about
//               </p>
//               <p className="text-xs text-gray-500 mt-1">
//                 Sept 15, 2018 • Admin • 19
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start">
//             <img
//               src="https://img.goodfon.com/wallpaper/big/e/cf/food-cofee-cooky.webp"
//               alt="pasta"
//               className="w-16 h-16 object-cover mr-4"
//             />
//             <div>
//               <p className="font-medium text-white text-sm">
//                 Even the all-powerful Pointing has no control about
//               </p>
//               <p className="text-xs text-gray-500 mt-1">
//                 Sept 15, 2018 • Admin • 19
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
//             Services
//           </h3>
//           <ul className="space-y-2 text-gray-400 text-sm">
//             <li>Cooked</li>
//             <li>Deliver</li>
//             <li>Quality Foods</li>
//             <li>Mixed</li>
//           </ul>
//         </div>

//         {/* Have a Questions */}
//         <div>
//           <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
//             Have a Questions?
//           </h3>
//           <ul className="space-y-3 text-gray-400 text-sm">
//             <li>
//               <span className="block">Tinkune, </span>
//               <span>Tinkune-32, Kathmandu, Nepal</span>
//             </li>
//             <li>+977- 9823478567</li>
//             <li>coffeeblend@gmail.com</li>
//           </ul>
//         </div>
//       </div>

//       <p className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6">
//         Copyright ©2025 All rights reserved | CofeeBlend |
//         <span className="text-red-500"></span>
//       </p>
//     </footer>
//   );
// }


// export default function App() {
//   return (
//     <div className="font-sans">
//       <CartTop />
//       <Cart />
//       <Footer/>
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import carttop from "../../assets/images/carttopbackground/carttop.avif";

function CartTop() {
  useEffect(() => {
    document.title = "Cart | Coffee Blend";
  }, []);

  return (
    <div className="relative h-[70vh] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${carttop})` }}
      ></div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative h-full flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
          YOUR CART
        </h1>

        <div className="mt-3 flex gap-2 text-sm">
          <Link to="/" className="opacity-80 hover:opacity-100 cursor-pointer">
            HOME
          </Link>
          <span>/</span>
          <span className="opacity-100 font-semibold">CART</span>
        </div>
      </div>
    </div>
  );
}

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const checkLogin = localStorage.getItem("isLoggedIn");

    if (checkLogin === "true") {
      fetchCart();
    } else {
      toast.info("Please login first", { position: "top-right" });
      setTimeout(() => navigate("/login"), 1500);
    }
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
    await axios.post(`http://localhost:5000/api/cart/${userId}`, {
      items,
    });
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    const updated = cartItems.map((i) =>
      i.id === id ? { ...i, quantity: qty } : i
    );
    saveCart(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((i) => i.id !== id);
    saveCart(updated);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 md:px-6 lg:px-8">

      <div className="grid grid-cols-5 bg-[#b68a56] text-white font-semibold py-4 px-6 rounded-t">
        <p className="col-span-2">Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>

      <div className="bg-black/80 backdrop-blur border border-gray-700">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-5 items-center py-6 px-6 border-b border-gray-700 text-white"
          >
            <div className="col-span-2 flex items-center gap-4">
              <button
                className="text-white bg-gray-700 hover:bg-red-600 p-1 px-2 rounded"
                onClick={() => removeItem(item.id)}
              >
                ✕
              </button>

              <img
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />

              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-300 w-44">
                  {item.description}
                </p>
              </div>
            </div>

            <p>${item.price.toFixed(2)}</p>

            <div className="flex items-center justify-center border w-20 py-2">
              <button
                className="px-2"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span className="px-3">{item.quantity}</span>
              <button
                className="px-2"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>

            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-10">
        <div className="w-80 bg-black/80 border border-gray-700 text-white p-6 rounded">
          <h3 className="text-xl font-semibold mb-6">CART TOTALS</h3>

          <div className="flex justify-between mb-3 text-gray-300">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>

          <div className="flex justify-between mb-3 text-gray-300">
            <p>Delivery</p>
            <p>$0.00</p>
          </div>

          <div className="flex justify-between mb-3 text-gray-300">
            <p>Discount</p>
            <p>$3.00</p>
          </div>

          <div className="flex justify-between mt-4 border-t border-gray-700 pt-4 text-lg font-semibold">
            <p>TOTAL</p>
            <p>${(subtotal - 3).toFixed(2)}</p>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full mt-6 bg-[#b68a56] hover:bg-[#a37845] py-3 font-semibold rounded"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

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
            Brewing passion and flavor, we serve quality coffee in a cozy space.
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

        {/* Questions */}
        <div>
          <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">
            Have a Questions?
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              Tinkune-32, Kathmandu, Nepal
            </li>
            <li>+977- 9823478567</li>
            <li>coffeeblend@gmail.com</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6">
        Copyright ©2025 CoffeeBlend
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans">
      <CartTop />
      <Cart />
      <Footer />
    </div>
  );
}

