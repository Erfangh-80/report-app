import { http } from "./httpServices";

export const fetchCategories = async () => {
  const response = await http.get(`/categories`);
  return response.data;
};

export const fetchReportsByCategory = async (categoryId) => {
  const response = await http.get(`/reports/category/${categoryId}`);
  return response.data;
};

export const fetchReportDetails = async (reportId) => {
  const response = await http.get(`/reports/${reportId}`);
  return response.data;
};

export const createReport = async (data) => {
  const response = await http.post(`/reports`, data, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};
