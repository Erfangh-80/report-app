import React, { useState } from "react";

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // ارسال داده‌ها به سرور
    console.log("نام دسته‌بندی:", categoryName);
    setCategoryName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">ایجاد دسته‌بندی</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          نام دسته‌بندی
        </label>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        ایجاد دسته‌بندی
      </button>
    </form>
  );
};

export default CategoryForm;
