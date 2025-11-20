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



import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const checkLogin = localStorage.getItem("isLoggedIn");
    if (checkLogin === "true") {
      setIsLoggedIn(true);
      fetchCart();
    } else {
      toast.info("🔒 Please login first", { position: "top-right" });
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

  const saveCart = async (updated) => {
    setCartItems(updated);
    await axios.post(`http://localhost:5000/api/cart/${userId}`, { items: updated });
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    const updated = cartItems.map((item) => (item.id === id ? { ...item, quantity: qty } : item));
    saveCart(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    saveCart(updated);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="bg-white p-4 rounded shadow">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 border-b">
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div>${item.price.toFixed(2)}</div>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span className="mx-3">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <div>${(item.price * item.quantity).toFixed(2)}</div>
              <button className="text-red-500" onClick={() => removeItem(item.id)}>×</button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 bg-white p-4 shadow rounded">
        <h2 className="text-xl font-bold">Total: ${subtotal.toFixed(2)}</h2>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;

