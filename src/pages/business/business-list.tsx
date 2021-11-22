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
import PetsTwoToneIcon from '@material-ui/icons/PetsTwoTone';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, green, lightGreen } from '@material-ui/core/colors'

const theme = createMuiTheme({palette: {primary: lightGreen, secondary: red, error: red,},});

  function BusinessList() {
    const [_a, setInitialLoading] = useState(true);
    const [_b, _c] = useState(false);
    const [filt, setSearch] = useState(true);
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

    function set_ext_bid(id : number) {
      let idd : string=String(id)
      localStorage.setItem('ext_bid',idd)
    }

    function Filter(){
      setBusinesss(busineses.filter((x)=>x.district==filter));
      setSearch(false);
    }

    function reset(){
      apiBusinesses.list().then((data) => {
        setBusinesss(data);
        setInitialLoading(false);
      });
      setSearch(true);
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
              Lista Veterinarias
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
                      style={{ width: "150px" }}
                      startIcon={
                        <span className="material-icons">
                          delete_outline
                        </span>
                      }
                  >
                    Buscar
                  </Button>
                  <MuiThemeProvider theme={theme}>
                  <Button onClick={()=> reset()}
                      size={"small"}
                      variant="outlined"
                      color="secondary"
                      style={{ width: "150px" }}
                      disabled = {filt}
                      startIcon={
                        <CancelTwoToneIcon/>
                      }
                  >
                    Cancelar
                  </Button>
                  </MuiThemeProvider>
            <React.Fragment>
              <Title>Lista de Veterinarias</Title>
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
                      <TableCell>Agendar Cita</TableCell>
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
                            style={{ width: "110px" }}
                            startIcon={
                              <span className="material-icons">info</span>
                            }
                          >
                            Detalles
                          </Button>
                        </TableCell>
                        <TableCell>
                        <MuiThemeProvider theme={theme}>
                          <Button
                            onClick={()=> set_ext_bid(business.id)}
                            component={Link}
                            to={`/appointment/add/`}
                            size={"small"}
                            variant="outlined"
                            color="primary"
                            style={{ width: "90px" }}
                            startIcon={
                              <PetsTwoToneIcon />
                            }
                          >
                            Cita
                          </Button>
                        </MuiThemeProvider>
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
  
