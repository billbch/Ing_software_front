import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CustomBody from "../../components/body-custom/custom-body";
import CustomBodyDescription from "../../components/body-custom/custom-body-description";
import CustomBodyName from "../../components/body-custom/custom-body-name";
import CustomTextField from "../../components/custom-text-field/custom-text-field";
import CustomMainForm from "../../components/form/custom-main-form";

import { useHistory, useParams } from "react-router-dom";
import apiAppointment from "../../api/api.appointment";
import { Appointment } from "../../models/appointment-form";
import { Console } from "console";

function AppointmentForm() {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [appointment, setCustomer] = useState<Appointment>(new Appointment());
  const [ppid, setppid] = useState(
    localStorage.getItem('ppid')
  );
  const [bid, setbid] = useState(
    localStorage.getItem('bid')
  );

  const { id } = useParams<{ id: string }>();

  function changeValueCustomer(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { value, name } = event.target;
    setCustomer({ ...appointment, [name]: value });
    localStorage.setItem('ppid',value)
    localStorage.setItem('bid',value)

  }



  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (id) {
      //setLoading(true);
      apiAppointment.edit(appointment).then(() => {
        // updatedLoading();
        //setMessage("Se edito correctamento el cliente");
        history.push(`/appointment/detail/${id}`);
        setCustomer(appointment);
      });
    } else {
      let bid: number=parseInt(String(localStorage.getItem('bid')))
      let ppid: number=parseInt(String(localStorage.getItem('ppid')))

      
      appointment.businessId= bid
      appointment.personProfileId= ppid
      console.log(appointment)

      /*setLoading(true);*/
      apiAppointment.add(appointment).then(() => {
        //updatedLoading();
        history.push("/appointment/list");
      localStorage.setItem('bid','2')
      localStorage.setItem('ppid','1')
        //setMessage("Se agrego correctamento el cliente");
      });
    }
  }

  function updatedLoading() {
    setLoading(false);
    setOpen(true);
  }

  useEffect(() => {
    if (id) {
        apiAppointment.detail(id).then((data) => {
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
                    value={appointment.startTime}
                    onChange={(event) => changeValueCustomer(event)}
                    required
                    name="startTime"
                    label="Día/Mes/Año/Hora 24h"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={appointment.veteryname}
                    onChange={(event) => changeValueCustomer(event)}
                    required
                    name="veteryname"
                    label="Veteryname"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={appointment.productTypeName}
                    onChange={(event) => changeValueCustomer(event) }
                    required
                    name="productTypeName"
                    label="ProductTypeName"
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
      </CustomBody>
    </React.Fragment>
  );
}

export default AppointmentForm;
