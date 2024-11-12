// controllers/reportController.js
const Report = require("../models/Report");

// ایجاد گزارش جدید
exports.createReport = async (req, res) => {
  try {
    const { title, description, categoryId } = req.body;
    const images = req.files?.map((file) => file.path);

    const report = new Report({
      title,
      description,
      categoryId,
      images,
    });

    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// دریافت گزارش‌های مربوط به یک دسته‌بندی خاص
exports.getReportsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const reports = await Report.find({ category: categoryId }).populate(
      "category",
      "name"
    );
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// دریافت جزئیات یک گزارش
exports.getReport = async (req, res) => {
  try {
    const { reportId } = req.params;
    console.log("reportId", reportId);

    const report = await Report.findById(reportId).populate("category", "name");
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
