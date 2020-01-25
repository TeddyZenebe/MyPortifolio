import React from 'react';
import Particles from 'react-particles-js';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import roanoke from '../img/Roanoke.PNG';
import propman from '../img/propman.PNG';
import irsr from '../img/irsr.PNG';
import rarr from '../img/rarr.PNG';
import vs from '../img/VS.PNG';
import css from '../img/css.PNG';
import github from '../img/github.PNG';
import js from '../img/js.PNG';
import html from '../img/html.PNG';
import node from '../img/node.PNG';
import pyton from '../img/pyton.PNG';
import react from '../img/react.PNG';
import sql from '../img/sql.PNG';
import postgreSQL from '../img/postgres.png';
import git from '../img/git.png';
import bootstrap from '../img/Bootstrap.png';

const useStyles = makeStyles(theme => ({
    container: {
        display:'flex',
        width: '100%',
        position: 'absolute',
        zIndex: 1,
    },
    projects: {
        width: '50%',
        color: '#003d99',
        fontFamily: 'Fugaz One',
        padding: theme.spacing(3),  
    },
    project: {
        width:'90%',
        margin:'3%',
    },
    card: {
      fontSize:'1.2rem'
    },
    projectImg:{
        height: 170
    },
    iframeContainer: {
        width: "50%",
    },
    iframe: {
       width:'100%',
       height:'100%',
       marginTop:'14%'
    },
    particels: {
        minHeight: '175vh'
    }
}));
const Projects = (props)=> {
    const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
    
    return (
    <div>
    <div className={classes.container}>
        <div className={classes.projects}>
            <h1>See below some of the projects I worked on </h1>
            <h2>for more products visit my github page <a href="https://github.com/TeddyZenebe" target="_blank" >
                here</a></h2>
        <Card className={classes.project}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Flood Inundation Warning App
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.card}>
              This app built using React, different light weight libraries and ArcGIS API at the Front-End and .Net (Core) and 
              MSSQL database at the Back-End. It used to support the Roanoke City storm water administration to make 
              decisions based on the real-time flow data and associated scenarios. 
              <a href="http://espgis.com/roanokefloodapp/#/" target="iframe_a"> Click here to explore the App!</a>
              Or copy and past=> http://espgis.com/roanokefloodapp/#/
              </Typography>
            </CardContent>
            <CardMedia image={roanoke} title="Roanoke Flood Inundation warning" className={classes.projectImg} />
          </CardActionArea>
        </Card>
        <Card className={classes.project}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                PropMan
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.card}>
              This app built using React and different light weight libraries at the Front-End and Node.JS and PostgreSQL database
              at the Back-End. This app used to help property managers and owners to manage their property and Renters.
              <a href="https://propman.netlify.com/" target="iframe_a"> Click here to explore the App! </a>
              Or copy and past=> https://propman.netlify.com/
              </Typography>
            </CardContent>
            <CardMedia
              image={propman}
              title="Propman Property management"
              className={classes.projectImg}
            />
          </CardActionArea>
        </Card>
        <Card className={classes.project}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Intr. Rural School Report
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.card}>
              This app built using React and different light weight libraries at the Front-End and Node.JS and 
              PostgreSQL database at the Back-End. This app used to help International Rural School administrators 
              and the board members to communicate and follow up. 
              <a href="https://internationalschoolsocialworks.netlify.com/into" target="iframe_a"> Click here</a> Or
              <a href="https://internationalruralschoolreport.netlify.com/login" target="iframe_a"> here to explore the App!</a>
            Or copy and past=>https://internationalruralschoolreport.netlify.com/login
              </Typography>
            </CardContent>
            <CardMedia
              image={irsr}
              title="International School Rural Repo"
              className={classes.projectImg}
            />
          </CardActionArea>
        </Card>
        <Card className={classes.project}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Risk Analysis/ Risk Reddaction
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.card}>
                This app built using JavaScript and ArcGIS API and it is a component of the main RARR website which is not 
                yet officially started to build. This app will assist defining the risk of flood on the properties and 
                community within the flood prone area.  And analyze the best mitigation measures to take place
                <a href="https://teddyzenebe.github.io/RARR/RARR1" target="iframe_a"> Click here to explore the App! </a>
                Or copy and past=> https://teddyzenebe.github.io/RARR/RARR1
              </Typography>
            </CardContent>
            <CardMedia image={rarr} title="Risk Analysis&Reduction" className={classes.projectImg} />
          </CardActionArea>
        </Card>
        </div>
        <div className={classes.iframeContainer}>
           <iframe src="" name="iframe_a" className={classes.iframe}></iframe>
        </div>
    </div>
    <Particles 
    className={classes.particels}
    params={{
	    "particles": {
	        "number": {
	            "value": 8,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
                    "images",
	                "circle"
	            ],
	            "images": [
	                {
	                    "src": vs,
	                    "height": 20,
	                    "width": 23
	                },
	                {
	                    "src": css,
	                    "height": 20,
	                    "width": 20
	                },
	                {
	                    "src":html,
	                    "height": 20,
	                    "width": 20
                    },
                    {
	                    "src":js,
	                    "height": 20,
	                    "width": 20
                    },
                    {
	                    "src":react,
	                    "height": 20,
	                    "width": 20
                    },
                    {
	                    "src":github,
	                    "height": 20,
	                    "width": 20
                    },
                    {
	                    "src":node,
	                    "height": 20,
	                    "width": 20
                    },
                    {
	                    "src":pyton,
	                    "height": 20,
	                    "width": 20
                    },
                    {
	                    "src":sql,
	                    "height": 20,
	                    "width": 20
                    },
                    {
                        "src":postgreSQL,
                        "height": 20,
	                    "width": 20
                    },
                    {
                        "src": git,
                        "height": 20,
	                    "width": 20
                    },
                    {
                        "src":bootstrap,
                        "height": 20,
	                    "width": 20
                    }
	            ]
	        },
	        "color": {
	            "value": "#00cc0c"
	        },
	        "size": {
	            "value": 30,
	            "random": true,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} />
    </div>
    )
}

export default Projects