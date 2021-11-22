import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import CustomBody from "../../components/body-custom/custom-body";
import CustomBodyDescription from "../../components/body-custom/custom-body-description";
import CustomBodyName from "../../components/body-custom/custom-body-name";
import CustomTextField from "../../components/custom-text-field/custom-text-field";
import CustomMainForm from "../../components/form/custom-main-form";

import { useHistory, useParams } from "react-router-dom";
import { Pet } from "../../models/pet-form";

function PetCreate() {

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
          <form>
            <React.Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    required
                    name="name"
                    label="Nombre de mascota"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    required
                    name="lastName"
                    label="Apellido"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    required
                    name="birthdate"
                    label="Año de nacimiento"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    required
                    name="age"
                    label="Edad"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    required
                    name="breed"
                    label="Raza"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    required
                    name="photo"
                    label="Foto"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
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