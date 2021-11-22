import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { NavLink } from "react-router-dom";



export const mainListItems = (

  <div>
    <ListItem
      button
      exact
      component={NavLink}
      to={"/"}
      activeClassName="Mui-selected"
    >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
  </div>
);


export const BusinesItem = (
  <div>
    <ListSubheader inset>Bienvenido</ListSubheader>

    <ListItem
      button
      component={NavLink}
      to={"/appointmentVet/list"} //to change
      activeClassName="Mui-selected"
    >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Listar Citas Vet" />
    </ListItem>

    <ListItem
      button
      component={NavLink}
      to={"/vaccination/list"} //to change
      activeClassName="Mui-selected"
    >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Listar Vacunas" />
    </ListItem>

  </div>

);

export const PersonItems = (
  <div>
    <ListSubheader inset>Bienvenido</ListSubheader>

    <ListItem
      button
      component={NavLink}
      to={"/pet/list"}
      activeClassName="Mui-selected"
    >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Listar Mascotas" /> 
    </ListItem>

    <ListItem
      button
      component={NavLink}
      to={"/business/list"} //to change
      activeClassName="Mui-selected"
    >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Buscar Veterinarias" />
    </ListItem>

    <ListItem
      button
      component={NavLink}
      to={"/appointment/list"} //to change
      activeClassName="Mui-selected"
    >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Listar Citas" />
    </ListItem>

    <ListItem
      button
      component={NavLink}
      to={"/vaccination/list"} //to change
      activeClassName="Mui-selected"
    >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Listar Vacunas" />
    </ListItem>
  </div>

);
