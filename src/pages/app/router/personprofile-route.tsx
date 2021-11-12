import React from "react";
import { Route } from "react-router-dom";
import PersonprofileForm from "../../personprofile/personprofile-form"
import PersonprofileDetails from "../../personprofile/personprofile-details";
import PersonprofileList from "../../personprofile/person-profile-list"
function PersonprofileRouter() {
  return (
    <React.Fragment>
      <Route exact path="/personprofile/list" component={PersonprofileList} />
      <Route exact path="/personprofile/add" component={PersonprofileForm} />
      <Route exact path="/personprofile/edit/:id" component={PersonprofileForm} />
      <Route exact path="/personprofile/detail/:id" component={PersonprofileDetails} />
    </React.Fragment>
  );
}

export default PersonprofileRouter;
