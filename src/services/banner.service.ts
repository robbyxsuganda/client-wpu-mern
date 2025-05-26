import instance from "@/libs/axios/instance";
import { IBanner } from "@/types/Banner";
import endpoint from "./endpoint.constans";

const bannerServices = {
  getBanners: (params?: string) => instance.get(`${endpoint.BANNER}?${params}`),
  getBannerById: (id: string) => instance.get(`${endpoint.BANNER}/${id}`),
  addBanner: (payload: IBanner) => instance.post(endpoint.BANNER, payload),
  deleteBanner: (id: string) => instance.delete(`${endpoint.BANNER}/${id}`),
  updateBanner: (id: string, payload: IBanner) =>
    instance.put(`${endpoint.BANNER}/${id}`, payload),
};

export default bannerServices;
