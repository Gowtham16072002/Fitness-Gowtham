const express = require("express");
const multer = require("multer");
const { uploadImage } = require("../Controllers/uploadController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const { doubleCsrfProtection } = require("../utils/csrf");

const router = express.Router();

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, JPEG, PNG, and WEBP files are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post(
  "/",
  protect,
  adminOnly,
  doubleCsrfProtection,
  (req, res, next) => {
    upload.single("image")(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({
            success: false,
            message: "Image size must be less than 5MB",
          });
        }

        return res.status(400).json({
          success: false,
          message: err.message || "File upload error",
        });
      }

      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message || "Invalid file upload",
        });
      }

      next();
    });
  },
  uploadImage
);

module.exports = router;