import React from "react";
import { useParams } from "react-router-dom";

const ReportDetail = () => {
  const { id } = useParams();
  const report = {
    title: `گزارش ${id}`,
    description: "توضیحات کامل گزارش اینجاست.",
    images: ["https://via.placeholder.com/600x400", "https://via.placeholder.com/600x400"],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">{report.title}</h1>
      <p className="text-gray-600 text-center mb-6">{report.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {report.images.map((image, index) => (
          <img key={index} src={image} alt={`گزارش ${id} - تصویر ${index + 1}`} className="w-full rounded-lg shadow-md" />
        ))}
      </div>
    </div>
  );
};

export default ReportDetail;
