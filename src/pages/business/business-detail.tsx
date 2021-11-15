import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
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
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      apiBussinesses.detail(id).then((data) => {
        setBusiness(data);
        //setInitialLoading(false);
      });
    }
  }, [id]);

  return (
    <React.Fragment>
      <CustomBodyName>Mi Veterinaria</CustomBodyName>
      <CustomBodyDescription>
		Aqui puedes visualizar y modificar información de tu negocio.
      </CustomBodyDescription>

      <CustomBody>
        <CustomCard>
          <CustomCardHeader>
            <h3> Detalles de tu Veterinaria : {business.businessName} </h3>
          </CustomCardHeader>
          <CustomCardBody>
            <Grid container>
              <Grid item xs={12} sm={12} md={6}>
                <h3> Detalles del Veterinaria: </h3>
                <h5> Veterinaria: </h5>
                <p>{business.businessName}</p>
                <h5> Dirección: </h5>
                <p> {business.address} </p>

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
				
              </Grid>
            </Grid>
          </CustomCardBody>
        </CustomCard>
      </CustomBody>
    </React.Fragment>
  );
}

export default BussinessesDetails;
