import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CustomTextField from "../../components/custom-text-field/custom-text-field";
import CustomMainForm from "../../components/form/custom-main-form";
import { Response_login } from "../../models/response_login";

import { Link, useHistory, useParams } from "react-router-dom";
import apiLogin from "../../api/api.login";
import { Login } from "../../models/login-form";
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';

function Loginform() {
  const history = useHistory();
  if (localStorage.getItem('ppid') || localStorage.getItem('bid')) {
    history.push('dashboard');
  }
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [login, setLogin] = useState<Login>(new Login());
  const [response_login,setResponse_login] = useState<Response_login>(new Response_login());

  const { id } = useParams<{ id: string }>();

  const [ppid, setppid] = useState(
    localStorage.getItem('ppid')
  );
  const [bid, setbid] = useState(
    localStorage.getItem('bid')
  );

  function changeValueLogin(
      event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) 
    {
    //console.log(login);
    const { value, name } = event.target;
    setLogin({ ...login, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    console.log(login);
    apiLogin.add(login).then((data) => {
        
        setResponse_login(data)
        console.log("impresion data",data)

        
    if(data.rolId==0){
        //person profile
        let idstr : string=String(data.idf)
        localStorage.setItem('ppid',idstr)
    }else{
        //busines
        let idstr : string=String(data.idf)
        localStorage.setItem('bid',idstr)
    }
        ;
        
      
        history.push("/dashboard");
    });
  }

  function updatedLoading() {
    setLoading(false);
    setOpen(true);
  }

  useEffect(() => {
    
  }, []);
  
  //if (response_login.idf) {

  return (
    
        <CustomMainForm
          title={"Login"}
        >
          <form onSubmit={handleSubmit}>
            <React.Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={login.username}
                    onChange={(event) => changeValueLogin(event)}
                    required
                    name="username"
                    label="User"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    value={login.password}
                    onChange={(event) => changeValueLogin(event)}
                    required
                    name="password"
                    label="Password"
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
                  { "Ingresar"}
                </Button>
                <Button
                  component={Link}
                  to={`/register`}
                  variant="outlined"
                  color={"primary"}
                  startIcon={<VpnKeyOutlinedIcon />}
                  disabled={loading}
                >
                  {"Registro"}
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

export default Loginform;
