import React from 'react';
import '../App.css'
import Particles from 'react-particles-js';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import roanoke from '../img/Roanoke.PNG';
//import propman from '../img/propman.PNG';
import freehold from '../img/freehold.PNG';
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
    display: 'flex',
    width: '100%',
    alignContent: 'center',
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
    width: '90%',
    margin: '3%',
  },
  card: {
    fontSize: '1.2rem'
  },
  projectImg: {
    height: 250
  },
  iframeContainer: {
    width: "50%",
  },
  iframe: {
    width: '100%',
    height: '100%',
    marginTop: '11.5%'
  },
  particels: {
    width: '100',
    minHeight: '175vh'
  }
}));
const Projects = (props) => {
  //const { container } = props;
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.projects} className='projects'>
          <h1 className='projeects-title'>See below some of the projects I worked on: </h1>
          <h2 className='projeects-title'>-for more products visit my github page <a href="https://github.com/TeddyZenebe" target="_blank" >
            here</a></h2>
          <Card className={classes.project} className='project'>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Flood Inundation Warning App
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.card}>
                  This app built using React, different light weight libraries and ArcGIS API at the Front-End and .Net (Core) and
                  MSSQL database at the Back-End. It used to support the Roanoke City storm water administration to make
                  decisions based on the real-time flow data and associated scenarios.
              <a href="https://espgis.com/RoanokefloodApp/#/" target="iframe_a" className='projectLink'> Click here to explore the App!</a>
                  => https://espgis.com/RoanokefloodApp/#/
              </Typography>
              </CardContent>
              <CardMedia image={roanoke} title="Roanoke Flood Inundation warning" className={classes.projectImg} />
            </CardActionArea>
          </Card>
          <Card className={classes.project} className='project'>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Freehold
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.card}>
                  This app built using React and different light weight libraries at the Front-End and Node.JS and PostgreSQL database
                  at the Back-End. This app used to help property managers and owners to manage their property and Renters.
              <a href="https://www.freehold.dev/" target="iframe_a" className='projectLink'> Click here to explore the App! </a>
                  => https://www.freehold.dev/
              <a href="https://pt6-propman.herokuapp.com/" target="iframe_a" className='projectLink'> Click here to explore the back end API! </a>
                  => https://pt6-propman.herokuapp.com/
              </Typography>
              </CardContent>
              <CardMedia
                image={freehold}
                title="Freehold Property management"
                className={classes.projectImg}
              />
            </CardActionArea>
          </Card>
          <Card className={classes.project} className='project'>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Risk Analysis/ Risk Reddaction
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.card}>
                  This app built using JavaScript(React) and ArcGIS API at the Front-End and .Net (Core) and
                  MSSQL database at the Back-End. This app will assist defining the risk of flood at the properties and
                  community within the flood prone area.  And analyze the best mitigation techniques based on cost and benefit.
                <a href="https://espgis.com/RARR_dev/#/" target="iframe_a" className='projectLink'> Click here to explore the App! </a>
                  => https://espgis.com/RARR_dev/#/
              </Typography>
              </CardContent>
              <CardMedia image={rarr} title="Risk Analysis&Reduction" className={classes.projectImg} />
            </CardActionArea>
          </Card>
          <Card className={classes.project} className='project'>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Intr. Rural School Report
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.card}>
                  The landing page developed using HTML, CSS and Javascript. The main app built using React and different light weight libraries at the Front-End 
                  and Node.JS and PostgreSQL database at the Back-End. This app used to help International Rural School administrators
                  and the board members to communicate and follow up activities in the School.
              <a href="https://internationalschoolsocialworks.netlify.com/into" target="iframe_a" className='projectLink'> Click here (Landing page)</a> Or
              <a href="https://internationalruralschoolreport.netlify.com/login" target="iframe_a" className='projectLink'> here to explore the App!</a>
                  =>https://internationalruralschoolreport.netlify.com
              </Typography>
              </CardContent>
              <CardMedia
                image={irsr}
                title="International School Rural Repo"
                className={classes.projectImg}
              />
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.iframeContainer} className='iframeContainer'>
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
                  "src": html,
                  "height": 20,
                  "width": 20
                },
                {
                  "src": js,
                  "height": 20,
                  "width": 20
                },
                {
                  "src": react,
                  "height": 20,
                  "width": 20
                },
                {
                  "src": github,
                  "height": 20,
                  "width": 20
                },
                {
                  "src": node,
                  "height": 20,
                  "width": 20
                },
                {
                  "src": pyton,
                  "height": 20,
                  "width": 20
                },
                {
                  "src": sql,
                  "height": 20,
                  "width": 20
                },
                {
                  "src": postgreSQL,
                  "height": 20,
                  "width": 20
                },
                {
                  "src": git,
                  "height": 20,
                  "width": 20
                },
                {
                  "src": bootstrap,
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