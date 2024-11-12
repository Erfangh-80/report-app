// routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const { createReport, getReportsByCategory, getReport } = require('../controllers/reportController');

// ایجاد گزارش جدید با آپلود چند تصویر
router.post('/', upload.array('images', 5), createReport);

// دریافت گزارش‌های مربوط به یک دسته‌بندی خاص
router.get('/category/:categoryId', getReportsByCategory);

// دریافت جزئیات یک گزارش
router.get('/:reportId', getReport);

module.exports = router;
