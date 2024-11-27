// app.js
const express = require("express");
const mongoose = require("mongoose");
const categoryRoutes = require("./routes/categoryRoutes");
const reportRoutes = require("./routes/reportRoutes");
const path = require("path");
const dotenv = require("dotenv");
const fs = require("fs"); // افزودن ماژول fs
const { dirname } = require("path"); // افزودن ماژول path
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());

// مسیر پوشه برای ذخیره تصاویر
const uploadDir = path.join(__dirname, "uploads/images");

// ایجاد پوشه در صورت عدم وجود
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/reports", reportRoutes);

module.exports = app;
