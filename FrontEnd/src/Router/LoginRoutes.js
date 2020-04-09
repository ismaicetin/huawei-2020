import { Route, Switch } from "react-router-dom";
import React from "react";
import HomePage from "../views/Default/HomePage";
import ErrorPage from "../views/Default/ErrorPage";
function Routes() {
    return (
        <Switch > 
            <Route exact path="/" component={HomePage} />
            <Route path="*" component={ErrorPage} />
        </Switch>
    )
}
 
export default Routes;


  