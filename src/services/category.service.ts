import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constans";
import { ICategory } from "@/types/Category";

const categoryServices = {
  getCategories: (params?: string) =>
    instance.get(`${endpoint.CATEGORY}?${params}`),
  getCategoryById: (id: string) => instance.get(`${endpoint.CATEGORY}/${id}`),
  addCategory: (payload: ICategory) =>
    instance.post(`${endpoint.CATEGORY}`, payload),
  deleteCategory: (id: string) => instance.delete(`${endpoint.CATEGORY}/${id}`),
};

export default categoryServices;
