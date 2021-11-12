import React from "react";
import { Route } from "react-router-dom";
import PetForm from "../../pet/pet-form"
import PetList from "../../pet/pet-list";
import PetDetails from "../../pet/pet-details"
function PetRouter() {
  return (
    <React.Fragment>
      <Route exact path="/pet/list" component={PetList} />
      <Route exact path="/pet/add" component={PetForm} />
      <Route exact path="/pet/edit/:id" component={PetForm} />
      <Route exact path="/pet/detail/:id" component={PetDetails} />
    </React.Fragment>
  );
}

export default PetRouter;
