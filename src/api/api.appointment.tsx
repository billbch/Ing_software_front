import { Appointment } from "../models/appointment-form";
import request from "./api";

const apiAppointment = {
  list: () => request.get<Appointment[]>("/Appointment"),
  add: (data: Appointment) => request.post(`/Appointment/`, data),
  edit: (data: Appointment) => request.put(`/Appointment/${data.id}`, data),
  delete: (id: number) => request.delete(`/Appointment/${id}`),
  detail: (id: string) => request.get<Appointment>(`/Appointment/${id}`),
};

export default apiAppointment;


