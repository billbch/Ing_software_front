import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiCustomers from "../../api/api.customers";
import apiPet from "../../api/api.pet";
import CustomBody from "../../components/body-custom/custom-body";
import CustomBodyDescription from "../../components/body-custom/custom-body-description";
import CustomBodyName from "../../components/body-custom/custom-body-name";
import CustomCardBody from "../../components/custom-card/custom-card-body/custom-card-body";
import CustomCardHeader from "../../components/custom-card/custom-card-header/custom-card-header";
import CustomCard from "../../components/custom-card/custom-card/custom-card";
import { Pet } from "../../models/pet-form";

function PetDetails() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [pet, setPet] = useState<Pet>(new Pet());

  let id:string=String(localStorage.getItem('petid'))
    console.log(id)

  useEffect(() => {
    if (id) {
      apiPet.detail(id).then((data) => {
        setPet(data);
        //setInitialLoading(false);
      });
    }
  }, [id]);


  if (pet.result) {

  return (
    <React.Fragment>
      <CustomBodyName>Detalles cliente</CustomBodyName>
      <CustomBodyDescription>
        Se encarga de mostrar los detalles de un cliente
      </CustomBodyDescription>

      <CustomBody>
        <CustomCard>
          <CustomCardHeader>
            <h3> Detalles del cliente : {pet.result.id} </h3>
          </CustomCardHeader>
          <CustomCardBody>
            <Grid container>
              <Grid item xs={12} sm={12} md={6}>
                <h5> Nombre:  {pet.result.name}</h5>
                <h5> Apellido:  {pet.result.lastName}</h5>
                <h5> Fecha de Nacimiento:  {pet.result.birthDate}</h5>
                <h5> Edad:  {pet.result.age}</h5>
                <h5> Raza:  {pet.result.breed}</h5>
                <h5> Photo:  {pet.result.photo}</h5>
                <h5> Genero:  {pet.result.gender}</h5>
                <h5> Dueño:  {pet.result.personProfileId}</h5>
              </Grid>
            </Grid>
          </CustomCardBody>
        </CustomCard>
      </CustomBody>
    </React.Fragment>
  );
  } else {
    return (<React.Fragment>Cargando</React.Fragment>)
  }
}

export default PetDetails;