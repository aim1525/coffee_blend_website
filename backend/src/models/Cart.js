const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: String,
  items: [
    {
      id: Number,
      name: String,
      description: String,
      price: Number,
      quantity: Number
    }
  ]
});

module.exports = mongoose.model("Cart", CartSchema);
