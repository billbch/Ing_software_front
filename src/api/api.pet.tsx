import request from "./api";
import { Pet }  from "../models/pet-form";

const apiPet = {
  list: () => request.get<Pet[]>("/Pet"),
  add: (data: Pet) => request.post("/Pet", data),
  edit: (data: Pet) => request.put(`/Pet/${data.id}`, data),
  delete: (id: number) => request.delete(`/Pet/${id}`),
  detail: (id: string) => request.get<Pet>(`/Pet/${id}`),
};

export default apiPet;
