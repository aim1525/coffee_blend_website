// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const authRoutes = require("./routes/authRoutes");
// const cartRoutes = require("./routes/cartRoutes");
// const contactRoutes = require("./routes/contactRoutes");



// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/contact", contactRoutes);


// app.get("/", (req, res) => res.send("Backend running..."));

// app.use("/api/cart", cartRoutes);

// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error(err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require("express");
const bookingRoutes = require('./routes/bookingRoutes');

const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', bookingRoutes);


app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => res.send("Backend running..."));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

