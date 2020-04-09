import {
  container,
  defaultFont,
  cardTitle,
  roseColor,
  whiteColor,
  blackColor,
  grayColor,
  hexToRgb
} from "assets/jss/material-dashboard-pro-react.js";
// import aa from "../../../img/card-2.jpeg"

import hoverCardStyle from "assets/jss/material-dashboard-pro-react/hoverCardStyle.js";
// import foto_web from "../../../img/foto_web.png";

const homePageStyle = theme => ({
  ...hoverCardStyle,
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px",
      //background:"red"
      
    }
  },
  title: {
    ...defaultFont,
    color: blackColor,
    marginTop: "5vh",
    marginBottom: "30px",
    textAlign: "center"
  },
  description: {
    fontSize: "18px",
    color: blackColor,
    textAlign: "center"
  },
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + " !important"
  },
  cardCategory: { 
    color: grayColor[0], 
    alignItems: "center", 
    
     
  },
  cardCategoryWhite: {
    color: whiteColor, 
  },
  icon: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)", 
    width: "50px",
    height: "50px",
    border: "1px solid " + grayColor[11],
    borderRadius: "50%", 
    display: "flex"
  },
  iconWhite: {
    color: whiteColor
  },
  gridStyle: {
    marginTop: "40px"
  },
  text: {
    paddingLeft:8,
    fontWeight: 500, 
    textAlign:"center",
    display:"block",
    color: "#FF0000",
  },
  colorRed:{
    color: "#FF0000",
    fontWeight: 500, 
  },
  
  mainDiv: {
    background: "#f9ffff",
    //position: "relative"
  },

  iconRose: {
    margin: "auto",
    color: roseColor[0],
    borderRadius:" 50%"  
  },
  iconImage: {
    maxWidth:"160px",
    margin:"auto",
    boxShadow:"none!important"
  },
  imgKurye: { 
    maxWidth: "100%",
    boxShadow:"none !important"
  },
  homePageDiv: {
    fontSize: "23px",
    lineHeight: "30px",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      paddingTop:"31px!important",
      textAlign: "center",
      
      //background:"red"
      
    } 
  }, 
  homePageVINTAKIPRow: { 
    background: "#ffffff8c" ,
    borderRadius: "39px" 
  },
  
  marginTop30: {
    marginTop: "30px"
  },
  cardDescription: {
    marginTop: "30px",
    textAlign:"center"
  },imageMarginTop:{
      marginTop:40,
  },
  topContainerImage:{
    width:"100%"
  },
  aciklama:{
    borderRadius:8,
    padding:8
  },
  
});

export default homePageStyle;
