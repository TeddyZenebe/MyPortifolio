import React from 'react';
import CV from '../img/CV_TZ_geoV.PNG';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
 cv: {
     width:'80%',
     color :'#3399ff',
     textAlign: 'center',
      
 }
}));

const Resume = (props)=> {
    const classes = useStyles();
    return (
        <div className={classes.cv}>
            <h5 style={{color: '#003d99'}}>Resume updated Feb/2021</h5>
            <img src={CV} alt ='TZ_Resume' className={classes.cv} />
        </div>
    )
}

export default Resume