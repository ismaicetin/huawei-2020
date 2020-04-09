import React ,{useEffect} from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(styles);


export default function ErrorPage() {
  useEffect(()=>{
    setTimeout(function(){
       window.location.href="/" ;
      }, 3000);

  },[])

  const classes = useStyles();
  return (
    <div className={classes.contentCenter}>
      <GridContainer >
        <GridItem xs={12}>
          <h1 className={classes.title}>404</h1>
          <h2 className={classes.subTitle}>Sayfa Bulunamadı :(</h2>
          <h4 className={classes.description}>
            Ooooups! Birşeyler Ters Gitmiş Olabilir Lutfen AnaSayfaya Gidiniz
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
