import React from "react";
import { Route } from "react-router-dom";
import PetDetails from "../../pet/pet-details";
import PetList from "../../pet/pet-list";
import PetCreate from '../../pet/pet-create';
function PetRouter() {
  return (
    <React.Fragment>
      <Route exact path="/pet/list" component={PetList} />
      <Route exact path="/pet/details" component={PetDetails} />
      <Route exact path="/pet/add" component={PetCreate} />
    </React.Fragment>
  );
}

export default PetRouter;
