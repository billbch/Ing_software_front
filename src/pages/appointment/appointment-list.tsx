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
  import CustomBody from "../../components/body-custom/custom-body";
  import CustomMainForm from "../../components/form/custom-main-form";
  import CustomBodyDescription from "../../components/body-custom/custom-body-description";
  import React, { useEffect, useState } from "react";
  import CustomTextField from "../../components/custom-text-field/custom-text-field";
  import { Link } from "react-router-dom";
  import apiAppointment from "../../api/api.appointment";
  import Title from "../../components/dashboard/title";
  import { Appointment } from "../../models/appointment-form";
  import CustomBodyName from "../../components/body-custom/custom-body-name";
  import { useHistory, useParams } from "react-router-dom";
  
  function AppointmentList() {


    const history = useHistory();
    const [initialLoading, setInitialLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [appointments, setCustomers] = useState<Appointment[]>([]);
    const [target, setTarget] = useState("");
    const [appointment, setCustomer] = useState<Appointment>(new Appointment());
  
    function changeValueCustomer(
      event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
      const { value, name } = event.target;
      setCustomer({ ...appointment, [name]: value });
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
          setCustomers(
            appointments.filter((x) => x.id !== id)
          );
        });
      }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      
        console.log(appointment);
        /*setLoading(true);*/
        apiAppointment.add(appointment).then(() => {
          //updatedLoading();
          history.push("/customers/list");
  
          //setMessage("Se agrego correctamento el cliente");
        });
    }
    
  
    useEffect(() => {
        apiAppointment.list().then((data) => {
        setCustomers(data);
        setInitialLoading(false);
      });
    }, []);
  
  
    return (
      <React.Fragment>
        <Grid item xs={12} md={8} lg={5}>
          <Paper
            style={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              height: 150,
            }}
          >
            <Typography variant="h5">Estas en:</Typography>
            <Divider />
  
            <Typography style={{ marginTop: "10px" }} variant="body2">
              Listar Citas
            </Typography>
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={7}>
          <Paper
            style={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              height: 150,
            }}
          >
            <Typography variant="h5">Descripcion:</Typography>
            <Divider />
  
            <Typography style={{ marginTop: "10px" }} variant="body2">
              Se encarga de listar todas las citas
            </Typography>
          </Paper>
        </Grid>
        {/* Recent Orders */}
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
                      <TableCell>Eliminar</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {appointments.map((appointment, index) => (
                      <TableRow key={appointment.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{appointment.startTime}</TableCell>
                        <TableCell> {appointment.veteryname}</TableCell>
                        <TableCell>
                          <Button
                            size={"small"}
                            variant="contained"
                            color="default"
                            style={{ width: "100px" }}
                            startIcon={
                              <span className="material-icons">
                                delete_outline
                              </span>
                            }
                            onClick={()=> changeRemove(appointment.id)}
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
      /*<div>
         {customers.map((customer) => (
            <p key="{customer.customerId}">
              {customer.customerName} - {customer.customerDirection}
            </p>
          ))}
        </div>*/
    );
  }
  
  export default AppointmentList;
  