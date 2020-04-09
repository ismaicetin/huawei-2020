import {
  defaultFont,
  container,
  containerFluid,
  primaryColor,
  whiteColor, 
  warningColor,
  dangerColor
} from "assets/jss/material-dashboard-pro-react.js";

const footerStyle = {
  block: {},
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    margin: "0",
    fontSize: "14px",
    float: "right!important",
    padding: "15px"
  },
  footer: {
    background:
      "linear-gradient(60deg," + warningColor[1] + "," + warningColor[0] + ")",
    bottom: "0",
    borderTop: "1px solid " + dangerColor[0],
    padding: "15px 0",
    ...defaultFont,
    zIndex: 4
  },
  container: {
    zIndex: 3,
    ...container,
    position: "relative"
  },
  containerFluid: {
    zIndex: 3,
    ...containerFluid,
    position: "relative"
  },
  a: {
    color: primaryColor[0],
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0",
    width: "auto"
  },
  whiteColor: {
    "&,&:hover,&:focus": {
      color: whiteColor
    }
  },
  social: {
    display: "block", 
    textAlign:"right",
    padding:5, 

  },
  footerLeftArea: {
    width: "450px",
    position: "relative",
    marginTop: "10px",
    height: "45px",
    lineHeight: "20px"
  },
  iletisim: {
    position: "relative",
    marginTop: "10px",
    marginLeft: "50px",
    padding: "15px !important",
    color: "#000",
  },
  text1: {
    position: "absolute",
    top: "9px",
    color: "#000",
    fontWeight: "bold"
  },
  socialIconSize:{
    width:20,
    marginLeft:5
  }  ,
  logo:{  
    width:"150px"
  },
  appIcon:{
    width:"150px",
    height: "50px",
    padding:"5px"
  }
};
export default footerStyle;
