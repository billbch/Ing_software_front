import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiPets from "../../api/api.pets";
import CustomBody from "../../components/body-custom/custom-body";
import CustomBodyDescription from "../../components/body-custom/custom-body-description";
import CustomBodyName from "../../components/body-custom/custom-body-name";
import CustomCardBody from "../../components/custom-card/custom-card-body/custom-card-body";
import CustomCardHeader from "../../components/custom-card/custom-card-header/custom-card-header";
import CustomCard from "../../components/custom-card/custom-card/custom-card";
import { Pet } from "../../models/pet";

function PetsDetails() {
  const [pet, setPet] = useState<Pet>(new Pet());
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      apiPets.detail(id).then((data) => {
        setPet(data);
		console.log('Lambda says:',data);
      });
    }
  }, [id]);
  console.log('Main func', pet.name);

  return (
    <React.Fragment>
      <CustomBodyName>Detalles mascota</CustomBodyName>
      <CustomBodyDescription>
        Se encarga de mostrar los detalles de una mascota
      </CustomBodyDescription>

      <CustomBody>
        <CustomCard>
          <CustomCardHeader>
            <h3> Detalles de la mascota : {pet.name} </h3>
          </CustomCardHeader>
          <CustomCardBody>
            <Grid container>
              <Grid item xs={12} sm={12} md={6}>
                <h3> Detalles del mascota: </h3>
                <h5> Mascota: </h5>
                <p>{pet.name}</p>
                <h5> Raza: </h5>
                <p> {pet.breed} </p> 
              </Grid>
            </Grid>
          </CustomCardBody>
        </CustomCard>
      </CustomBody>
    </React.Fragment>
  );
}

export default PetsDetails;
