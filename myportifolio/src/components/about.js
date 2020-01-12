import React from 'react'
import {NavLink} from 'react-router-dom'
import teddyImg from '../img/teddy2.jpg'

function About() {
    return (
        <div className='About'>
          
          <div className='Abou-teddy' > 
            <h1>It is my Pleasure to see you here!</h1>
            <h1> My Name is Tewodros Zenebe </h1>
            <p>
                I am a full-stack web application developer living in Charlotte, NC. I have a total of 6 years of work expriance in differen tech related work.
                out of 6 years of work expriance 3 of them were in building user friendely responsive web application using HTML5, CSS3, Javascript, React, Bootstrap, JQurey ... &#xe234;
            </p>
            <p>
                I have more than 2 years expriance in creating RESTful API using Node.js (express). I have morthan 3 years expriance developing and manageing 
                MSSQL Server database. I certified from Microsoft in MSSQL Server database adminstration and
                developmant.
            </p>
            <p>Resently I participated in the project that built using .Net(core) and Angular.js. I also have exposure using Pyton programing langudge</p>
            <p>
                To checkout some of my projects <NavLink to='/project'>Click Here</NavLink>
            </p>
            <p>
                I am driven by my passion for coding, web development, RESTfull API building and Database Adminstration.
                And this never restricts me to a single language or tool. I am always trying out/learning new languages and tools 
                that facilitate better development. And that passion has driven me to do small projects in my free time.
            </p>
          </div>
          <div>
              <img src= {teddyImg} alt='my look' className='Teddy-Img' />
          </div>

        </div>
    )
}

export default About;