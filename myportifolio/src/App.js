import React from 'react';
import {NavLink, Route} from 'react-router-dom'
import './App.css'
import Home from './components/home.js'
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
      

     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/project" component={projects} />
     <Route exact path="/contact" component={contact} />
    </div>
  );
}

export default App;
