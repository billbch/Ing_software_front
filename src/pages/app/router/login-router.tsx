import React from "react";
import { Route } from "react-router-dom";
import LoginForm from "../../login/login-form";

function LoingRouter() {
  return (
    <React.Fragment>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={LoginForm} />
    </React.Fragment>
  );
}
export default LoingRouter;
