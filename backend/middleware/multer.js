// middleware/multer.js
const multer = require("multer");
const path = require("path");

// تنظیمات ذخیره‌سازی فایل‌ها
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images"); // مسیر ذخیره تصاویر
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // نام فایل با timestamp
  },
});

// استفاده از multer برای آپلود چندین فایل
const upload = multer({ storage: storage });

module.exports = upload;
