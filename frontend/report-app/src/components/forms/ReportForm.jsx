import React, { useState } from "react";

const CreateReportPage = () => {
  const [title, setTitle] = useState("");
  const [reportType, setReportType] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const uploadedImages = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prevImages) => [...prevImages, ...uploadedImages]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, reportType, description, images });
    setTitle("");
    setReportType("");
    setDescription("");
    setImages([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
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
                  src={image}
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
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg"
        >
          ذخیره گزارش
        </button>
      </form>
    </div>
  );
};

export default CreateReportPage;
