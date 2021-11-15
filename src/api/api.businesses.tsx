import request from "./api";
import { Business }  from "../models/business";

const apiBusinesses = {
  list: () => request.get<Business[]>("/Business"),
  add: (data: Business) => request.post("/Business", data),
  edit: (data: Business) => request.put(`/Business/${data.id}`, data),
  delete: (id: number) => request.delete(`/Business/${id}`),
  detail: (id: string) => request.get<Business>(`/Business/${id}`),
};

export default apiBusinesses;
