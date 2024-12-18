// controllers/categoryController.js
const Category = require('../models/Category');

// ایجاد دسته‌بندی جدید
exports.createCategory = async (req, res) => {
  const data = {
    name: req.body.categoryName,
    description: req.body.description
  }
  
  try {
    const category = new Category(data);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// دریافت تمامی دسته‌بندی‌ها
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
