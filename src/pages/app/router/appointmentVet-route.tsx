import React from "react";
import { Route } from "react-router-dom";
import AppointmentVetList from "../../appointmentVet/appointmentVet-list";
import AppointmentVetDetails from "../../appointmentVet/appointmentVet-details"
import AppointmentVetForm from "../../appointmentVet/appointmentVet-form";
function AppointmentVetRouter() {
  return (
    <React.Fragment>
      <Route exact path="/appointmentVet/list" component={AppointmentVetList} />
      <Route exact path="/appointmentVet/add" component={AppointmentVetForm} />
      <Route exact path="/appointmentVet/edit/:id" component={AppointmentVetForm} />
      <Route exact path="/appointmentVet/detail/:id" component={AppointmentVetDetails} />
    </React.Fragment>
  );
}

export default AppointmentVetRouter;