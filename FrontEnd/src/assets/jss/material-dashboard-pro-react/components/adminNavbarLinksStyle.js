import {
  defaultFont,
  dangerColor,
  whiteColor,       
  grayColor,
  blackColor,
  hexToRgb,  
} from "assets/jss/material-dashboard-pro-react.js";

import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/customDropdownStyle.js";
// import { redditColor } from "assets/jss/material-dashboard-pro-react";

const adminNavbarLinksStyle = theme => ({
  ...customDropdownStyle(theme),
  search: {
    margin: "0",
    paddingTop: "7px",
    paddingBottom: "7px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 15px",
      float: "none !important",
      paddingTop: "1px",
      paddingBottom: "1px",
      padding: "10px 15px",
      width: "auto"
    }
  },
  searchInput: {
    paddingTop: "2px"
  },
  searchRTL: {
    [theme.breakpoints.down("sm")]: {
      marginRight: "18px !important"
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "12px"
    }
  },
  linkText: {
    zIndex: "4",
    ...defaultFont,
    fontSize: "14px",
    margin: "0!important",
    textTransform: "none"
  },
  buttonLink: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      margin: "5px 15px 0",
      width: "auto",
      height: "auto",
      "& svg": {
        width: "30px",
        height: "24px",
        marginRight: "19px",
        marginLeft: "3px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        width: "30px",
        fontSize: "24px",
        lineHeight: "30px",
        marginRight: "19px",
        marginLeft: "3px"
      }
    }
  },
  searchButton: {
    [theme.breakpoints.down("sm")]: {
      top: "-50px !important",
      marginRight: "38px",
      float: "right"
    }
  },
  top: {
    zIndex: "4"
  },
  searchIcon: {
    width: "17px",
    zIndex: "4"
  },
  links: {
    width: "20px",
    height: "20px",
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: "30px",
      height: "30px",
      color: "inherit",
      opacity: "0.8",
      marginRight: "16px",
      marginLeft: "-5px"
    }
  },
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
  wrapperRTL: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "16px"
    }
  },
  buttonLinkRTL: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "flex-end",
      width: "-webkit-fill-available",
      margin: "10px 15px 0",
      padding: "10px 15px",
      display: "block",
      position: "relative"
    }
  },
  labelRTL: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row-reverse",
      justifyContent: "initial",
      display: "flex"
    }
  },
  linksRTL: {
    [theme.breakpoints.down("sm")]: {
      marginRight: "-5px !important",
      marginLeft: "16px !important"
    }
  },
  managerClasses: {
    [theme.breakpoints.up("md")]: {
      display: "inline-block"
    }
  },
  headerLinksSvg: {
    width: "20px !important",
    height: "20px !important"
  },
  menu:{
    justifyContent: "center",
    alignItems: "center",
    display: "inline-flex",
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
    backgroundColor: dangerColor,
    paddingTop: "0",
    paddingBottom: "0"
  },
  listItem: {
    float: "left",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    }
  },
  navLink: {
    color: whiteColor,
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
      color: blackColor,
      background: "rgba(" + hexToRgb(grayColor[17]) + ", 0.2)"
    },
    [theme.breakpoints.down("sm")]: {
      color: blackColor,
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
    display: "inline-block",
    position: "relative",
    whiteSpace: "nowrap"
  },
  navLinkActive: {
    backgroundColor: "rgba(" + hexToRgb(whiteColor) + ", 0.1)"
  },
});

export default adminNavbarLinksStyle;
