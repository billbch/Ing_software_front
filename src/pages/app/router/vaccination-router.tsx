import React from "react";
import { Route } from "react-router-dom";

import VaccinationList from "../../vaccination/vaccination-list";
function VaccinationRouter() {
  return (
    <React.Fragment>
      <Route exact path="/vaccination/list" component={VaccinationList} />
     
    </React.Fragment>
  );
}

export default VaccinationRouter;
