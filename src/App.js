import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Portfolio from "./Components/Projects/Projects"
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume";
import "../src/App.css";
import backgroundImage from "./image/background.jpg";


const App =() =>{

  return ( 
  <HashRouter>
    <div className = 'App-img' style={{backgroundImage: `url(${backgroundImage})`}}>
     
      <NavBar/>
     
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route exact path = "/about-me">
          <About/>
        </Route>
        <Route exact path = "/projects">
          <Portfolio/>
        </Route>
        <Route exact path = "/contact">
          <Contact/>
        </Route>
        <Route exact path = "/resume">
          <Resume/>
        </Route>
       
      </Switch>
      <Footer/>
    </div>
  </HashRouter>
  );
}

export default App;