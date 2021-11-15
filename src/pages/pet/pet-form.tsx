import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CustomBody from "../../components/body-custom/custom-body";
import CustomBodyDescription from "../../components/body-custom/custom-body-description";
import CustomBodyName from "../../components/body-custom/custom-body-name";
import CustomTextField from "../../components/custom-text-field/custom-text-field";
import CustomMainForm from "../../components/form/custom-main-form";

import { useHistory, useParams } from "react-router-dom";
import apiPets from "../../api/api.pet";
import { Pet } from "../../models/pet-form";

function PetForm() {
  const history = useHistory();

  const setOpen = useState(false)[1];
  const [loading, setLoading] = useState(false);
  const setInitialLoading = useState(true)[1];
  const [pet, setCustomer] = useState<Pet>(new Pet());

  const { id } = useParams<{ id: string }>();

  function changeValueCustomer(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { value, name } = event.target;
    setCustomer({ ...pet, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (id) {
      //setLoading(true);
      apiPets.edit(pet).then(() => {
        // updatedLoading();
        //setMessage("Se edito correctamento el cliente");
        history.push(`/customers/detail/${id}`);
        setCustomer(pet);
      });
    } else {
      console.log(pet);
      /*setLoading(true);*/
      apiPets.add(pet).then(() => {
        //updatedLoading();
        history.push("/customers/list");

        //setMessage("Se agrego correctamento el cliente");
      });
    }
  }

  useEffect(() => {
    if (id) {
        apiPets.detail(id).then((data) => {
        setCustomer(data);
        setInitialLoading(false);
      });
    } else {
      setInitialLoading(false);
    }
  }, [id]);

  return (
    <React.Fragment>
      <CustomBodyName>
        {id ? "Editar un cliente" : "Agregar un nuevo cliente"}
      </CustomBodyName>
      <CustomBodyDescription>
        {id
          ? "Este componenete se encarga de editar un  cliente"
          : "Este componenete se encarga de agregar un nuevo cliente"}
      </CustomBodyDescription>
      <CustomBody>
        <CustomMainForm
          title={id ? "Edite su cliente" : "Agregue un nuevo cliente"}
        >
          <form onSubmit={handleSubmit}>
            <React.Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={pet.id}
                    onChange={(event) => changeValueCustomer(event)}
                    required
                    name="customerName"
                    label="Nombres"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={pet.name}
                    onChange={(event) => changeValueCustomer(event)}
                    required
                    name="customerDirection"
                    label="Dirección"
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
                  {id ? "Editar" : "Agregar"}
                </Button>
              </div>
            </React.Fragment>
          </form>
        </CustomMainForm>
      </CustomBody>
    </React.Fragment>
  );
}

export default PetForm;



