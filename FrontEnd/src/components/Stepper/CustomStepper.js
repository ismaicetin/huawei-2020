import React from 'react';
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
// import SettingsIcon from "@material-ui/icons/Settings";
// import GroupAddIcon from "@material-ui/icons/GroupAdd";
// import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import CheckIcon from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
// import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '../../assets/img/avatar1.png'
const ColorlibConnector = withStyles({ 
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1
  }
})(StepConnector);

const HeaderConnector = withStyles({  
  line: {
    height: 0,
    border: 0, 
  }
})(StepConnector);



const useColorlibStepIconStyles = makeStyles({
  root: {
    border: "2px solid #fb0101",
    backgroundColor: "white",
    zIndex: 1,
    color: "black",
    fontWeight: "bold",
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",

  },
  active: {
    backgroundColor: "#ffdd00",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
  },
  sos: {
    background: "red",
    color: "white",
  },
  disabled: {
    backgroundColor: "#bcc1c1",
    border: "none",
  },
  kapali: {
    opacity: 0.3,
    filter: "grayscale(100%)"
  },
  reverse: {
    transform: "scaleX(-1)"
  },
  bggri: {
    backgroundColor: "#bcc1c1",
  },
  header: {
    //border: "2px solid #fb0101",
    backgroundColor: "yellow",
    zIndex: 1,
    color: "black",
    fontWeight: "bold",
    display: "flex", 
    justifyContent: "center",
    alignItems: "center", 
    padding:10,
    borderBottomRightRadius:"30%",
    width:"10vw",
    fontSize:"1.5vw"

  },
  bgNone:{
    backgroundColor: "transparent",
  }

});

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  stepCard: {
    backgroundColor: "transparent",
    padding: "8px",
    marginBottom: 5,
    border: "2px solid #bcc1c1",
    borderRadius: 25
  },
  header: {
    backgroundColor: "transparent",
    padding: "8px",
    marginBottom: 5,  
  }, 
}));


