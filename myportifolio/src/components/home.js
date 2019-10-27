import React from 'react'
import {NavLink} from 'react-router-dom'

function About() {
    return (
      <div className="Intro">
       Hello, Welcome to My Portifolio Page. <br />I am Teddy Zenebe, Full Stack Developer<br />
       For More Information Checkout <NavLink to='/about'>Here</NavLink>!
      </div>
    )
}

export default About;