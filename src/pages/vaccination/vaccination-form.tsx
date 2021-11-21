import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import apiBusinesses from "../../api/api.businesses";
import CustomBody from "../../components/body-custom/custom-body";
import CustomBodyDescription from "../../components/body-custom/custom-body-description";
import CustomBodyName from "../../components/body-custom/custom-body-name";
import CustomTextField from "../../components/custom-text-field/custom-text-field";
import CustomMainForm from "../../components/form/custom-main-form";
import { Business } from "../../models/business";


function BusinessForm() {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [business, setBusiness] = useState<Business>(new Business());

  const { id } = useParams<{ id: string }>();

  function changeValueBusiness(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { value, name } = event.target;
    setBusiness({ ...business, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (id) {
      //setLoading(true);
      apiBusinesses.edit(business).then(() => {
        // updatedLoading();
        //setMessage("Se edito correctamento el veterinaria");
        history.push(`/businesses/detail/${id}`);
        setBusiness(business);
      });
    } else {
      console.log(business);
      /*setLoading(true);*/
      apiBusinesses.add(business).then(() => {
        //updatedLoading();
        history.push("/businesses/list");

        //setMessage("Se agrego correctamento el veterinaria");
      });
    }
  }

  function updatedLoading() {
    setLoading(false);
    setOpen(true);
  }

  useEffect(() => {
    if (id) {
      apiBusinesses.detail(id).then((data) => {
        setBusiness(data);
        setInitialLoading(false);
      });
    } else {
      setInitialLoading(false);
    }
  }, [id]);

  return (
    <React.Fragment>
      <CustomBodyName>
        {id ? "Editar unaa veterinaria" : "Agregar una nuevo veterinaria"}
      </CustomBodyName>
      <CustomBodyDescription>
        {id
          ? "Este componenete se encarga de editar una  veterinaria"
          : "Este componenete se encarga de agregar una nuevo veterinaria"}
      </CustomBodyDescription>
      <CustomBody>
        <CustomMainForm
          title={id ? "Edite su veterinaria" : "Agregue una nuevo veterinaria"}
        >
          <form onSubmit={handleSubmit}>
            <React.Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={business.businessName}
                    onChange={(event) => changeValueBusiness(event)}
                    required
                    name="businessName"
                    label="Nombres"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={business.address}
                    onChange={(event) => changeValueBusiness(event)}
                    required
                    name="businessDirection"
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

export default BusinessForm;
