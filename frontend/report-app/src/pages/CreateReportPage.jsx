import React, { useEffect } from "react";
import ReportForm from "../components/forms/ReportForm";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services/api";

const CreateReportPage = () => {
  const [options,setOptions] = useState([])
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    onSuccess: (data) => {
      // تبدیل داده‌ها به فرمت مورد نیاز React Select
      const formattedOptions = data.map((item) => ({
        value: item._id, // مقدار ID به‌عنوان `value`
        label: item.name, // نام دسته به‌عنوان `label`
      }));
      setOptions(formattedOptions);
    },
  });

  return (
    <div className="min-h-screen w-full bg-[url('./assets/images/_MG_8439.JPG')] bg-fixed bg-center bg-cover bg-gray-100 flex items-center justify-center p-6">
      <ReportForm reportTypes={options}/>
    </div>
  );
};

export default CreateReportPage;
