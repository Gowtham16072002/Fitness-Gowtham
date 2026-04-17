const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./Routes/authRoute.js");
const homeContentRoutes = require("./Routes/homeContentRoute.js");
const uploadRoutes = require("./Routes/uploadRoute.js");
const programRoutes = require("./Routes/programRoutes.js");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api/home-content", homeContentRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/programs", programRoutes);

app.get("/", (req, res) => {
  res.send("Fitness backend is running");
});

app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

module.exports = app;
