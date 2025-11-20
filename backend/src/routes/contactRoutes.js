const express = require("express");
const router = express.Router();
const { createContact, updateContact, getContacts } = require("../controllers/contactController");

router.post("/", createContact);
router.put("/:id", updateContact);
router.get("/", getContacts);

module.exports = router;
