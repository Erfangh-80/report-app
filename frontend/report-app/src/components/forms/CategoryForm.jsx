import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const API_BASE_URL = "http://localhost:3000/api";
const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState("");

  const mutation = useMutation(
    async (newCategory) => {
      const response = await axios.post(
        `${API_BASE_URL}/categories`,
        newCategory,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    },
    {
      onSuccess: () => {
        toast.success("دسته‌بندی با موفقیت ایجاد شد!");
        setCategoryName(""); // بازنشانی فرم
      },
      onError: (error) => {
        toast.error(
          `خطا در ایجاد دسته‌بندی: ${
            error.response?.data?.message || error.message
          }`
        );
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryName.trim()) {
      toast.error("نام دسته‌بندی نمی‌تواند خالی باشد.");
      return;
    }
    mutation.mutate({ categoryName, description: "" });
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md bg-white w-1/4 shadow-md rounded-lg p-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        ایجاد دسته‌بندی
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          نام دسته‌بندی
        </label>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="w-full p-2 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      {mutation.isLoading ? (
        <BeatLoader color="#2291aadb" />
      ) : (
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          ایجاد دسته‌بندی
        </button>
      )}
    </form>
  );
};

export default CategoryForm;
