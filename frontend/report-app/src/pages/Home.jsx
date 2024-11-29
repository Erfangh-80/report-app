import React from "react";
import CategoryCard from "../components/CategoryCard";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services/api";
import { FadeLoader } from "react-spinners";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading   ) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-40 h-40" >
        <FadeLoader
          color="#2291aadb"
          height={15}
          width={5}
          radius={2}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">مدیریت گزارش‌ها</h1>
        <p className="text-lg">
          مدیریت دسته‌بندی‌ها و گزارش‌های خود را به راحتی انجام دهید.
        </p>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          دسته‌بندی‌ها
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((category) => (
            <CategoryCard
              key={category._id}
              name={category.name}
              description={category.description}
              id={category._id}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
