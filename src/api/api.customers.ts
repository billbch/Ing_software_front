import { Customer } from "../models/customer";
import request from "./api";

const apiCustomers = {
  list: () => request.get<Customer[]>("/PersonProfile"),
  add: (data: Customer) => request.post("/PersonProfile", data),
  edit: (data: Customer) => request.put(`/PersonProfile/${data.customerId}`, data),
  delete: (id: number) => request.delete(`/PersonProfile/${id}`),
  detail: (id: string) => request.get<Customer>(`/PersonProfile/${id}`),
};

export default apiCustomers;
