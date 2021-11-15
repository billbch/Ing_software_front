import request from "./api";
import { Business }  from "../models/business";

const apiBusinesses = {
  list: () => request.get<Business[]>("/v1/Business"),
  add: (data: Business) => request.post("/v1/Business", data),
  edit: (data: Business) => request.put(`/v1/Business/${data.id}`, data),
  delete: (id: number) => request.delete(`/v1/Business/${id}`),
  detail: (id: string) => request.get<Business>(`/v1/Business/${id}`),
};

export default apiBusinesses;
