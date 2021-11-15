import React from "react";
import { Route } from "react-router-dom";
import AppointmentForm from "../../appointment/appointment-form"
import AppointmentList from "../../appointment/appointment-list";
import AppointmentDetails from "../../appointment/appointment-details"

function AppointmentRouter() {
  return (
    <React.Fragment>
      <Route exact path={`/appointment/list`} component={AppointmentList} />
      <Route exact path={`/appointment/add/`} component={AppointmentForm} />
      <Route exact path="/appointment/edit/:id" component={AppointmentForm} />
      <Route exact path="/appointment/detail/:id" component={AppointmentDetails} />
    </React.Fragment>
  );
}

export default AppointmentRouter;
