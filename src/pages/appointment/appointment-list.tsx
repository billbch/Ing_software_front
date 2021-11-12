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
  import Title from "../../components/dashboard/title";
  import { Appointment } from "../../models/appointment-form";
  
  function AppointmentList() {
    const [initialLoading, setInitialLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [appointments, setCustomers] = useState<Appointment[]>([]);
    const [target, setTarget] = useState("");
  
    function changeRemove(
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      id: number
    ) {
      const customer = appointments.find((x) => x.id === id);
  
      if (customer) {
        //Delete
        setTarget(event.currentTarget.name);
        setLoading(true);
        apiAppointment.delete(id).then(() => {
          setLoading(false);
          setCustomers(
            appointments.filter((x) => x.id !== id)
          );
        });
      }
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
                      <TableCell>Editar</TableCell>
                      <TableCell>Detalle</TableCell>
                      <TableCell>Eliminar</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {appointments.map((appointment, index) => (
                      <TableRow key={appointment.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{appointment.createdAt}</TableCell>
                        <TableCell> {appointment.veteryname}</TableCell>
                        <TableCell>
                          <Button
                            component={Link}
                            to={`/customers/edit/${appointment.id}`}
                            size={"small"}
                            variant="contained"
                            color="inherit"
                            style={{ width: "100px" }}
                            startIcon={
                              <span className="material-icons">edit</span>
                            }
                          >
                            Editar
                          </Button>
                        </TableCell>
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
                            Detalles
                          </Button>
                        </TableCell>
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
  