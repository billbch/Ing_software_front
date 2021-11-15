import React from "react";
import { Route } from "react-router-dom";
import CustomerForm from "../../customers/customer-form";
import BusinessesDetails from "../../customers/customers-details";
import BusinessesList from "../../business/business-list";

function BusinessRouter() {
  return (
    <React.Fragment>
      <Route exact path="/business/list" component={BusinessesList} />
      //<Route exact path="/business/add" component={CustomerForm} />
      <Route exact path="/business/edit/:id" component={CustomerForm} />
      <Route exact path="/business/detail/:id" component={BusinessesDetails} />
    </React.Fragment>
  );
}

export default BusinessRouter;
