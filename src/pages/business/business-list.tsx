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
import { idText } from "typescript";
import apiBusinesses from "../../api/api.businesses";
import Title from "../../components/dashboard/title";
import { Business } from "../../models/business";
import CustomTextField from "../../components/custom-text-field/custom-text-field";



  

  function BusinessList() {
    const [_a, setInitialLoading] = useState(true);
    const [_b, _c] = useState(false);
    const [busineses, setBusinesss] = useState<Business[]>([]);
    const [_e, _f] = useState("");
    const [bid, setBussines] = useState(
      localStorage.getItem('bid')
    );
    const[filter,setfilter]=useState("")
  
    useEffect(() => {
        apiBusinesses.list().then((data) => {
        setBusinesss(data);
        setInitialLoading(false);
      });
    }, []);


    function Filter(){

      setBusinesss(busineses.filter((x)=>x.district==filter))
    }

    function recuperarid(id : number){

      let idd : string=String(id)
      localStorage.setItem('bid',idd)
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
            <CustomTextField
                    //value={appointment.startTime}
    
                    onChange={(event) => setfilter(event.target.value)}
                    required
                    name="startTime"
                    label="Buscar"
                  />
                  <Button onClick={()=> Filter()}
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
                            Buscar
                          </Button>
            <React.Fragment>
              <Title>Lista de Mascotas</Title>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Distrito</TableCell>
                      <TableCell>Ciudad</TableCell>
                      <TableCell>Direccion</TableCell>
                      <TableCell>Score</TableCell>
                      <TableCell>Editar</TableCell>
                      <TableCell>Detalles</TableCell>
                      <TableCell>Eliminar</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {busineses.map((business) => (
                      <TableRow key={business.id}>
                      <TableCell>{business.id}</TableCell>
                      <TableCell>{business.businessName}</TableCell>
                      <TableCell>{business.district}</TableCell>
                      <TableCell>{business.city}</TableCell>
                      <TableCell>{business.address}</TableCell>
                      <TableCell>{business.score}</TableCell>
                        <TableCell>
                          <Button
                            component={Link}
                            to={`/business/edit/${business.id}`}
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
                            onClick={()=> recuperarid(business.id)}
                            component={Link}
                            to={`/business/detail`}
                            
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
         {businesss.map((business) => (
            <p key="{business.businessId}">
              {business.businessName} - {business.businessDirection}
            </p>
          ))}
        </div>*/
    );
  }
  
  export default BusinessList;
  
