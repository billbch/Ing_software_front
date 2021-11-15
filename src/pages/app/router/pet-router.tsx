import React from "react";
import { Route } from "react-router-dom";
//import PersonprofileForm from "../../personprofile/personprofile-form"
import PetDetails from "../../pet/pet-details";
//import PersonprofileList from "../../personprofile/person-profile-list"
function PetRouter() {
  return (
    <React.Fragment>
      <Route exact path="/pet/details" component={PetDetails} />
    </React.Fragment>
  );
}

export default PetRouter;
