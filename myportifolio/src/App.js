import React from 'react';
import {NavLink, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
     <NavLink to='/'>HOME</NavLink>
     <NavLink to='/'>ABOUT</NavLink>
     <NavLink to='/'>PROJECT</NavLink>
     <NavLink to='/'>CONTACT</NavLink>
     <Route exact path="/" />
     <Route exact path="/" component='about' />
     <Route exact path="/" component='projects' />
     <Route exact path="/" component='contact' />
    </div>
  );
}

export default App;
