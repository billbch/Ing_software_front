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
import apiPets from "../../api/api.pet";
import Title from "../../components/dashboard/title";
import { Pet } from "../../models/pet-form";
  
  function PetList() {
    const [_a, setInitialLoading] = useState(true);
    const [_b, _c] = useState(false);
    const [pets, setPets] = useState<Pet[]>([]);
    const [_e, _f] = useState("");
    const [petid, setBussines] = useState(
      localStorage.getItem('petid')
    );
    

    useEffect(() => {
        apiPets.list().then((data) => {
        setPets(data);
        setInitialLoading(false);
      });
    }, []);
  
    function recuperarid(id : number){

      let idd : string=String(id)
      localStorage.setItem('petid',idd)
    }
  
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
              Listar Mascotas
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
              Se encarga de listar todas las mascotas
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
              <Title>Lista de Mascotas</Title>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Apellido</TableCell>
                      <TableCell>Cliente</TableCell>
                      <TableCell>Editar</TableCell>
                      <TableCell>Detalles</TableCell>
                      <TableCell>Eliminar</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pets.map((pet) => (
                      <TableRow key={pet.id}>
                        <TableCell>{pet.id}</TableCell>
                        <TableCell>{pet.name }</TableCell>
                        <TableCell> {pet.lastName}</TableCell>
                        <TableCell> {pet.personProfileId}</TableCell>
                        <TableCell>
                          <Button
                            component={Link}
                            to={`/pet/edit`}
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
                            onClick={()=> recuperarid(pet.id)}
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
         {pets.map((pet) => (
            <p key="{pet.petId}">
              {pet.petName} - {pet.petDirection}
            </p>
          ))}
        </div>*/
    );
  }
  
  export default PetList;
  
