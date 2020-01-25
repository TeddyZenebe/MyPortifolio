import React from 'react'
import Particles from 'react-particles-js';
import '../App.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

	particels: {
		minHeight: '100vh'
	}
}));

function Home(props) {
	const classes = useStyles();
	return (
		<div className='Home'>
			<h1 className="Intro" >
				Hello, Welcome to My Portifolio Page. <br />I am Teddy Zenebe, Full Stack Developer & Certified MSSQL Database Administrator<br />

				For More Information Checkout <br />About & Project pages.
            </h1>
			<Particles className={classes.particels} params={{
				"particles": {
					"number": {
						"value": 80
					},
					"size": {
						"value": 5
					}
				},
				"interactivity": {
					"events": {
						"onhover": {
							"enable": true,
							"mode": "repulse"
						}
					}
				}
			}} />

		</div>
	)
}

export default Home;