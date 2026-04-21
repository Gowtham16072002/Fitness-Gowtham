const express = require("express");
const router = express.Router();

const { getHomeContent, updateHomeContent } = require("../controllers/homeContentController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const { doubleCsrfProtection } = require("../utils/csrf");

router.get("/", getHomeContent);
router.put("/", protect, adminOnly, doubleCsrfProtection, updateHomeContent);

module.exports = router;