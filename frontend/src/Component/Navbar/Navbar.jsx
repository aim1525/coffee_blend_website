
// working code 
// import { useState, useEffect, useRef } from "react";
// import React from "react";
// import { ShoppingCart } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [shopOpen, setShopOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const shopRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);

//     const loggedIn = localStorage.getItem("isLoggedIn");
//     if (loggedIn === "true") setIsLoggedIn(true);

//     const handleClickOutside = (e) => {
//       if (shopRef.current && !shopRef.current.contains(e.target)) {
//         setShopOpen(false);
//       }
//     };

//     window.addEventListener("click", handleClickOutside);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     setIsLoggedIn(false);
//     toast.info("👋 Logged out successfully!", { position: "top-right" });
//     navigate("/");
//   };

//   const handleLoginNotify = () => {
//     toast.success("✅ Redirecting to login...", { position: "top-right" });
//   };

//   return (
//     <>
//       <nav
//         className={`fixed top-0 w-full h-[80px] z-50 transition-colors duration-500 ${
//           scrolled ? "bg-black shadow-lg" : "bg-black/60 backdrop-blur-md"
//         }`}
//       >
//         <div className="max-w-30xl flex justify-between items-center py-4 text-white">
//           <h1 className="text-xl ml-30 font-medium tracking-widest leading-tight pl-6 md:pl-0 animate__animated animate__fadeInDown">
//             COFFEE
//             <span className="block text-sm font-normal tracking-[0.25em] text-gray-300 text-center">
//               BLEND
//             </span>
//           </h1>

//           <div className="flex items-center gap-10 mr-10">
//             <ul className="hidden md:flex uppercase text-[12px] py-4 gap-14">
//               {[
//                 { name: "Home", path: "/" },
//                 { name: "Menu", path: "/menu" },
//                 { name: "Services", path: "/services" },
//                 { name: "Blog", path: "/blog" },
//                 { name: "About", path: "/about" },
//                 { name: "Contact", path: "/contact" },
//               ].map((item, i) => (
//                 <li key={i}>
//                   <Link
//                     to={item.path}
//                     className="relative transition duration-300 hover:text-yellow-500"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}

//               <li className="relative" ref={shopRef}>
//                 <button
//                   onClick={() => {
//                     setShopOpen(!shopOpen);
//                     setMenuOpen(false);
//                   }}
//                   className="relative transition duration-300 hover:text-yellow-500 uppercase"
//                 >
//                   Shop
//                 </button>

//                 {shopOpen && (
//                   <ul className="absolute right-0 mt-3 bg-black/90 text-white rounded-lg shadow-lg w-40 py-2 animate__animated animate__fadeIn">
//                     <li>
//                       <Link
//                         to="/shop"
//                         onClick={() => setShopOpen(false)}
//                         className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition-colors duration-300"
//                       >
//                         Shop
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/SingleProduct"
//                         onClick={() => setShopOpen(false)}
//                         className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition-colors duration-300"
//                       >
//                         Single Product
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/cart"
//                         onClick={() => setShopOpen(false)}
//                         className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition-colors duration-300"
//                       >
//                         Cart
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/checkout"
//                         onClick={() => setShopOpen(false)}
//                         className="block px-4 py-2 hover:bg-yellow-500 hover:text-black transition-colors duration-300"
//                       >
//                         Checkout
//                       </Link>
//                     </li>
//                   </ul>
//                 )}
//               </li>
//             </ul>

//             {isLoggedIn && (
//               <div className="relative cursor-pointer flex items-center animate__animated animate__fadeInRight">
//                 <ShoppingCart className="w-6 h-6 hover:text-yellow-500 transition-colors duration-300" />
//                 <span className="absolute -top-2 -right-3 bg-yellow-500 text-xs font-semibold rounded-full px-1.5">
//                   1
//                 </span>
//               </div>
//             )}

//             {!isLoggedIn ? (
//               <Link
//                 to="/login"
//                 onClick={handleLoginNotify}
//                 className="relative overflow-hidden px-6 py-2 rounded-[4px] font-bold shadow-lg text-[15px]
//                 bg-yellow-500 text-white transition-all duration-500 hover:scale-105
//                 before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-600 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-1000"
//               >
//                 <span className="relative z-10">Login</span>
//               </Link>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="relative overflow-hidden px-6 py-2 rounded-xl font-bold shadow-lg 
//                 bg-red-600 text-white 
//                 transition-all duration-300 
//                 hover:scale-105
//                 before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-500 before:to-red-700 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
//               >
//                 <span className="relative z-10">Logout</span>
//               </button>
//             )}

