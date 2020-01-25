import React from 'react';
import CV from '../img/CV.jpg';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
 cv: {
     width:'100%'
 }
}));

const Resume = (props)=> {
    const classes = useStyles();
    return (
        <div>
            <h1>Resume updated Nov/2019</h1>
            <img src={CV} alt ='TZ_Resume'className={classes.cv} />
        </div>
    )
}

export default Resume