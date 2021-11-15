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

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Clientes</ListSubheader>
    <ListItem
      button
      component={NavLink}
      to={"/customers/list"}
      activeClassName="Mui-selected"
    >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Listar Clientes" />
    </ListItem>

    <ListItem
      button
      component={NavLink}
      to={"/customers/add"}
      activeClassName="Mui-selected"
    >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Agregar Clientes" />
    </ListItem>

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
      to={"business/list"} //to change
      activeClassName="Mui-selected"
    >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Listar Veterinarias" />
    </ListItem>

    <ListItem
      button
      component={NavLink}
      to={"/customers/add"} //to change
      activeClassName="Mui-selected"
    >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Buscar Veterinaria" />
    </ListItem>

    <ListItem
      button
      component={NavLink}
      to={"/customers/add"} //to change
      activeClassName="Mui-selected"
    >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Agregar Cita" />
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
  

  </div>
);
