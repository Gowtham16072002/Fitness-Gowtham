const express = require("express");
const router = express.Router();

const { getDashboardOverview } = require("../Controllers/dashboardController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/", protect, adminOnly, getDashboardOverview);

module.exports = router;