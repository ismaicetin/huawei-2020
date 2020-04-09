
/*eslint-disable*/
import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import {LocationOn,Phone,Language} from "@material-ui/icons";
import { NavLink, Route } from "react-router-dom";
  
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

 

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-dashboard-pro-react/components/footerStyle.js";
 

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { fluid, white, rtlActive } = props;
  const [intervalId, setIntervalId] = useState(0);
  var container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white
  });
  var anchor =
    classes.a +
    cx({
      [" " + classes.whiteColor]: white
    });
  var block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white
  });

  
  return (
    <footer className={classes.footer} style={{background: `url(${footer_image}) no-repeat fixed center`}}>
      <div className={container}>

        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <GridItem xs={6} sm={6} md={6} className={classes.iletisim}>
              <span style={{fontSize: "20px", textAlign: "center", fontWeight: "bold"}}>İletişim Bilgileri</span>
            </GridItem>

            <GridItem xs={12} sm={12} md={12} className={classes.footerLeftArea}>
              <LocationOn style={{fontSize: "28px", color: "#000"}} /> <span className={classes.text1}>Adres: Archerson Köşkü Zühtüpaşa Mahallesi Şefikbey sokak 3 </span>
            </GridItem>

            <GridItem xs={12} sm={12} md={12} className={classes.footerLeftArea}>
              <Language style={{fontSize: "28px", color: "#000"}} /> <span className={classes.text1}>info@vintakip.com </span>
            </GridItem>

            <GridItem xs={12} sm={12} md={12} className={classes.footerLeftArea}>
              <Phone style={{fontSize: "28px", color: "#000"}} /> <span className={classes.text1}> 0850 241 14 05 </span>
            </GridItem>

            <GridItem xs={12} sm={12} md={12} className={classes.footerLeftArea}>
            <NavLink  to={"/gizlilik"}>
              <span style={{fontWeight: "bold", fontSize: "21px", color: "black"}} onClick="scroll(0, 100)">Gizlilik Politikası</span>
            </NavLink>
            </GridItem>

          </GridItem>
          
          
        </GridContainer>

      </div>
    </footer>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool
};
