import {
  container,
  defaultFont,
  cardTitle,
  roseColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "assets/jss/material-dashboard-pro-react.js";

const pricingPageStyle = theme => ({
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px"
    }
  },
  title: {
    ...defaultFont,
    color: whiteColor,
    marginTop: "5vh",
    marginBottom: "30px",
    textAlign: "center"
  },
  description: {
    fontSize: "18px",
    color: whiteColor,
    textAlign: "center"
  },
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + " !important"
  },
  cardCategory: {
    display:"flex",
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
  text: {
    paddingLeft:8,
    fontWeight: 500,
    color: "black"
  },
  iconRose: {
    margin: "auto",
    color: roseColor[0],
    borderRadius:" 50%"  
  },
  marginTop30: {
    marginTop: "30px"
  },
  cardDescription: {
    marginTop: "30px",
    textAlign:"center"
  }
});

export default pricingPageStyle;
