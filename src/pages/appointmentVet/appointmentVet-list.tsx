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

  //const promise = fetchProfileData();
  function AppointmentVetList() {
    const [initialLoading, setInitialLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [appointments, setApps] = useState<Appointment[]>([]);
    const [PP, setPP] = useState<Person_profile[]>([]);
    const [perNames, setPerNames] = useState<string[]>([]);
    const [perPid, setPid] = useState<number[]>([]);
    const [target, setTarget] = useState("");

    //var rows:[{nro: number,fecha: string,vetName: string,dueno: string}] = [];
    let rows: Array<{nro: number,fecha: string,vetName: string,dueno: string}> = [];

    useEffect(() => {
      apiAppointment.list().then((data) => {
        console.log(data);
        setApps(data);
        setInitialLoading(false);
        people();
        //var rows = [];
        for (let i = 0; i< appointments.length; i++){
          //console.log(createData(i, appointments[i].startTime, appointments[i].veteryname, perNames[i]))
          //rows.push({nro:i, fecha:appointments[i].startTime, vetName:appointments[i].veteryname, dueno:perNames[i]});
          rows.push(createData(appointments[i].id, appointments[i].startTime, appointments[i].veteryname, perNames[i]));
        }
      });
      console.log(rows)
    },[]);

    function createData(
      nro: number,
      fecha: string,
      vetName: string,
      dueno: string,
    ) {
      console.log({ nro, fecha, vetName, dueno });
      return { nro, fecha, vetName, dueno };
    }

    function changeRemove(
      //event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
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
      //setPP([]);
      //setPerNames([]);
      apiPP.list().then((data) => {
        //console.log(data);
        setPP(data);
        setInitialLoading(false);
        //console.log(PP);
      }).then(() => {
      for (let i = 0; i < appointments.length; i++) {
        let pn = PP.filter((x) => x.id == appointments[i].personProfileId);
        //console.log(pn)
        console.log(pn[0].name)
        vals.push(pn[0].name);
        console.log(vals)
      }
      //console.log(vals);
      setPerNames(vals);
      //console.log(perNames);
      //console.log(appointments);
      //console.log(PP);
      //console.log(perNames);
      });
    }
    function people2(app:Appointment) {
      let info:string = '';
      apiPP.detail(app.personProfileId).then((data) => {
        //console.log(data);
        info = data.name;
      });
      console.log(info)
      return info;
    }
    
    /*return (
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nro</TableCell>
              <TableCell align="right">Fecha</TableCell>
              <TableCell align="right">Veterinaria</TableCell>
              <TableCell align="right">Dueño</TableCell>
              <TableCell align="right">Mascota</TableCell>
              <TableCell align="right">Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.nro}
              >
                <TableCell component="th" scope="row">
                  {row.nro}
                </TableCell>
                <TableCell align="right">{row.fecha}</TableCell>
                <TableCell align="right">{row.vetName}</TableCell>
                <TableCell align="right">{row.dueno}</TableCell>
                <TableCell>
                          <Button
                            component={Link}
                            to={`/customers/detail/${row.nro}`}
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
                          <Button onClick={()=> changeRemove(row.nro)}                        
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
    );*/
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
                            to={`/customers/detail/${appointment.id}`}
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
  