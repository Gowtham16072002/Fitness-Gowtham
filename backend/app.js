const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const enforceHTTPS = require("./middleware/httpsMiddleware");
const aboutContentRoute = require("./Routes/aboutContentRoute");
const dashboardRoute = require("./Routes/dashboardRoute");
const authRoutes = require("./Routes/authRoute.js");
const homeContentRoutes = require("./Routes/homeContentRoute.js");
const uploadRoutes = require("./Routes/uploadRoute.js");
const programRoutes = require("./Routes/programRoutes.js");
const trainerContentRoute = require("./Routes/trainerContentRoute");
const testimonialContentRoute = require("./Routes/testimonialContentRoute");
const serviceContentRoute = require("./Routes/serviceContentRoute");

const app = express();


app.use(enforceHTTPS);

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api/home-content", homeContentRoutes);
app.use("/api/about-content", aboutContentRoute);
app.use("/api/service-content", serviceContentRoute);
app.use("/api/trainer-content", trainerContentRoute);
app.use("/api/testimonial-content", testimonialContentRoute); 
app.use("/api/upload", uploadRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/admin/dashboard", dashboardRoute);

app.get("/", (req, res) => {
  res.send("Fitness backend is running");
});

app.use((err, req, res, next) => {
  if (err && err.code === "EBADCSRFTOKEN") {
    return res.status(403).json({
      success: false,
      message: "Invalid CSRF token",
    });
  }

  if (process.env.NODE_ENV !== "production") {
    console.error("Server Error:", err.message);
  }

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

module.exports = app;