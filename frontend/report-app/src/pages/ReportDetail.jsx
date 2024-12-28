import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchReportDetails } from "../services/api";

const ReportDetail = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["reportDetail"],
    queryFn: () => fetchReportDetails(id),
  });

  return (
    <div className="min-h-screen bg-[url('./assets/images/_MG_8439.JPG')] bg-center bg-cover bg-fixed bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">{data?.title}</h1>
      <p className="text-gray-600 text-center mb-6">{data?.description}</p>
      <div className="flex justify-center flex-wrap gap-4">
        {data?.images?.map((image, index) => (
          <img
            key={index}
            src={`http://localhost:3000/${image}`}
            alt={`گزارش ${id} - تصویر ${index + 1}`}
            className="w-3/6 rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default ReportDetail;
