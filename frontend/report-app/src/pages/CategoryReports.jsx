import React from "react";
import ReportCard from "../components/ReportCard";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchReportsByCategory } from "../services/api";


const ReportsListPage = () => {
  const params = useParams();

  const {data} = useQuery({
    queryKey:["reportsByCategory"],
    queryFn: () => fetchReportsByCategory(params.id)
  })

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        گزارش‌ها
      </h1>
      <div className="flex flex-nowrap gap-6">
        {data?.map((report) => (
          <ReportCard
            key={report._id}
            title={report.title}
            imageUrl={report.images[0]}
            id={report._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ReportsListPage;