//             <button
//               onClick={() => {
//                 setMenuOpen(!menuOpen);
//                 setShopOpen(false);
//               }}
//               className="md:hidden focus:outline-none"
//             >
//               <svg
//                 className="w-7 h-7"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d={
//                     menuOpen
//                       ? "M6 18L18 6M6 6l12 12"
//                       : "M4 6h16M4 12h16m-7 6h7"
//                   }
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       <ToastContainer />
//     </>
//   );
// }



import React, { useState, useEffect, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const shopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") setIsLoggedIn(true);

    const handleClickOutside = (e) => {
      if (shopRef.current && !shopRef.current.contains(e.target)) {
        setShopOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    if (loggedIn === "true") fetchCartCount();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const fetchCartCount = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;
    try {
      const res = await axios.get(`http://localhost:5000/api/cart/${userId}`);
      const count = res.data.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
      setCartCount(count);
    } catch {
      setCartCount(0);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    setCartCount(0);
    toast.info("👋 Logged out successfully!", { position: "top-right" });
    navigate("/");
  };

  const handleLoginNotify = () => {
    toast.success("👋 Hi there! Let's log you in.", { position: "top-right" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full h-[80px] z-50 transition-colors duration-500 ${
          scrolled ? "bg-black shadow-lg" : "bg-black/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-30xl flex justify-between items-center py-4 text-white">
          <h1 className="text-xl ml-30 font-medium tracking-widest leading-tight pl-6 md:pl-0 animate__animated animate__fadeInDown cursor-pointer">
            COFFEE
            <span className="block text-sm font-normal tracking-[0.25em] text-gray-300 text-center">
              BLEND
            </span>
          </h1>

          <div className="flex items-center gap-10 mr-10">
            <ul className="hidden md:flex uppercase text-[12px] py-4 gap-14">
              {[{ name: "Home", path: "/" }, { name: "Menu", path: "/menu" }, { name: "Services", path: "/services" }, { name: "Blog", path: "/blog" }, { name: "About", path: "/about" }, { name: "Contact", path: "/contact" }].map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="relative transition duration-300 hover:text-yellow-500 cursor-pointer">
                    {item.name}
                  </Link>
                </li>
              ))}

              <li
                className="relative cursor-pointer"
                ref={shopRef}
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                <button
                  onClick={() => {
                    setShopOpen(!shopOpen);
                    setMenuOpen(false);
                  }}
                  className="relative transition duration-500 hover:text-yellow-500 uppercase cursor-pointer"
                >
                  Shop
                </button>

                {shopOpen && (
                  <ul className="absolute left-1/4 ml-[50px] transform -translate-x-1/2 mt-[12px] bg-black/90 text-white rounded-lg shadow-lg w-40 py-3 animate__animated animate__fadeIn">
                    <li>
                      <Link to="/shop" onClick={() => setShopOpen(false)} className="block px-4 py-2 text-gray-500 hover:text-white transition-colors duration-1000 cursor-pointer">
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link to="/SingleProduct" onClick={() => setShopOpen(false)} className="block px-4 py-2 hover:text-white transition-colors duration-300 text-gray-500 cursor-pointer">
                        Single Product
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" onClick={() => setShopOpen(false)} className="block px-4 py-2 hover:text-white transition-colors duration-300 text-gray-500 cursor-pointer">
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link to="/checkout" onClick={() => setShopOpen(false)} className="block px-4 py-2 hover:text-white transition-colors duration-300 text-gray-500 cursor-pointer">
                        Checkout
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            {isLoggedIn && (
              <Link to="/cart" className="relative flex items-center cursor-pointer animate__animated animate__fadeInRight">
                <ShoppingCart className="w-6 h-6 hover:text-yellow-500 transition-colors duration-300 cursor-pointer" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-yellow-500 text-xs font-semibold rounded-full px-1.5 cursor-pointer">
                    {cartCount}
                  </span>
                )}
              </Link>
            )}

            {!isLoggedIn ? (
              <Link to="/login" onClick={handleLoginNotify} className="relative overflow-hidden px-6 py-2 rounded-[4px] font-bold shadow-lg text-[15px] bg-green-500 text-white transition-all duration-500 hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-600 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-1000 cursor-pointer">
                <span className="relative z-10">Login</span>
              </Link>
            ) : (
              <button onClick={handleLogout} className="relative overflow-hidden px-6 py-2 rounded-xl font-bold shadow-lg bg-red-600 text-white transition-all duration-300 hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-500 before:to-red-700 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 cursor-pointer">
                <span className="relative z-10">Logout</span>
              </button>
            )}

            <button onClick={() => { setMenuOpen(!menuOpen); setShopOpen(false); }} className="md:hidden focus:outline-none cursor-pointer">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
}



