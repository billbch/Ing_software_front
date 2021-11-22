import React from "react";
import { Route } from "react-router-dom";
import RegisterForm from "../../register/register-form";

function RegisterRouter() {
  return (
    <React.Fragment>
      <Route exact path="/register" component={RegisterForm} />
    </React.Fragment>
  );
}
export default RegisterRouter;
