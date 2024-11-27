// controllers/reportController.js
const Report = require("../models/Report");

exports.createReport = async (req, res) => {
  try {
    const { title, description, reportType } = req.body;
    const images = req.files?.map((file) => file.path); // دریافت مسیر تصاویر

    // ایجاد گزارش جدید
    const report = new Report({
      title,
      description,
      category: reportType,
      images,
    });

    await report.save(); // ذخیره گزارش در پایگاه داده
    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getReportsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const reports = await Report.find({ category: categoryId }).populate("category", "name");
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getReport = async (req, res) => {
  try {
    const { reportId } = req.params;
    const report = await Report.findById(reportId).populate("category", "name");
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
