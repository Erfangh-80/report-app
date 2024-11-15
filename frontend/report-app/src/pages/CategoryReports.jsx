import React from "react";
import ReportCard from "../components/ReportCard";

const ReportsListPage = () => {
  const reports = [
    { id: 1, title: "گزارش ۱", imageUrl: "https://via.placeholder.com/300" },
    { id: 2, title: "گزارش ۲", imageUrl: "https://via.placeholder.com/300" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        گزارش‌ها
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <ReportCard
            key={report.id}
            title={report.title}
            imageUrl={report.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ReportsListPage;
