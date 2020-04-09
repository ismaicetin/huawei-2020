import { Route, Switch } from "react-router-dom"; 
import React from "react";
 
import LoginPage from "../views/Default/LoginPage1";
import Register from "../views/Default/Register";
function Routes() { 
    return (  
        <Switch >  
            <Route exact path="/" component={LoginPage} />   
            <Route exact path="/register" component={Register} />    
        </Switch> 
    ) 
}

// kartlar
// uniteler

export default Routes;


// Id
// Code                 
// Description
// Status