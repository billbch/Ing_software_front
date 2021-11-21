import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import apiBussinesses from "../../api/api.businesses";
import CustomBody from "../../components/body-custom/custom-body";
import CustomBodyDescription from "../../components/body-custom/custom-body-description";
import CustomBodyName from "../../components/body-custom/custom-body-name";
import CustomCardBody from "../../components/custom-card/custom-card-body/custom-card-body";
import CustomCardHeader from "../../components/custom-card/custom-card-header/custom-card-header";
import CustomCard from "../../components/custom-card/custom-card/custom-card";
import { Business } from "../../models/business";

function BussinessesDetails() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [business, setBusiness] = useState<Business>(new Business());

  let id:string=String(localStorage.getItem('bid'))

  //console.log(business)

	useEffect(() => {
    if (id) {
      apiBussinesses.detail(id).then((data) => {
        setBusiness(data);
        console.log(data)
        //setInitialLoading(false);
      });
    }
    
  }, [id]);

  if (business.result) {
  return (
    <React.Fragment>
      <CustomBodyName>Detalles cliente</CustomBodyName>
      <CustomBodyDescription>
        Se encarga de mostrar los detalles de un cliente
      </CustomBodyDescription>

      <CustomBody>
        <CustomCard>
          <CustomCardHeader>
            <h3> Detalles del cliente :  {business.result.id} </h3>
          </CustomCardHeader>
          <CustomCardBody>
            <Grid container>
              <Grid item xs={12} sm={12} md={6}>
                <h3> RUC: {business.result.ruc} </h3>
                <h3> Nombre de Veterinaria: {business.result.businessName} </h3>
                <h3> Distrito: {business.result.district} </h3>
                <h3> City: {business.result.city} </h3>
                <h3> Address: {business.result.address} </h3>
                <h3> Email: {business.result.email} </h3>
                <h3> Contraseña: {business.result.password} </h3>
                <h3> Calificacion: {business.result.score} </h3>
                <h3> Descripcion: {business.result.description} </h3>
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

export default BussinessesDetails;
