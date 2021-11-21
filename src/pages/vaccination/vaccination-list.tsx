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
    Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import apiVaccination from "../../api/api.vaccination";
import CustomTextField from "../../components/custom-text-field/custom-text-field";
import Title from "../../components/dashboard/title";
import CustomMainForm from "../../components/form/custom-main-form";
import { Vaccination } from "../../models/vaccination-form";





  function VaccinationsList() {
    const [vaccination, setVaccination] = useState<Vaccination>(new Vaccination());
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [_a, setInitialLoading] = useState(true);
    const [_b, _c] = useState(false);
    const [vaccinationes, setvaccinationss] = useState<Vaccination[]>([]);
    const [_e, _f] = useState("");
    const [bid, setBussines] = useState(
      localStorage.getItem('bid')
    );
    const[filter,setfilter]=useState("")
  
    useEffect(() => {
        apiVaccination.list().then((data) => {
        setvaccinationss(data);
      
        setInitialLoading(false);
      });
    }, []);

    function changeValueVac(
      event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
      const { value, name } = event.target;
      setVaccination({ ...vaccination, [name]: value });
    
    
    }
    
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
     
    
    
      event.preventDefault();
    
        
    
        console.log(vaccination)
    
        /*setLoading(true);*/
        apiVaccination.add(vaccination).then(() => {
          //updatedLoading();
          history.push("/vaccination/list");
    
          //setMessage("Se agrego correctamento el cliente");
        });
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
              Listar veterinarias
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
              Se encarga de listar todas las veterinarias
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
             <CustomMainForm
          title={ "Agregue un nueva vacuna"}
        >
          <form onSubmit={handleSubmit}>
            <React.Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={vaccination.name}
                    onChange={(event) => changeValueVac(event)}
                    required
                    name="nombre"
                    label="nombre"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={vaccination.description}
                    onChange={(event) => changeValueVac(event)}
                    required
                    name="Descripcion"
                    label="Descripcion"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={vaccination.vetName}
                    onChange={(event) => changeValueVac(event)}
                    required
                    name="Nombre de Veterinaria"
                    label="Nombre de Veterinaria"
                  />
                </Grid>


          
                
              </Grid>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "15px",
                }}
              >
                <Button
                  type={"submit"}
                  variant="contained"
                  color={"primary"}
                  startIcon={<span className="material-icons">send</span>}
                  disabled={loading}
                >
                  {"Agregar"}
                </Button>
              </div>
            </React.Fragment>
          </form>
        </CustomMainForm>
            <React.Fragment>
              <Title>Lista de Vacunas de mascotas</Title>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Descripcion</TableCell>
                      <TableCell>Nombre de veterinaria</TableCell>
                      <TableCell>Fecha de creacion</TableCell>
                      <TableCell>Id de historialmedico</TableCell>
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {vaccinationes.map((vaccinations) => (
                      <TableRow key={vaccinations.id}>
                      <TableCell>{vaccinations.id}</TableCell>
                      <TableCell>{vaccinations.name}</TableCell>
                      <TableCell>{vaccinations.description}</TableCell>
                      <TableCell>{vaccinations.vetName}</TableCell>
                      <TableCell>{vaccinations.createAt}</TableCell>
                      <TableCell>{vaccinations.medicalProfileId}</TableCell>
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
         {vaccinationss.map((vaccinations) => (
            <p key="{vaccinations.vaccinationsId}">
              {vaccinations.vaccinationsName} - {vaccinations.vaccinationsDirection}
            </p>
          ))}
        </div>*/
    );
  }
  
  export default VaccinationsList;
  
