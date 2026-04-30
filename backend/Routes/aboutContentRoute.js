// const express = require("express");
// const {
//     getAboutContent,
//     updateAboutContent,
// } = require("../Controllers/aboutContentController");

// const { protect, adminOnly } = require("../middleware/authMiddleware");
// // const { doubleCsrfProtection } = require("../utils/csrfProtection");

// const router = express.Router();

// router.get("/", getAboutContent);

// router.put(
//     "/",
//     protect,
//     adminOnly,
//     // doubleCsrfProtection,
//     updateAboutContent
// );

// module.exports = router;



const express = require("express");
const router = express.Router();

const {
    getAboutContent,
    updateAboutContent,
} = require("../Controllers/aboutContentController");

const { protect, adminOnly } = require("../middleware/authMiddleware");
const { doubleCsrfProtection } = require("../utils/csrf");

router.get("/", getAboutContent);
router.put("/", protect, adminOnly, doubleCsrfProtection, updateAboutContent);

module.exports = router;