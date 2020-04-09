import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh"
    },
    header: {
        fontSize: "25px",
        textAlign: "center",
        display: "block"
    }

}));

export default function SpacingGrid() {
    const classes = useStyles();
    const [data, setData] = useState(2);
    const [err, setErr] = useState(2);

    // function that returns true if value is email, false otherwise
    const verifyEmail = (value) => {
        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRex.test(value)) {
            return true;
        }
        return false;
    }
    const verifyPhone = (value) => {
        var phoneRex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (phoneRex.test(value)) {
            return true;
        }
        return false;
    }
    // function that verifies if a string has a given length or not
    const verifyLength = (value, length) => {
        if (value.length >= length) {
            return true;
        }
        return false;
    }
    const handleChange = (event, stateName, type, stateNameEqualTo) => {
        var key = [stateName + "State"];
        var keyState = "";
        switch (type) {
            case "email":
                if (verifyEmail(event.target.value)) {
                    keyState = "success"

                } else {
                    keyState = "error"

                }
                break;
            case "length":
                if (verifyLength(event.target.value, stateNameEqualTo)) {
                    keyState = "success"
                } else {
                    keyState = "error"
                }
                break;
            case "phone":
                if (verifyPhone(event.target.value)) {
                    keyState = "success"
                } else {
                    keyState = "error"
                }
                break;
            case "select":
                if (event.target.value) {
                    keyState = "success"
                } else {
                    keyState = "error"
                }
                break;
            default:
                break;
        }

        setData({ ...data, [stateName]: event.target.value})

        setErr({ ...err,[key]: keyState })
        // this.setState({ [stateName]: event.target.value });
    }


    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.root}
        >
            <Grid item xs={5}>
                <Card >
                    <CardHeader

                        title={<span className={classes.header}>LOGIN</span>}

                    />
                    <CardContent>
                    {JSON.stringify(data)}
               
                        <TextField
                            name="username"
                            floatingLabelText="user name"
                            value={data.username}
                            onChange={(event)=>handleChange(event, "username", "email")}
                            errorText={err.username}
                        /> <br></br>
                        <TextField
                            name="username"
                            floatingLabelText="user name"
                            value={data.username}
                            onChange={(event)=>handleChange(event, "username", "email")}
                            errorText={err.username}
                        /> 
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}