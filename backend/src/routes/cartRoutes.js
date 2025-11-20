const express = require("express");

const Cart= require("../models/Cart");

const router = express.Router();

router.get("/:userId", async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  if (!cart) return res.json({ items: [] });
  res.json(cart);
});

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

