import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import CustomBody from "../../components/body-custom/custom-body";
import CustomBodyDescription from "../../components/body-custom/custom-body-description";
import CustomBodyName from "../../components/body-custom/custom-body-name";
import CustomTextField from "../../components/custom-text-field/custom-text-field";
import CustomMainForm from "../../components/form/custom-main-form";
import apiPet from "../../api/api.pet";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { Petcreate } from "../../models/pet-form-create";
import { Pet } from "../../models/pet-form";

function PetCreate() {
  const history = useHistory();
  const [newPet, setNPet] = useState<Petcreate>(new Petcreate());

  function addPet(){
    let ppid: number=parseInt(String(localStorage.getItem('ppid')))

      newPet.personProfileId= ppid;
      console.log(newPet);

      /*setLoading(true);*/
      apiPet.add(newPet).then(() => {
    
      });
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
      let ppid: number=parseInt(String(localStorage.getItem('ppid')))

      newPet.personProfileId= ppid;
      console.log(newPet);
      setNPet(newPet);
      /*setLoading(true);*/
      apiPet.add(newPet).then(() => {
        //updatedLoading();
        history.push("/pet/list");
      });
    }

  function changeValueCustomer(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { value, name } = event.target;
    setNPet({ ...newPet, [name]: value });
  }
  useEffect(() => {
    
  }, []);

  return (
    <React.Fragment>
      <CustomBodyName>
        {"Agregar una nueva mascota"}
      </CustomBodyName>
      <CustomBodyDescription>
        {"Este componenete se encarga de agregar una nueva mascota"}
      </CustomBodyDescription>
      <CustomBody>
        <CustomMainForm
          title={ "Agregue una nueva mascota"}
        >
          <form onSubmit={handleSubmit}>
            <React.Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={newPet.name}
                    onChange={(event) => changeValueCustomer(event)}
                    required
                    name="name"
                    label="Nombre de mascota"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={newPet.lastName}
                    onChange={(event) => changeValueCustomer(event)}
                    required
                    name="lastName"
                    label="Apellido"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={newPet.birthDate}
                    onChange={(event) => changeValueCustomer(event)}
                    required
                    name="birthDate"
                    label="Año de nacimiento"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={newPet.age}
                    onChange={(event) => changeValueCustomer(event)}
                    required
                    name="age"
                    label="Edad"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={newPet.breed}
                    onChange={(event) => changeValueCustomer(event)}
                    required
                    name="breed"
                    label="Raza"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={newPet.photo}
                    onChange={(event) => changeValueCustomer(event)}
                    required
                    name="photo"
                    label="Foto"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={newPet.gender}
                    onChange={(event) => changeValueCustomer(event)}
                    required
                    name="gender"
                    label="Sexo"
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
                  //onClick={()=> addPet()}
                  //component={Link}
                  //to={`/pet/list`}
                  type={"submit"}
                  variant="contained"
                  color={"primary"}
                  startIcon={<span className="material-icons">send</span>}
                >
                  {"Agregar"}
                </Button>
              </div>
            </React.Fragment>
          </form>
        </CustomMainForm>
      </CustomBody>
    </React.Fragment>
  );

}

export default PetCreate;