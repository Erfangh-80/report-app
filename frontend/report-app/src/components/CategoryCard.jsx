import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ name, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 text-blue-500 p-3 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 21h4.5m-2.25-3v3M7.5 3.75L3.75 9h4.5l-3.75 6h4.5l-3.75 6h4.5L9.75 3h4.5l-3.75 6h4.5L14.25 3h4.5L15 9h4.5L15 15h4.5l-3.75 6h4.5"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <Link
        to={link}
        className="text-blue-500 hover:text-blue-700 font-medium text-sm"
      >
        مشاهده
      </Link>
    </div>
  );
};

export default CategoryCard;
