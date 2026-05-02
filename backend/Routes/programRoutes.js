const express = require("express");
const router = express.Router();

const { protect, adminOnly } = require("../middleware/authMiddleware");
const { doubleCsrfProtection } = require("../utils/csrf");
const {
  getPrograms,
  savePrograms,
} = require("../Controllers/programController");

// router.get("/", protect, getPrograms);
router.get("/", getPrograms);
router.post("/", protect, adminOnly, doubleCsrfProtection, savePrograms);

module.exports = router;