// const mongoose = require("mongoose");

// const CartSchema = new mongoose.Schema({
//   userId: { type: String, required: true, unique: true },
//   items: [
//     {
//       id: String,
//       name: String,
//       price: Number,
//       quantity: Number,
//       img: String,
//       description: String,
//     },
//   ],
// });

// module.exports = mongoose.model("Cart", CartSchema);


const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      id: String,
      name: String,
      price: Number,
      quantity: Number,
      img: String,
      description: String,
    },
  ],
});

module.exports = mongoose.model("Cart", CartSchema);
