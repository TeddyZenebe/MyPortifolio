import React from 'react'
import Particles from 'react-particles-js';
import {Link} from 'react-router-dom'

function About() {
    return (
      <div className='Home'>
        <h1 className="Intro">
           Hello, Welcome to My Portifolio Page. <br />I am Teddy Zenebe, Full Stack Developer<br />
           For More Information Checkout My Project page.
        </h1>
        <Particles className='Particles' params={{
	        "particles": {
	             "number": {
	                "value": 50
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
	      }}  />
        
      </div>
    )
}

export default About;