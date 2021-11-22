import { RegisterPP } from "../models/register-pp-form";
import request from "./api";

const apiRegister = {
  add: (data: RegisterPP) => request.post(`v1/PersonProfile`, data),
};

export default apiRegister;


