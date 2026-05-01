const express = require("express");
const router = express.Router();

const {
    getTrainerContent,
    updateTrainerContent,
} = require("../controllers/trainerContentController");

const { protect, adminOnly } = require("../middleware/authMiddleware");
const { doubleCsrfProtection } = require("../utils/csrf");

router.get("/", getTrainerContent);
router.put("/", protect, adminOnly, doubleCsrfProtection, updateTrainerContent);

module.exports = router;