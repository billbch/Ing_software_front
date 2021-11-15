import { Customer } from "../models/customer";
import request from "./api";

const apiCustomers = {
  list: () => request.get<Customer[]>("/v1/PersonProfile"),
  add: (data: Customer) => request.post("/v1/PersonProfile", data),
  edit: (data: Customer) => request.put(`/v1/PersonProfile/${data.customerId}`, data),
  delete: (id: number) => request.delete(`/v1/PersonProfile/${id}`),
  detail: (id: string) => request.get<Customer>(`/v1/PersonProfile/${id}`),
};

export default apiCustomers;
