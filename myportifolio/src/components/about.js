import React from 'react'
import {NavLink} from 'react-router-dom'
import teddy from '../img/teddy.jpg'
function About() {
    return (
        <div className='About'>
          
          <div className='Abouteddy' > 
          <h2>Hi, My Name is Tewodros Zenebe </h2>
          <p>I am a full-stack web developer leaving in Charlotte, NC. I have more than 5 years of work expriance in differen tech related work.
             I have more than a year expriance in developing user friendely responsive web app using HTML5, CSS3, Javascript, React, Bootstrap, JQurey ... &#xe234;
          </p>
          <p>
             I also have expriance creating REST full API using Node.js (express). I certified from Microsofte in MSSQL Server database adminstration and
             developmant.
          </p>
          <p>
              To checkout some of my projects <NavLink to='/project'>Click Here</NavLink>
          </p>
          </div>
          <div>
              <img src= {teddy} alt='my look' className='Teddy' />
          </div>

        </div>
    )
}

export default About;