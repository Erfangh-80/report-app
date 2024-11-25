import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";
const CreateReportPage = () => {
  const [title, setTitle] = useState("");
  const [reportType, setReportType] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  // Mutation برای ارسال داده‌ها به سمت سرور
  const mutation = useMutation(
    async (formData) => {
      const response = await axios.post(`${API_BASE_URL}/reports`, formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    },
    {
      onSuccess: () => {
        toast.success("گزارش با موفقیت ذخیره شد!");
        // ریست فرم پس از ذخیره موفقیت‌آمیز
        setTitle("");
        setReportType("");
        setDescription("");
        setImages([]);
      },
      onError: () => {
        toast.error("خطا در ذخیره گزارش. لطفاً دوباره تلاش کنید.");
      },
    }
  );

  // آپلود تصاویر
  const handleImageUpload = (e) => {
    const uploadedImages = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...uploadedImages]);
  };

  // ارسال فرم
  const handleSubmit = (e) => {
    e.preventDefault();

    // آماده‌سازی داده‌ها برای ارسال
    const formData = new FormData();
    formData.append("title", title);
    formData.append("reportType", reportType);
    formData.append("description", description);
    images.forEach((image, index) => formData.append(`images[${index}]`, image));
    console.log(formData);
    
    mutation.mutate(formData); // ارسال درخواست
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl lg:max-w-4xl"
      >
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
          ایجاد گزارش جدید
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* عنوان گزارش */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              عنوان گزارش
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="عنوان گزارش را وارد کنید"
              required
            />
          </div>
          {/* نوع گزارش */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              نوع گزارش
            </label>
            <input
              type="text"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="نوع گزارش را وارد کنید"
              required
            />
          </div>
        </div>
        {/* توضیحات */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            توضیحات
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="توضیحات گزارش را وارد کنید"
            rows={5}
            required
          />
        </div>
        {/* آپلود تصاویر */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            آپلود تصاویر
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded Preview ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
        {/* دکمه ذخیره */}
        <button
          type="submit"
          disabled={mutation.isLoading}
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg ${
            mutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {mutation.isLoading ? "در حال ذخیره..." : "ذخیره گزارش"}
        </button>
      </form>
    </div>
  );
};

export default CreateReportPage;
