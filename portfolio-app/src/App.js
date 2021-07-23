import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Projects from "./Components/Projects/Projects"
import Resume from "./Components/Resume/Resume";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
// // import Header from "./components/Header";
// // import { Button } from 'react-bootstrap'
import "../src/App.css"
// // import Card from 'react-bootstrap/Card'
// // import { Container } from "react-bootstrap";
 import backgroundImage from "./image/background.jpg"
// import Header from "./components/Header";
// import bootsrap from "react-bootstrap/dist/react-bootstrap"
const App =() =>{
  return ( 
  <Router>
    <div className = 'App' style={{backgroundImage: `url(${backgroundImage})`}}>
      <NavBar/>
      <Switch>
        <Route exaxt path = "/">
          <Home/>
        </Route>
        <Route exaxt path = "/about">
          <About/>
        </Route>
        <Route exaxt path = "/projects">
          <Projects/>
        </Route>
        <Route exaxt path = "/contact">
          <Contact/>
        </Route>
        <Route exaxt path = "/resume">
          <Resume/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;