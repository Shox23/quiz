import apiInstance from "../instance";

export const fetchCategories = async () => {
  return await apiInstance.get("/api_category.php");
};
