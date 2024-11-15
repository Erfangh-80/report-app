import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          مدیریت گزارش‌ها
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">
            خانه
          </Link>
          <Link to="/create-category" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">
            ایجاد دسته‌بندی
          </Link>
          <Link to="/create-report" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">
            ایجاد گزارش
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
