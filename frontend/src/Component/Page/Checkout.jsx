// import { Link } from "lucide-react";
// import React from "react";
// import checkoutbg from "../../assets/images/checkoutbg/checkoutbg.jpg"
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// const Checkout = () => {
//     return (
//         <div className="w-full bg-[#0b0b0b] text-white font-['Poppins']">

//             <div
//                 className="w-full h-[420px] flex flex-col items-center justify-center bg-center bg-cover"
//                 style={{
//                     backgroundImage: `url(${checkoutbg})`, 
//                 }}
//             >
//                 <h1 className="text-5xl font-light tracking-[0.25em]">CHECKOUT</h1>
//                 <p className="mt-4 text-sm text-gray-300 tracking-wider font-sans">
//                     <a href="/" className="hover:text-white transition">HOME</a>
//                     <span className="mx-1">/</span>
//                     CHECKOUT
//                 </p>
//             </div>

//             <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 py-20 px-6">

//                 <div className="lg:col-span-2 bg-[#111111] p-10 rounded-xl shadow-xl border border-[#1f1f1f]">
//                     <h2 className="text-2xl font-semibold mb-8 tracking-wide">BILLING DETAILS</h2>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <FormInput label="First Name" />
//                         <FormInput label="Last Name" />
//                         <SelectInput label="State / Country" />
//                         <div></div>

//                         <FormInput label="Street Address" className="md:col-span-2" />
//                         <FormInput label="Town / City" />
//                         <FormInput label="Postcode / ZIP *" />
//                         <FormInput label="Phone" />
//                         <FormInput label="Email Address" />
//                     </div>

//                     <div className="flex gap-6 mt-6 text-sm text-gray-300">
//                         <label><input type="checkbox" className="mr-2" /> Create an Account?</label>
//                         <label><input type="checkbox" className="mr-2" /> Ship to different address</label>
//                     </div>
//                 </div>

//                 <div className="space-y-10">

//                     <div className="bg-[#111111] p-6 rounded-xl border border-[#1f1f1f]">
//                         <h3 className="text-lg font-semibold mb-4 tracking-wide">CART TOTAL</h3>

//                         <SidebarRow label="Subtotal" value="$20.60" />
//                         <SidebarRow label="Delivery" value="$0.00" />
//                         <SidebarRow label="Discount" value="$3.00" />

//                         <hr className="border-gray-800 my-4" />

//                         <SidebarRow label="TOTAL" value="$17.60" highlight />
//                     </div>

//                     <div className="bg-[#111111] p-6 rounded-xl border border-[#1f1f1f]">
//                         <h3 className="text-lg font-semibold mb-4 tracking-wide">PAYMENT METHOD</h3>

//                         <Radio label="Direct Bank Transfer" />
//                         <Radio label="Esewa" />
//                         <Radio label="Paypal" />

//                         <label className="flex items-center gap-2 text-sm text-gray-300 mt-4">
//                             <input type="checkbox" /> I accept the terms and conditions
//                         </label>

//                         <button className="w-full bg-[#c9a46a] hover:bg-[#b18d57] text-black font-medium py-3 rounded-lg mt-6 transition-all tracking-wide">
//                             Place an order
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// const FormInput = ({ label, className }) => (
//     <div className={`flex flex-col space-y-2 ${className}`}>
//         <label className="text-sm tracking-wide text-gray-300">{label}</label>
//         <input
//             className="w-full px-4 py-3 bg-[#0d0d0d] border border-gray-700 rounded-lg text-gray-200
//                  focus:ring-1 focus:ring-[#c9a46a] outline-none shadow-inner"
//         />
//     </div>
// );

// const SelectInput = ({ label }) => (
//     <div className="flex flex-col space-y-2">
//         <label className="text-sm tracking-wide text-gray-300">{label}</label>
//         <select
//             className="w-full px-4 py-3 bg-[#0d0d0d] border border-gray-700 rounded-lg text-gray-300
//                  focus:ring-1 focus:ring-[#c9a46a] outline-none shadow-inner"
//         >
//             <option>France</option>
//             <option>Nepal</option>
//             <option>USA</option>
//         </select>
//     </div>
// );

// const SidebarRow = ({ label, value, highlight }) => (
//     <div className="flex justify-between py-2 text-sm">
//         <span className={`${highlight ? "font-semibold text-[#c9a46a]" : "text-gray-300"}`}>
//             {label}
//         </span>
//         <span className={`${highlight ? "font-semibold text-[#c9a46a]" : "text-gray-300"}`}>
//             {value}
//         </span>
//     </div>
// );

// const Radio = ({ label }) => (
//     <label className="block text-sm text-gray-300 mb-2">
//         <input type="radio" name="payment" className="mr-2" /> {label}
//     </label>
// );

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

// // ✅ Main About Page (All 6 Pages Combined)
// export default function AboutPage() {
//   return (
//     <div className="font-sans">
//         <Checkout/>
//       <Footer/>
//     </div>
//   );
// }

