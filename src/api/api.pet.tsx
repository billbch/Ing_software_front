import { Pet } from "../models/pet-form";
import { Petcreate } from "../models/pet-form-create";
import request from "./api";

const apiPet = {
  list: () => request.get<Pet[]>("/v1/Pet"),
  add: (data: Petcreate) => request.post(`/v1/Pet`, data),
  edit: (data: Pet) => request.put(`/v1/Pet/${data.id}`, data),
  delete: (id: number) => request.delete(`/v1/Pet/${id}`),
  detail: (id: string) => request.get<Pet>(`/v1/Pet/${id}`),
};
export default apiPet;
