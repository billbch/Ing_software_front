import { Vaccination } from "../models/vaccination-form";
import request from "./api";

const apiVaccination = {
  list: () => request.get<Vaccination[]>("/v1/VaccinationRecord"),
  add: (data: Vaccination) => request.post("/v1/VaccinationRecord", data),
  edit: (data: Vaccination) => request.put(`/v1/VaccinationRecord/${data.id}`, data),
  delete: (id: number) => request.delete(`/v1/VaccinationRecord/${id}`),
  detail: (id: string) => request.get<Vaccination>(`/v1/VaccinationRecord/${id}`),
};
export default apiVaccination;
