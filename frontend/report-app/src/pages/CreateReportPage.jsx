import React, { useEffect } from "react";
import ReportForm from "../components/forms/ReportForm";
import { useState } from "react";
import axios from "axios";

const CreateReportPage = () => {
  const [options,setOptions] = useState([])
  useEffect(() => {
    const fetchApi = async () => {
    //   const response = await axios.get(
    //     API_BASE_URL + "/reports/category/" + params.id
    //   );
    //   setData(response.data);
        //  const response = await axios.get(`${API_BASE_URL}/categories`)
        //  console.log(response.data);
        //  setOptions(response.data)
         
    };
    fetchApi();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <ReportForm />
    </div>
  );
};

export default CreateReportPage;
