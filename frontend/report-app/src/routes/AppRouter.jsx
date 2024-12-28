import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CategoryReports from "../pages/CategoryReports";
import ReportDetail from "../pages/ReportDetail";
import CreateCategoryPage from "../pages/CreateCategoryPage";
import CreateReportPage from "../pages/CreateReportPage";
import Navbar from "../components/shared/Navbar";

const AppRouter = () => {
  console.log(1);
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryReports />} />
        <Route path="/report/:id" element={<ReportDetail />} />
        <Route path="/create-category" element={<CreateCategoryPage />} />
        <Route path="/create-report" element={<CreateReportPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
