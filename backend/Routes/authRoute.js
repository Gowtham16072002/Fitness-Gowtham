const express = require("express");
const {
  login,
  signUp,
  logout,
  profile,
} = require("../Controllers/authController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const {
  generateCsrfToken,
  doubleCsrfProtection,
} = require("../utils/csrf");

const authRoutes = express.Router();

// Auth routes
authRoutes.post("/login", login);
authRoutes.post("/signup", signUp);

// CSRF token route
authRoutes.get("/csrf-token", (req, res) => {
  const csrfToken = generateCsrfToken(req, res);

  return res.status(200).json({
    success: true,
    csrfToken,
  });
});

// Protected routes
authRoutes.get("/profile", protect, profile);

// Protect logout with CSRF
authRoutes.post("/logout", protect, doubleCsrfProtection, logout);

// Admin test route
authRoutes.get("/admin-test", protect, adminOnly, (req, res) => {
  res.json({
    success: true,
    message: "Admin access granted",
    user: req.user,
  });
});

module.exports = authRoutes;