import React from "react";
import { Route } from "react-router-dom";

import PetDetails from "../../pet/pet-details";
import PetList from "../../pet/pet-list";
import PetDetails from "../../pet/pet-details"
function PetRouter() {
  return (
    <React.Fragment>
      <Route exact path="/pet/list" component={PetList} />
      <Route exact path="/pet/details" component={PetDetails} />
    </React.Fragment>
  );
}

export default PetRouter;
