import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CustomTextField from "../../components/custom-text-field/custom-text-field";
import CustomMainForm from "../../components/form/custom-main-form";
import {DropzoneArea} from 'material-ui-dropzone';

import { Link, useHistory, useParams } from "react-router-dom";
import apiRegister from "../../api/api.register";
import { RegisterPP } from "../../models/register-pp-form";

function Registerform() {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [register, setRegister] = useState<RegisterPP>(new RegisterPP());

  function changeValueRegister(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
		const { value, name } = event.target;
		setRegister({ ...register, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
	register.photo = "www.google.com";
    console.log(register);
    apiRegister.add(register).then((data) => {
        
        console.log("impresion data",data)
          history.push("/login");
    });
  }

  return (
    
        <CustomMainForm
          title={"Register"}
        >
          <form onSubmit={handleSubmit}>
            <React.Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={register.name}
                    onChange={(event) => changeValueRegister(event)}
                    required
                    name="name"
                    label="Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={register.lastName}
                    onChange={(event) => changeValueRegister(event)}
                    required
                    name="lastName"
                    label="Last Name"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={register.email}
                    onChange={(event) => changeValueRegister(event)}
                    required
                    name="email"
                    label="Email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={register.age}
                    onChange={(event) => changeValueRegister(event)}
                    required
                    name="age"
                    label="Age"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={register.phone}
                    onChange={(event) => changeValueRegister(event)}
                    required
                    name="phone"
                    label="Phone Number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={register.password}
                    onChange={(event) => changeValueRegister(event)}
                    required
                    name="password"
                    label="Password"
					type = "password"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={register.rol}
                    onChange={(event) => changeValueRegister(event)}
                    required
                    name="rol"
                    label="Role"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={register.document}
                    onChange={(event) => changeValueRegister(event)}
                    required
                    name="document"
                    label="ID"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
			   <DropzoneArea/>
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
                  { "Ingresar"}
                </Button>
              </div>
            </React.Fragment>
          </form>
        </CustomMainForm>
   

  );
//} else {
    //return (<React.Fragment>Cargando</React.Fragment>)
  //}
}

export default Registerform;