CustomizedSteppers.propTypes = {
  size: PropTypes.number.isRequired,
  kurye: PropTypes.object.isRequired,
};
export default function CustomizedSteppers(props) {
  const classes = useColorlibStepIconStyles();


  var user = props.kurye;
  var size = props.size;

  //   var user = {
  //     type: "rest_change",
  //     id: "1",
  //     state: 0,
  //     queue: 1,
  //     first_name: "ismail",
  //     last_name: "cetin",
  //     pic_profile:
  //       "https://image.shutterstock.com/image-vector/light-bulb-line-icon-vector-260nw-416374336.jpg",
  //     remaining_order: 2,
  //     distance: "22:25"
  //   };
  var stepArray = [100, 0, 0, 0, 0]



  if (user.state == 0) {//Kapalı
    stepArray = [101, 0, 0, 0, 0]
  } else if (user.state == 1) {//Sırada
    stepArray = [100, 1, 0, 0, 0]
  } else if (user.state == 2) {//Serviste
    stepArray = [100, 0, 2, 4, 0]
  } else if (user.state == 3) {//Dönüşte
    stepArray = [100, 0, 3, 5, 6]
  } else if (user.state == 4) {//Sıradan Çıkmış
    stepArray = [100, 7, 0, 0, 0]
  } else if (user.state == 5) {//SOS
    stepArray = [100, 99, 99, 99, 99]
  }


  // state
  //   ("0", 'Kapalı'),
  // ("1", 'Sırada'),
  // ("2", 'Serviste'),
  // ("3", 'Dönüşte'),
  // ("4", 'Sıradan Çıkmış'),
  // ("5", 'SOS'),
  // )
  function header(props) {
    return (
      <div className={clsx( classes.header, classes.disabled,
        {
        [classes.bgNone]: !props.title, 
      } )}  >
        { props.title }
      </div>
    );
  }
  function StepBos0(props) {
    return (
      <div className={clsx(classes.root, classes.disabled)} style={{ width: size, height: size }}>
      </div>
    );
  }
  function StepIconProfile100(props) {
    return (
      <div >
       {user.pic_medium_abs_url ? <img
          className={classes.root}
          style={{ width: size, height: size, border: "3px solid #fb0101!important" }}
          src={user.pic_medium_abs_url} />:
          <img
          className={classes.root}
          style={{ width: size, height: size, border: "3px solid #fb0101!important" }}
          src={Avatar} />}

          
      </div>
    );
  }
  function StepSrada1(props) {
    return (
      <div
        className={clsx(classes.root)}
        style={{ width: size, height: size, fontSize: size / 2 }}
      >
        {user.queue}
      </div>
    );
  }
  function StepYolda2(props) {
    return (
      <div
        className={clsx(classes.root)}
        style={{ width: size, height: size, }}
      >
        <img
          className={classes.root}
          style={{ width: size, height: size, }}
          src="https://media1.giphy.com/media/S0w2pBxWWJroc/giphy.gif"
        />
      </div>
    );
  }
  function StepYolda3(props) {
    return (
      <div
        className={clsx(classes.root)}
        style={{ width: size, height: size, }}
      >
        <img
          className={classes.root + " " + classes.reverse}
          style={{ width: size, height: size, }}
          src="https://media1.giphy.com/media/S0w2pBxWWJroc/giphy.gif"
        />
      </div>
    );
  }
  function StepTeslimat4(props) {
    return (
      <div
        className={clsx(classes.root)}
        style={{ width: size, height: size, fontSize: size / 2 }}
      >
        {user.remaining_order}
      </div>
    );
  }
  function StepTeslimat5(props) {
    return (
      <div
        className={clsx(classes.root)}
        style={{ width: size, height: size, }}
      >
        <CheckIcon style={{ width: size, height: size, fontSize: size / 2 }} />
      </div>
    );
  }
  function StepDonusDakika6(props) {
    return (
      <div
        className={clsx(classes.root)}
        style={{ width: size, height: size, fontSize: size / 2 }}
      >
        {user.time.convertTime()}<small style={{fontSize: size / 4}}>dk</small>
      </div>
    );
  }
  function StepDonusDakika7(props) {
    return (
      <div
        className={clsx(classes.root, classes.bggri)}
        style={{ width: size, height: size, fontSize: size / 4 }}
      >
        MOLA
      </div>
    );
  }
  function StepSOS99(props) {
    return (
      <div className={clsx(classes.root, classes.sos)} style={{ width: size, height: size, }}>
        <CloseIcon style={{ width: size, height: size, fontSize: size / 2 }} />
      </div>
    );
  }
  function StepKapali101(props) {
    return (
      <div >
        <img
          className={clsx(classes.root, classes.kapali)}
          style={{ width: size, height: size, }}
          src={user.pic_profile} />
      </div>
    );
  }


  function getsteps(id) {
    if (id === 100) {
      return (<StepLabel StepIconComponent={StepIconProfile100}></StepLabel>);
    } else if (id === 1) {
      return <StepLabel StepIconComponent={StepSrada1}></StepLabel>;
    } else if (id === 2) {
      return <StepLabel StepIconComponent={StepYolda2}></StepLabel>;
    } else if (id === 3) {
      return <StepLabel StepIconComponent={StepYolda3}></StepLabel>;
    } else if (id === 4) {
      return (<StepLabel StepIconComponent={StepTeslimat4}></StepLabel>);
    } else if (id === 5) {
      return <StepLabel StepIconComponent={StepTeslimat5}></StepLabel>;
    } else if (id === 6) {
      return <StepLabel StepIconComponent={StepDonusDakika6}></StepLabel>;
    } else if (id === 7) {
      return <StepLabel StepIconComponent={StepDonusDakika7}></StepLabel>;
    } else if (id === 99) {
      return <StepLabel StepIconComponent={StepSOS99}></StepLabel>;
    } else if (id === 101) {
      return <StepLabel StepIconComponent={StepKapali101}></StepLabel>;
    } else {
      return <StepLabel StepIconComponent={StepBos0}> </StepLabel>;
    }
  }
  const classess = useStyles();
  if (props.header) {
    return (
      <div className={classess.root}>
        <Stepper connector={<HeaderConnector />} className={classess.header}>
          <Step >
          <StepLabel icon={header({title:""})  } >  </StepLabel> 
          </Step>
          <Step >
            <StepLabel icon={header({title:"SIRA"})  } >  </StepLabel> 
          </Step>
          <Step >
            <StepLabel icon={header({title:"YOLDA"})  } >  </StepLabel> 
          </Step>
          <Step >
            <StepLabel icon={header({title:"TESLİMAT"})  } >  </StepLabel> 
          </Step>
          <Step >
            <StepLabel icon={header({title:"DAKiKA"})  } >  </StepLabel> 
          </Step>
        </Stepper>
      </div>
    )
  } else {
    return (
      <div className={classess.root}>
        <Stepper connector={<ColorlibConnector />} className={classess.stepCard}>
          {/* <Step >
              <StepLabel StepIconComponent={Iconsccaa}>  </StepLabel> 
            </Step> */}

          {stepArray.map(item => (
            <Step key={item}>{getsteps(item)}</Step>
          ))}
        </Stepper>
      </div>
    )
  };
}
