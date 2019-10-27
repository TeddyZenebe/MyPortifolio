import React from 'react';
import {NavLink, Route} from 'react-router-dom'
import './App.css'
import About from './components/about.js'
import projects from './components/projects.js'
import contact from './components/contact.js'

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/about'>ABOUT</NavLink>
        <NavLink to='/project'>PROJECT</NavLink>
        <NavLink to='/contact'>CONTACT</NavLink>
      </div>
      <div className="Intro">
       Hello, Welcome to My Portifolio Page. <br />I am Teddy Zenebe, Full Stack Developer<br />
       For More Information Checkout Above^^
      </div>

     <Route exact path="/" />
     <Route exact path="/about" component={About} />
     <Route exact path="/project" component='projects' />
     <Route exact path="/contact" component='contact' />
    </div>
  );
}

export default App;
