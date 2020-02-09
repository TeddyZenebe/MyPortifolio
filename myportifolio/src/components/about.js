import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'
import teddyImg from '../img/teddy2.jpg'
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  
    about : {
        width: '100%',
        display: 'flex',
        fontSize: '1.2rem',
      },
    abouTeddyInt : {
        width: '50%',
        textAlign: 'left',
        fontFamily: 'Sofia',
        color: '#003d99',
        fontSize:'2rem',
        color: '#003d99',
      },
    abouTeddy : {
        width: '50%',
        textAlign: 'left',
        fontFamily: 'Sofia',
        fontSize:'2rem',
        color: '#003d99',
      },
    teddyImag : {
        width: '85%',
        height: '85%',
        paddingLeft:'5%'
    }
   
}));

function About() {
    const classes = useStyles();
    return (
        <div  className={classes.about}>  
          <div  className={classes.abouTeddyInt} className='abouTeddyInt'> 
            <h2>It is my Pleasure to see you here!</h2><br />
            <h2> My Name is Tewodros Zenebe </h2>
            <p>
                I am a full-stack web application developer living in Charlotte, NC. I have more than 6 years of work expriance in differen tech related work.
                out of 6 years  3 of them were in building user friendely responsive web application using HTML5, CSS3, Javascript, React, Bootstrap, JQurey and other light weight JavaScript and CSS libraries;
            </p>
            <p>
                I have more than 2 years expriance in creating RESTful API using Node.js (express). I have morthan 3 years expriance developing and manageing 
                MSSQL Server database. I certified from Microsoft in MSSQL Server database adminstration and
                developmant.
            </p>
            <p>
                Resently I am participating in the project that built using .Net(core) and React.js. 
                I also have exposure using Pyton programing langudge</p>
            <p>
                I am driven by my passion for coding, web development, RESTfull API building and Database Adminstration.
                And this never restricts me to a single language or tool. I am always trying out/learning new languages and tools 
                that facilitate better development. 
            </p>
            <p>
                To checkout some of my projects <NavLink to='/projects'>Click Here</NavLink>
            </p>
          </div>
          <div className={classes.abouTeddy} className='abouTeddy'>
              <img src= {teddyImg} alt='my look'  className={classes.teddyImag} />
          </div>
        </div>
    )
}

export default About;