import React from 'react'
import {NavLink} from 'react-router-dom'
import teddy from '../img/teddy.jpg'
function About() {
    return (
        <div className='About'>
          
          <div className='Abou-teddy' > 
          <h1>It is my Pleasure to see you here, My Name is Teddy Zenebe </h1>
          <p>I am a full-stack web application developer leaving in Charlotte, NC. I have a total of 6 years of work 
              expriance in differen tech related work. Out of 6 years work expriance, 3 of them were in developing user 
              friendely responsive web applications using HTML5, CSS3, Javascript, React, ArcGis API, Bootstrap, JQurey ... &#xe234;
          </p>
          <p>
             I also have morthan 2 years expriance creating RESTful API using Node.js (express library). I have more than 3 years
             expriance developing and managing MSSQL Server databases. I certified from Microsofte in MSSQL Server database adminstration 
             and developmant.
          </p>
          <p>Recently I participated in the project that builed wising .NET(core) at back end and Anglar for front end. I have laso some exxposure 
            o developing application using Pyton.
          </p>
          <p>
              To checkout some of my projects <NavLink to='/project'>Click Here</NavLink>
          </p>
          </div>
          <div>
              <img src= {teddy} alt='my look' className='Teddy-Image' />
          </div>

        </div>
    )
}

export default About;