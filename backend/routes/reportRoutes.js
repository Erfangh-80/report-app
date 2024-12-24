// routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer'); // استفاده از middleware برای آپلود تصاویر
const { createReport, getReportsByCategory, getReport } = require('../controllers/reportController');

// ایجاد گزارش جدید با آپلود تصاویر
router.post('/', upload.array('images', 80), createReport); // حداکثر 80تصویر

// دریافت گزارش‌های مربوط به یک دسته‌بندی خاص
router.get('/category/:categoryId', getReportsByCategory);

// دریافت جزئیات یک گزارش
router.get('/:reportId', getReport);

module.exports = router;
