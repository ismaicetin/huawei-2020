import React, { useState, useContext, useEffect, } from 'react';
import { LoginContext } from "../../context/LoginContext"
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";
import GridContainer from "components/Grid/GridContainer.js";
import CardIcon from "components/Card/CardIcon.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardFooter from '@material-ui/core/CardActions';


// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardFooter from "components/Card/CardFooter.js";
import { withRouter } from 'react-router-dom';
import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import loginService from "../../services/login.service"
import { SnackbarProvider, useSnackbar } from 'notistack';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';

// import AuthContext from "../../context/AuthContext"
const useStyles = makeStyles(styles);


function LoginPage(props) {
    const { enqueueSnackbar } = useSnackbar();
    const login = useContext(LoginContext);

    const [cardAnimaton, setCardAnimation] = useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const [data, setData] = useState(2);
    const [err, setErr] = useState(2);

    const handleSubmit = async (e) => {

        loginService.register(data).then((response) => {
            if (response.status == 200) {
                localStorage.setItem("currentUser", JSON.stringify(response.data));
                    sessionStorage.setItem('token', response.data.token)
                    window.location.href = "/"
            } else {
                enqueueSnackbar(response.messages || "LOGIN ERROR", { variant: "error", preventDuplicate: true });
            }

            //props.history.push('/'); 
        })


    }






    const verifyEmail = (value) => {
        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRex.test(value)) {
            return true;
        }
        return false;
    }

    const verifyLength = (value, length) => {
        if (value.length >= length) {
            return true;
        }
        return false;
    }
    const handleChange = (event, stateName, type, stateNameEqualTo) => {
        var key = [stateName];
        var keyState = "";
        switch (type) {
            case "email":
                if (verifyEmail(event.target.value)) {
                    keyState = true

                } else {
                    keyState = false

                }
                break;
            case "length":
                if (verifyLength(event.target.value, stateNameEqualTo)) {
                    keyState = true
                } else {
                    keyState = false
                }
                break;
            default:
                break;
        }

        setData({ ...data, [stateName]: event.target.value })

        setErr({ ...err, [key]: keyState })

    }


    return (

        <div className={classes.container}>
            <GridContainer justify="center" style={{ marginTop: "30px" }}>

                <GridItem xs={12} sm={6} md={6}>

                    <Card login className={classes[cardAnimaton]}>
                        <CardHeader title="Register" />

                        <CardContent>

                            <TextField
                                error={!err.UserName}
                                fullWidth
                                label="UserName"
                                value={data.UserName}
                                onChange={(event) => handleChange(event, "UserName", "email")}

                            />
                            <TextField
                                error={!err.Password}
                                fullWidth
                                label="Password"
                                type="password"
                                value={data.Password}
                                onChange={(event) => handleChange(event, "Password", "length", 3)}

                            />
                            <TextField
                                error={!err.FirstName}
                                fullWidth
                                label="FirstName"
                                value={data.FirstName}
                                onChange={(event) => handleChange(event, "FirstName", "length", 3)}

                            />
                            <TextField
                                error={!err.LastName}
                                fullWidth
                                label="LastName"
                                value={data.LastName}
                                onChange={(event) => handleChange(event, "LastName", "length", 3)}

                            />

                        </CardContent>
                        <CardFooter className={classes.justifyContentCenter}>
                            <Button
                                variant="contained"
                                disabled={!err.UserName || !err.Password || !err.FirstName || !err.LastName}
                                color="secondary"
                                fullWidth
                                onClick={handleSubmit}>
                                Kayıt Ol ve Giriş Yap
                                </Button>


                        </CardFooter>
                        {/* {error && <Alert severity="error">{errorType}</Alert>} */}
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}


export default withRouter(LoginPage);

