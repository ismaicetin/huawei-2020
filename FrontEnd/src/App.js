import React from "react";
import { createBrowserHistory } from "history";
import { Route, Router } from "react-router-dom";
import "./app.css"
import "assets/scss/material-dashboard-pro-react.scss?v=1.8.0";
import AdminNavbar from "./components/Navbars/AdminNavbar";
import DefaultRoutes from "./Router/DefaultRoutes";
import LoginRoutes from "./Router/LoginRoutes";
import LoginContext from "./context/LoginContext"
import { SnackbarProvider, useSnackbar } from 'notistack';
import LoginPage from "./views/Default/LoginPage1";


const useStyles={
    root:{ height: "100vh", overflow: "auto " },
    snackbar:{ vertical: 'bottom',  horizontal: 'right', },
    routerr:{ width: "100%", minHeight: "80vh" },
  }

function App() {
    const hist = createBrowserHistory();
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser == null && window.location.pathname !== "/") {
        window.location.href = '/';
    } 
    return (
        <div style={useStyles.root}>
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={useStyles.snackbar}>
                <LoginContext>
                    <Router history={hist}>
                        {currentUser == null ? 
                            <DefaultRoutes /> :
                            <>
                                <AdminNavbar color="info" brandText={JSON.parse(currentUser).UserName} />
                                <div style={useStyles.routerr}>
                                    <LoginRoutes />
                                </div>
                            </>
                        }
                    </Router>
                </LoginContext>
            </SnackbarProvider>
        </div>
    )
}
export default App





// var UserSchema = new Schema({
//     UserName: { type: String, required: false},
//     Password: { type: String, required: false },
//     FirstName: { type: String, required: false },
//     LastName: { type: String, required: false},
//     isAdmin: { type: Boolean, default: false }
// }, { versionKey: false })

// var TodoSchema = new Schema({
//     Name: { type: String, required: false, default: null },
//     State: { type: Boolean, default: true },
//     TodoItem:[{ type: Schema.Types.ObjectId, ref: 'TodoItem', default: []}]
// }, { versionKey: false })

// var TodoItemSchema = new Schema({
//     Name: { type: String, required: false },
//     Description: { type: String,   default: "" },
//     Deadline: { type: String, required: false },
//     State: { type: Boolean, default: true },
// }, { versionKey: false })
