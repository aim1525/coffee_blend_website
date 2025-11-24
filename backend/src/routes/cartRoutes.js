const express = require("express");

const Cart= require("../models/Cart");

const router = express.Router();

const { getCart, addToCart, removeFromCart } = require("../controllers/cartController");


router.get("/:userId", async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  if (!cart) return res.json({ items: [] });
  res.json(cart);
});


router.get("/:userId", getCart);

router.post("/add", addToCart);
router.post("/remove", removeFromCart);

router.post("/:userId", async (req, res) => {
  const { items } = req.body;
  let cart = await Cart.findOne({ userId: req.params.userId });

  if (!cart) {
    cart = new Cart({ userId: req.params.userId, items });
  } else {
    cart.items = items;
  }

  await cart.save();
  res.json(cart);
});

module.exports = router;

