// controllers/categoryController.js
const Category = require('../models/Category');

// ایجاد دسته‌بندی جدید
exports.createCategory = async (req, res) => {
  console.log("1:", {body:req.body});
  const name = req.body.categoryName; 
  console.log("2:", {name, description:req.body.description});
  const data = {
    name,
    description: req.body.description
  }
  console.log("3", data);
  
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
