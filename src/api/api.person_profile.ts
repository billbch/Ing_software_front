import { Person_profile } from "../models/personprofile-for";
import request from "./api";

const apiPersonprofile = {
  list: () => request.get<Person_profile[]>("/v1/PersonProfile"),
  add: (data: Person_profile) => request.post("/v1/PersonProfile", data),
  edit: (data: Person_profile) => request.put(`/v1/PersonProfile/${data.id}`, data),
  delete: (id: number) => request.delete(`/v1/PersonProfile/${id}`),
  detail: (id: string) => request.get<Person_profile>(`/v1/PersonProfile/${id}`),
};

export default apiPersonprofile;
