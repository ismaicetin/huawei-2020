import React, { useContext, useEffect } from 'react';
// nodejs library to set properties for components
import PropTypes from "prop-types";
import cx from "classnames"; 
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList"; 

import { withRouter, NavLink } from 'react-router-dom';

// @material-ui/core dialog components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// import { useHistory } from "react-router-dom";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
// import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";

// material-ui icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Menu from "@material-ui/icons/Menu";
// import MoreVert from "@material-ui/icons/MoreVert";
// import ViewList from "@material-ui/icons/ViewList";
import Drawer from "@material-ui/core/Drawer";

 
import { LoginContext } from "../../context/LoginContext"


// core components
import AdminNavbarLinks from "./AdminNavbarLinks";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-pro-react/components/adminNavbarStyle.js";

const useStyles = makeStyles(styles);

function AdminNavbar(props) {
   const login = useContext(LoginContext);
   // const history = useHistory();
   const classes = useStyles();
   const [open, setOpen] = React.useState(false);
   const [openProfile, setOpenProfile] = React.useState(null);
   const [openNotification, setOpenNotification] = React.useState(null)
   const [openModal, setOpenModal] = React.useState(false);
  
   let currentUserDelivery = JSON.parse(sessionStorage.getItem("currentUser")); 
   const [checked, setChecked] = React.useState(currentUserDelivery);

 
   const handleDrawerToggle = () => {
      setOpen(!open);
   };

   const handleCloseProfile = () => {
      setOpenProfile(null);
   };
   const handleClickProfile = event => {
      if (openProfile && openProfile.contains(event.target)) {
         setOpenProfile(null);
      } else {
         setOpenProfile(event.currentTarget);
      }
   };

   const logoutProfile = async (e) => { 
      localStorage.removeItem("currentUser"); 
      sessionStorage.removeItem("token"); 
      window.location.href = '/';

   }


   const { color, brandText } = props;
   const appBarClasses = cx({
      [" " + classes[color]]: color
   }); 
   function handleCloseModal() {
 
      setOpenModal(false);
   }
   
 

   return (
      <AppBar className={classes.appBar + appBarClasses}>
         <Toolbar className={classes.container}>
         
            <div className={classes.flex}>
               {/* Here we create navbar brand, based on route name */}
               <Button href="/" className={classes.title} color="transparent">
                  {brandText}   --> {login.context.FullName}
               </Button>
            </div>




            <div implementation="css" className={classes.menu}>
               <Hidden smDown><AdminNavbarLinks handleDrawerToggle={handleDrawerToggle} /></Hidden>

                
               <div className={classes.managerClasses}>
                  <Button color="transparent" justIcon onClick={handleClickProfile}  >
                     <Person />
                  </Button>
                  <Popper
                     open={Boolean(openProfile)}
                     anchorEl={openProfile}
                     transition
                     disablePortal
                     placement="bottom-end"
                  >
                     <Paper className={classes.dropdown}>
                        <ClickAwayListener onClickAway={handleCloseProfile}>
                           <MenuList role="menu"> 
                            
                             
                              <Divider light />
                              <MenuItem onClick={logoutProfile} >   Çıkış </MenuItem>
                           </MenuList>
                        </ClickAwayListener>
                     </Paper>
                  </Popper>
               </div>
 

            </div>
            <Hidden mdUp implementation="css">
               <Button
                  className={classes.appResponsive}
                  color="transparent"
                  justIcon
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
               >

                  <Menu />
               </Button>
            </Hidden>

            <Hidden mdUp>

               <Drawer
                  variant="temporary"
                  anchor={"right"}
                  open={open}
                  classes={{
                     paper: classes.drawerPaper
                  }}
                  style
                  onClose={handleDrawerToggle}
                  ModalProps={{
                     keepMounted: true // Better open performance on mobile.
                  }}
               >
                  <AdminNavbarLinks handleDrawerToggle={handleDrawerToggle}/>
               </Drawer>
            </Hidden>               

           
         </Toolbar>
      </AppBar>
   );
}

AdminNavbar.propTypes = {
   color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
   rtlActive: PropTypes.bool,
   brandText: PropTypes.string,
   miniActive: PropTypes.bool,
   handleDrawerToggle: PropTypes.func,
   sidebarMinimize: PropTypes.func
};


export default withRouter(AdminNavbar);
