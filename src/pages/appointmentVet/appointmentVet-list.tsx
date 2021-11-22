import {
  Button,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiAppointment from "../../api/api.appointment";
import apiPet from "../../api/api.pet";
import apiPP from "../../api/api.person_profile";
import Title from "../../components/dashboard/title";
import { Appointment } from "../../models/appointment-form";
import { Pet } from "../../models/pet-form";
import { Person_profile } from "../../models/personprofile-for";
import CheckTwoToneIcon from '@material-ui/icons/CheckTwoTone';
import { IndexKind } from "typescript";
import CustomTextField from "../../components/custom-text-field/custom-text-field";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors'

const theme = createMuiTheme({palette: {primary: red, secondary: green, error: red,},});

 function AppointmentVetList() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [appointments, setApps] = useState<Appointment[]>([]);
  const [PP, setPP] = useState<Person_profile[]>([]);
  const [pets, setPets] = useState<Pet[]>([]);
  const [perNames, setPerNames] = useState<string[]>([]);
  const [petIds, setPetIds] = useState<number[]>([]);
  const [perPid, setPid] = useState<number[]>([]);
  const [target, setTarget] = useState("");

  const [bid, setBussines] = useState(
    localStorage.getItem('bid')
  );

  useEffect(() => {
    let user: number=parseInt(String(localStorage.getItem('bid')));
    console.log(user);
    apiAppointment.list().then((data) => {
      //setApps(data);
      setInitialLoading(false);
      setApps(data.filter((x) => x.businessId == user));
    });
    apiPP.list().then((data) => {
      setPP(data);
      setInitialLoading(false);
      //console.log(PP);
      //people();
    });
    apiPet.list().then((data) => {
      setPets(data);
      setInitialLoading(false);
      fillPets();
      //console.log(petIds);
    });
  },[]);

  function UpStatus(app:Appointment){
    if (app.status == true) {
      app.status = false;
    } else { app.status = true; }
    apiAppointment.edit(app).then(() => {
      setLoading(false);
    });
    apiAppointment.list().then((data) => {
      //console.log(data);
      setApps(data);
      setInitialLoading(false);
    });
  }
  function changeRemove(
    id: number
  ) {
    const customer = appointments.find((x) => x.id === id);

    if (customer) {
      //Delete
      //setTarget(event.currentTarget.name);
      setLoading(true);
      apiAppointment.delete(id).then(() => {
        setLoading(false);
        setApps(
          appointments.filter((x) => x.id !== id)
        );
      });
    }
  }
  function setpetId(id:number){
    let idstr : string=String(id)
    localStorage.setItem("petid", idstr);
  }
  function people() {
    let vals:string[] = [];
    for (let i = 0; i < appointments.length; i++) {
      let pn = PP.filter((x) => x.id == appointments[i].personProfileId);
      //console.log(vals);
      vals.push(pn[0].name);
    }
    //console.log(vals);
    setPerNames(vals);
  }
  function fillPets() {
    let vals:number[] = [];
    for (let i = 0; i < appointments.length; i++) {
      let pn:Pet[] = pets.filter((x) => x.personProfileId == appointments[i].personProfileId);
      if (pn[0] != null){
        console.log(pn[0].id);
        let n:number = pn[0].id;
        vals.push(n);
      } else {vals.push(1);}
    }
    //console.log(vals);
    setPetIds(vals);
  }
  function getColor(estado:boolean) {
    if (estado == true) {
      return "secondary";
    }
    else {return "primary";}
  }
  function getMsg(estado:boolean) {
    if (estado == true) {
      return "Confirmado";
    }
    else {return "En espera...";}
  }

  return (
      <React.Fragment>
        <Grid item xs={12}>
          <Paper
            style={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <React.Fragment>
              <Title>Lista de Citas</Title>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Nro</TableCell>
                      <TableCell>Fecha</TableCell>
                      <TableCell>Veterinaria</TableCell>
                      <TableCell>Mascota</TableCell>
                      <TableCell>Estado</TableCell>
                      <TableCell>Eliminar</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {appointments.map((appointment, index) => (
                      <TableRow key={appointment.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{appointment.startTime}</TableCell>
                        <TableCell>{appointment.veteryname}</TableCell>
                        <TableCell>
                          <Button onClick={()=> setpetId(petIds[index])}     
                            component={Link}
                            to={`/pet/details`}
                            size={"small"}
                            variant="contained"
                            color="default"
                            style={{ width: "100px" }}
                            startIcon={
                              <span className="material-icons">info</span>
                            }
                          >
                            Info
                          </Button>
                        </TableCell>
                        <TableCell>
                        <MuiThemeProvider theme={theme}>
                          <Button onClick={()=> UpStatus(appointment)}   
                            startIcon={
                              <CheckTwoToneIcon />
                            }
                            //component={Link}
                            //to={`/pet/details`}
                            size={"small"}
                            //variant="outlined"
                            color= {getColor(appointment.status)}
                            style={{ width: "150px" }}
                          >
                            {getMsg(appointment.status)} 
                          </Button>
                          </MuiThemeProvider>
                        </TableCell>
                        <TableCell>
                          <Button onClick={()=> changeRemove(appointment.id)}                        
                            size={"small"}
                            variant="contained"
                            color="default"
                            style={{ width: "100px" }}
                            startIcon={
                              <span className="material-icons">
                                delete_outline
                              </span>
                            }
                          >
                            Eliminar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </React.Fragment>
          </Paper>
        </Grid>
      </React.Fragment>
  );
}

export default AppointmentVetList;