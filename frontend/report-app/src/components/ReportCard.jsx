import React from "react";
import { Link } from "react-router-dom";

const ReportCard = ({ title, imageUrl, id }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={`http://localhost:3000/${imageUrl}`}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex justify-between flex-col">
        <Link to={`/report/${id}`} className="text-sm text-gray-500">
          <h3 className="text-lg font-semibold">{title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default ReportCard;
