import React, { useEffect, useState } from 'react';
import { Fab } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

var styles = {
    color: {
        background: "#28a745",
        '&:hover': {
            background: "#0a7a24"
        }
    }
}


const useStyles = makeStyles(styles);

function Helper(props) {
    const classes = useStyles();
    var [position, setPosition] = useState(30);

    useEffect(() => {
        var size = window.innerWidth
        if (size < 400) {
            setPosition(18)
        }
    }, [])

    return (
        <div style={{
            cursor: "pointer",
            position: "absolute",
            right: position,
            bottom: position,
            height: "50px",
            width: "50px",
            fontSize: "3px",
            color: "#676767",
            zIndex: 99
        }}>
            <Fab
                className={classes.color}
                style={{
                    borderRadius: "50%",
                    fontSize: "30px",
                    color: "white"
                }}
                href="https://wa.me/908502411405"
                target="_blank" >
                <i class="fab fa-whatsapp"></i>
            </Fab>
        </div>
    );
}

export default Helper 