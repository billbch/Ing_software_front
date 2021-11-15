import { MuiThemeProvider } from "@material-ui/core";
import themeMui from "../../themes/theme-mui";
import Dashboard from "../../components/dashboard/dashboard";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import CustomersRouter from "./router/customers-router";
import DashboardRouter from "./router/dashboard-router";
import PersonprofileRouter from "./router/personprofile-route";
import AppointmentRouter from "./router/appointment-route";
import PetRouter from "./router/pet-router";
import BusinessRouter from "./router/business-router";
import AppointmentVetRouter from "./router/appointmentVet-route";


function App() {
  return (
    <Router>
      <MuiThemeProvider theme={themeMui}>
        <Switch>
          <Dashboard>
            <AppointmentVetRouter/>
            <AppointmentRouter/>
            <CustomersRouter />
            <PetRouter />
			      <BusinessRouter />
            <PersonprofileRouter />
            <DashboardRouter />
          </Dashboard>
        </Switch>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
