import {
  containerFluid,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,   
  grayColor, 
  drawerWidth,
} from "assets/jss/material-dashboard-pro-react.js";

const headerStyle = (theme) => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "sticky",
    width: "100%",
    paddingTop: "10px",
    zIndex: "1029",
    color: grayColor[6],
    border: "0",
    borderRadius: "3px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block"
  },
  container: {
    ...containerFluid,
    minHeight: "50px"
  },
  flex: {
    flex: 1
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    paddingTop: "0.625rem",
    paddingBottom: "0.625rem",
    margin: "0 !important",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      background: "transparent"
    }
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  sidebarMinimize: {
    float: "left",
    padding: "0 0 0 15px",
    display: "block",
    color: grayColor[6]
  },
  sidebarMinimizeRTL: {
    padding: "0 15px 0 0 !important"
  },
  sidebarMiniIcon: {
    width: "20px",
    height: "17px"
  }, 
  managerClasses: {
    [theme.breakpoints.up("md")]: {
      display: "inline-block"
    }
  } ,
  notifications: {
    zIndex: "4",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "5px",
      border: "1px solid " + whiteColor,
      right: "5px",
      fontSize: "9px",
      background: dangerColor[0],
      color: whiteColor,
      minWidth: "16px",
      height: "16px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "14px",
      verticalAlign: "middle",
      display: "block"
    },
    [theme.breakpoints.down("sm")]: {
      ...defaultFont,
      fontSize: "14px",
      marginRight: "8px"
    }
  },
  menu:{
    justifyContent: "center",
    alignItems: "center",
    display: "inline-flex",
  },  
  drawerPaper: {
    width: drawerWidth, 
    overflow:"hidden"
    
  }, 
  panel1aHeader:{
    position: "initial", 
    boxShadow: "none"
  }, 
  flexDirectionColumn:{
    flexDirection: "column",
    padding: "0px",
    paddingLeft: "20px",
    marginTop: "-15px", 
    marginBottom: "-5px"
  },
  listItemText:{
    color:"black!important"
  }



});

export default headerStyle;
