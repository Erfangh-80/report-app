import React from "react";
import Image from "../assets/image.webp"

const ReportCard = ({ title, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={Image}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">برای مشاهده جزئیات کلیک کنید.</p>
      </div>
    </div>
  );
};

export default ReportCard;
