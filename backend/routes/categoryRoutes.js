// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const { createCategory, getCategories } = require('../controllers/categoryController');

// ایجاد دسته‌بندی جدید
router.post('/', createCategory);

// دریافت همه دسته‌بندی‌ها
router.get('/', getCategories);

module.exports = router;
