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
  import { IndexKind } from "typescript";
  import CustomTextField from "../../components/custom-text-field/custom-text-field";

   function AppointmentVetList() {
    const [initialLoading, setInitialLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [appointments, setApps] = useState<Appointment[]>([]);
    const [PP, setPP] = useState<Person_profile[]>([]);
    const [perNames, setPerNames] = useState<string[]>([]);
    const [perPid, setPid] = useState<number[]>([]);
    const [target, setTarget] = useState("");

    const [bid, setBussines] = useState(
      localStorage.getItem('bid')
    );

    useEffect(() => {
      apiAppointment.list().then((data) => {
        console.log(data);
        setApps(data);
        setInitialLoading(false);
        people();
        
      });
    }, []);

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

    function people(){
      let vals:string[] = [];
      apiPP.list().then((data) => {
        setPP(data);
        setInitialLoading(false);
      }).then(() => {
      for (let i = 0; i < appointments.length; i++) {
        let pn = PP.filter((x) => x.id == appointments[i].personProfileId);
        //console.log(pn)
        console.log(pn[0].name)
        vals.push(pn[0].name);
        console.log(vals)
      }
      setPerNames(vals);
    
      });
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
                      <TableCell>Dueño</TableCell>
                      <TableCell>Mascota</TableCell>
                      <TableCell>Eliminar</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {appointments.map((appointment, index) => (
                      <TableRow key={appointment.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{appointment.startTime}</TableCell>
                        <TableCell>{appointment.veteryname}</TableCell>
                        <TableCell>{perNames}</TableCell>
                        <TableCell>
                          <Button
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
  