import { Link } from "lucide-react";
import React, { useState } from "react";
import checkoutbg from "../../assets/images/checkoutbg/checkoutbg.jpg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Checkout = () => {
  const subtotal = 20.6;
  const delivery = 0;
  const discount = 3;
  const totalUSD = subtotal - discount + delivery;
  const rate = 133;
  const totalNPR = (totalUSD * rate).toFixed(2);

  const handleEsewaCheckout = () => {
    const url = "https://esewa.com.np/epay/main";
    const form = document.createElement("form");
    form.method = "POST";
    form.action = url;

    const data = {
      amt: totalNPR,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: totalNPR,
      pid: "ORDER12345",
      scd: "EPAYTEST",
      su: "https://yourwebsite.com/success",
      fu: "https://yourwebsite.com/failed",
    };

    Object.keys(data).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = data[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="w-full bg-[#0b0b0b] text-white font-['Poppins']">
      <div
        className="w-full h-[420px] flex flex-col items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${checkoutbg})` }}
      >
        <h1 className="text-5xl font-light tracking-[0.25em]">CHECKOUT</h1>
        <p className="mt-4 text-sm text-gray-300 tracking-wider font-sans">
          <a href="/" className="hover:text-white transition">HOME</a>
          <span className="mx-1">/</span>
          CHECKOUT
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 py-20 px-6">
        <div className="lg:col-span-2 bg-[#111111] p-10 rounded-xl shadow-xl border border-[#1f1f1f]">
          <h2 className="text-2xl font-semibold mb-8 tracking-wide">BILLING DETAILS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput label="First Name" />
            <FormInput label="Last Name" />
            <SelectInput label="State / Country" />
            <div></div>
            <FormInput label="Street Address" className="md:col-span-2" />
            <FormInput label="Town / City" />
            <FormInput label="Postcode / ZIP *" />
            <FormInput label="Phone" />
            <FormInput label="Email Address" />
          </div>

          <div className="flex gap-6 mt-6 text-sm text-gray-300">
            <label><input type="checkbox" className="mr-2" /> Create an Account?</label>
            <label><input type="checkbox" className="mr-2" /> Ship to different address</label>
          </div>
        </div>

        <div className="space-y-10">
          <div className="bg-[#111111] p-6 rounded-xl border border-[#1f1f1f]">
            <h3 className="text-lg font-semibold mb-4 tracking-wide">CART TOTAL</h3>

            <SidebarRow label="Subtotal" value={`$${subtotal}`} />
            <SidebarRow label="Delivery" value={`$${delivery}`} />
            <SidebarRow label="Discount" value={`$${discount}`} />

            <hr className="border-gray-800 my-4" />

            <SidebarRow label="TOTAL (USD)" value={`$${totalUSD.toFixed(2)}`} highlight />
            <SidebarRow label="TOTAL (NPR)" value={`Rs. ${totalNPR}`} highlight />
          </div>

          <div className="bg-[#111111] p-6 rounded-xl border border-[#1f1f1f]">
            <h3 className="text-lg font-semibold mb-4 tracking-wide">PAYMENT METHOD</h3>

            <Radio label="Direct Bank Transfer" />
            <Radio label="Esewa" />
            <Radio label="Paypal" />

            <label className="flex items-center gap-2 text-sm text-gray-300 mt-4">
              <input type="checkbox" /> I accept the terms and conditions
            </label>

            <button
              onClick={handleEsewaCheckout}
              className="w-full bg-[#c9a46a] hover:bg-[#b18d57] text-black font-medium py-3 rounded-lg mt-6 transition-all tracking-wide"
            >
              Pay with Esewa (Rs. {totalNPR})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormInput = ({ label, className }) => (
  <div className={`flex flex-col space-y-2 ${className}`}>
    <label className="text-sm tracking-wide text-gray-300">{label}</label>
    <input className="w-full px-4 py-3 bg-[#0d0d0d] border border-gray-700 rounded-lg text-gray-200 focus:ring-1 focus:ring-[#c9a46a] outline-none shadow-inner" />
  </div>
);

const SelectInput = ({ label }) => (
  <div className="flex flex-col space-y-2">
    <label className="text-sm tracking-wide text-gray-300">{label}</label>
    <select className="w-full px-4 py-3 bg-[#0d0d0d] border border-gray-700 rounded-lg text-gray-300 focus:ring-1 focus:ring-[#c9a46a] outline-none shadow-inner">
      <option>France</option>
      <option>Nepal</option>
      <option>USA</option>
    </select>
  </div>
);

const SidebarRow = ({ label, value, highlight }) => (
  <div className="flex justify-between py-2 text-sm">
    <span className={highlight ? "font-semibold text-[#c9a46a]" : "text-gray-300"}>
      {label}
    </span>
    <span className={highlight ? "font-semibold text-[#c9a46a]" : "text-gray-300"}>
      {value}
    </span>
  </div>
);

const Radio = ({ label }) => (
  <label className="block text-sm text-gray-300 mb-2">
    <input type="radio" name="payment" className="mr-2" /> {label}
  </label>
);

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 px-8 md:px-20">
      <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div>
          <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">About Us</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Brewing passion and flavor, we serve quality coffee in a cozy space, creating moments of warmth, connection, and joy.
          </p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"><FaTwitter /></a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"><FaFacebookF /></a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"><FaInstagram /></a>
          </div>
        </div>

        <div>
          <h3 className="text-white uppercase font-semibold mb-4 tracking-wide">Recent Blog</h3>

          <div className="flex items-start mb-4">
            <img src="https://vps029.manageserver.in/menu/wp-content/uploads/2024/01/images-8-1.jpeg" className="w-16 h-16 object-cover mr-4" />
            <div>
              <p className="font-medium text-white text-sm">Even the all-powerful Pointing has no control about</p>
              <p className="text-xs text-gray-500 mt-1">Sept 15, 2018 • Admin • 19</p>
            </div>
          </div>

          <div className="flex items-start">
            <img src="https://img.goodfon.com/wallpaper/big/e/cf/food-cofee-cooky.webp" className="w-16 h-16 object-cover mr-4" />
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
            <li>
              <span className="block">Tinkune,</span>
              <span>Tinkune-32, Kathmandu, Nepal</span>
            </li>
            <li>+977- 9823478567</li>
            <li>coffeeblend@gmail.com</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6">
        Copyright ©2025 All rights reserved | CofeeBlend |
      </p>
    </footer>
  );
}

export default function AboutPage() {
  return (
    <div className="font-sans">
      <Checkout />
      <Footer />
    </div>
  );
}
