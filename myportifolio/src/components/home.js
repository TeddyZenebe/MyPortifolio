import React from 'react'
import Particles from 'react-particles-js';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

	intro: {
		width: '60%',
		display: 'flex',
		color: '#003d99',
		textAlign: 'center',
		fontFamily: 'Fugaz One',
		fontSize: '3rem',
		textShadow: '-10px 5px 5px #ffffff',
		padding: theme.spacing(3),
		marginTop: '10%',
		marginLeft: '10%',
		position: 'absolute',
		zIndex: 1,
	},
	particels: {
		minHeight: '100vh'
	}
}));

function Home(props) {
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
	return (
		<div className='Home'>
			<h1 className="Intro" className={classes.intro}>
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