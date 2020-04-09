import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import styles from "assets/jss/material-dashboard-pro-react/components/authNavbarStyle.js";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(styles);

export default function SimplePopover({Icon,dropdownList,text}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>

    <NavLink  onClick={handleClick} className={classes.navLink}>
           <Icon className={classes.listItemIcon} /> 
          <ListItemText
            primary={text}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>

    
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >

      {dropdownList }
        

      </Popover>
    </div>
  );
}