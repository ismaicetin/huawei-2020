import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  boxShadow,
  drawerWidth,
  transition,
  whiteColor,
  grayColor,
  blackColor,
  hexToRgb, 
  vinLezzetRed,
  vinLezzetYellow
} from "assets/jss/material-dashboard-pro-react.js";
 

const pagesHeaderStyle = theme => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    top:0,
    position: "absolute",
    width: "100%",
    paddingTop: "10px",
    zIndex: "1029",
    color: grayColor[6],
    border: "0",
    borderRadius: "3px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block",
    background:"red"

  },

  container: {
    ...container,
    background: "#fff",
    height: "80px !important",
    opacity: "0.8",
    width: "100% !important",
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
    color: blackColor,
    letterSpacing: "unset",
    "&:hover,&:focus": {
      background: "transparent",
      color: whiteColor
    }
  },
  appResponsive: {
    top: "8px"
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
  white: {
    backgroundColor: "transparent",
    color: whiteColor,
    boxShadow: "none",
   // borderBottom:"1px solid",
    // ...defaultBoxShadow
  } ,
  whiteShaDow: {
    backgroundColor: "#fbfbfb",
    color: whiteColor, 
   // borderBottom:"1px solid",
      ...defaultBoxShadow
  } ,
  transparent: {
    backgroundColor: "transparent", 
    // ...defaultBoxShadow
  }, 
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  rose: {
    backgroundColor: "#e91e63",
    color: whiteColor,
    ...defaultBoxShadow
  },
  vinLezzetRed  : {
    backgroundColor: vinLezzetRed,
    color: whiteColor,
    ...defaultBoxShadow
  },
  vinLezzetYellow: {
    backgroundColor: vinLezzetYellow,
    color: whiteColor,
    ...defaultBoxShadow
  },
  list: {
    ...defaultFont,
    borderRadius: "25px 25px 25px 25px",
    fontSize: "14px",
    margin: 0,
    marginRight: "-15px",
    paddingLeft: "0",
    listStyle: "none",
    color: blackColor,
    backgroundColor: dangerColor[0],
    paddingTop: "0",
    paddingBottom: "0",  
    display:"flex",
    alignItems:"center",
  },
  listItem: {
    float: "left",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      zIndex: "999",
      width: "100%",
      paddingRight: "10px"
    }
  },
  navLink: {
    color:blackColor ,
    margin: "0 5px",
    paddingTop: "8px",
    paddingBottom: "8px",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    position: "relative",
    display: "block",
    padding: "10px 15px",
    textDecoration: "none",
    "&:hover,&:focus": {
      color: whiteColor,
      background: "rgba(" + hexToRgb(grayColor[17]) + ", 0.2)"
    }
  },
  listItemIcon: {
    marginTop: "-3px",
    top: "0px",
    position: "relative",
    marginRight: "3px",
    width: "20px",
    height: "20px",
    verticalAlign: "middle",
    color: "inherit",
    display: "inline-block"
  },
  listItemText: {
    flex: "none",
    padding: "0",
    minWidth: "0",
    margin: 0,
    fontSize: "18px",
    color: "#000",
    zIndex: "999",
    fontWeight: "bold",
    display: "inline-block",
    position: "relative",
    whiteSpace: "nowrap",
    marginTop: 10,
  },
  navLinkActive: {
    backgroundColor: "rgba(" + hexToRgb(whiteColor) + ", 0.1)"
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    ...boxShadow,
    width: drawerWidth,
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition,
    "&:before,&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      top: "0"
    },
    "&:after": {
      background: whiteColor,
      opacity: ".8"
    } ,
     "& .makeStyles-list-17": { 
      display: "block",
      
    },
    
  }, 
  sidebarButton: {
    "&,&:hover,&:focus": {
      color: blackColor
    },
    top: "-2px"
  },
  social: {
    display: "block", 
    textAlign:"right",
    padding:5,
    paddingRight:50,

  },
  // socialLink: {
  //   background: "#d1eef5 !important",
  // },
  socialIconHeader:{
    width:20,
    marginLeft:5,
    borderRadius: "50%"
  }  ,
  logo:{  
    width:"230px",
    zIndex: "999",

  }

});

export default pagesHeaderStyle;
