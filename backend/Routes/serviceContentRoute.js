const express = require("express");
const router = express.Router();

const {
    getServiceContent,
    updateServiceContent,
} = require("../Controllers/serviceContentController");

const { protect, adminOnly } = require("../middleware/authMiddleware");
const { doubleCsrfProtection } = require("../utils/csrf");

router.get("/", getServiceContent);
router.put("/", protect, adminOnly, doubleCsrfProtection, updateServiceContent);

module.exports = router;