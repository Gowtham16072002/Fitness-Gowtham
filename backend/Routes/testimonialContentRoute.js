const express = require("express");
const router = express.Router();

const {
    getTestimonialContent,
    updateTestimonialContent,
} = require("../controllers/testimonialContentController");

const { protect, adminOnly } = require("../middleware/authMiddleware");
const { doubleCsrfProtection } = require("../utils/csrf");

router.get("/", getTestimonialContent);
router.put(
    "/",
    protect,
    adminOnly,
    doubleCsrfProtection,
    updateTestimonialContent
);

module.exports = router;