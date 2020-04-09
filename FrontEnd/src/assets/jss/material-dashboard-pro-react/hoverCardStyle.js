const hoverCardStyle = {
  cardHover: {
    "&:hover": {
      "& $cardHeaderHover": {
        transform: "translate3d(0, -10px, 0)"
      }
    },
  },
  cardHoverKurye: {
    "&:hover": {
      "& $cardHeaderHover": {
        transform: "translate3d(0, -10px, 0)"
      }
    },
    boxShadow: "none",
    borderRadius: "0px",
    background: "none"
  },
  cardHover2: {
    "&:hover": {
      "& $cardHeaderHover": {
        transform: "translate3d(0, -20px, 0)"
      }
    }
  },
  cardHoverHakkimizda: {
    "&:hover": {
      "& $cardHeaderHover": {
        transform: "translate3d(0, -20px, 0)"
      }
    },
    boxShadow: "none",
    borderRadius: "0px",
    background: "#fff"
  },
  cardHoverSSS: {
    "&:hover": {
      "& $cardHeaderHover": {
        transform: "translate3d(0, -20px, 0)"
      }
    },
    boxShadow: "none",
    borderRadius: "0px",
    background: "#fff !important"
  },
  cardHeaderHover: {
    transition: "all 300ms cubic-bezier(0.34, 1.61, 0.7, 1)",
    display: "flex",
    height: "65px"
  },
  cardHoverUnder: {
    position: "absolute",
    zIndex: "1",
    top: "-50px",
    width: "calc(100% - 30px)",
    left: "17px",
    right: "17px",
    textAlign: "center"
  }
};

export default hoverCardStyle;
