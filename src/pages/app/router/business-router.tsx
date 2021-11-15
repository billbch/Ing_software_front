import React from "react";
import { Route } from "react-router-dom";
import BusinessForm from "../../business/business-form";
import BusinessesDetails from "../../business/business-detail";
import BusinessesList from "../../business/business-list";

function BusinessRouter() {
  return (
    <React.Fragment>
      <Route exact path="/business/list" component={BusinessesList} />
      //<Route exact path="/business/add" component={BusinessForm} />
      <Route exact path="/business/edit/:id" component={BusinessForm} />
      <Route exact path="/business/detail/:id" component={BusinessesDetails} />
    </React.Fragment>
  );
}

export default BusinessRouter;
