import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import axios from "axios";
const API_BASE_URL = "http://localhost:3000/api";

const Home = () => {
  const categories = [
    { id: 1, name: "دسته ۱", description: "توضیح کوتاه دسته ۱", link: "/category/1" },
    { id: 2, name: "دسته ۲", description: "توضیح کوتاه دسته ۲", link: "/category/2" },
    { id: 3, name: "دسته ۳", description: "توضیح کوتاه دسته ۳", link: "/category/3" },
  ];
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(API_BASE_URL+"/categories")
      console.log(data);
      setData(data.data)
    }
    fetchData()
  },[])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">مدیریت گزارش‌ها</h1>
        <p className="text-lg">مدیریت دسته‌بندی‌ها و گزارش‌های خود را به راحتی انجام دهید.</p>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">دسته‌بندی‌ها</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              description={category.description}
              link={category.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
