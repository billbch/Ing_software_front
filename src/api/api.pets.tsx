import requet from "./api";
import { Pet }  from "../models/pet";

const apiPets = {
  list: () => request.get<Pet[]>("/Pet"),
  add: (data: Pet) => request.post("/Pet", data),
  edit: (data: Pet) => request.put(`/Pet/${data.id}`, data),
  delete: (id: number) => request.delete(`/Pet/${id}`),
  detail: (id: string) => request.get<Pet>(`/Pet/${id}`),
};

export default apiPets;
