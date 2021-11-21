import { Login } from "../models/login-form";
import { Response_login } from "../models/response_login";
import request from "./api";

const apiAppointment = {

  add: (data: Login) => request.post<Response_login>(`/v1/Users/authenticate`, data),
};

export default apiAppointment;


