import React from 'react';
import CV from '../img/CV.png';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
 cv: {
     width:'100%',
     color :'#3399ff'
 }
}));

const Resume = (props)=> {
    const classes = useStyles();
    return (
        <div className={classes.cv}>
            <h5 style={{color: '#003d99'}}>Resume updated Feb/2020</h5>
            <img src={CV} alt ='TZ_Resume'className={classes.cv} />
        </div>
    )
}

export default Resume