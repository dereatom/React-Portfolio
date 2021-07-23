import React from 'react';
import classes from "../NavBar/NavBar.css"
import {BrowserRouter as Router, Link} from "react-router-dom"
function NavBar() {
    return (
        <Router>
            <div className= {classes.NavBar}>
              <nav className="NavBar">
                <ul>
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/about-me">About Me</Link>
                    </li>
                    <li>
                        <Link to ="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to ="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link to = "/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to = "/footer"></Link>
                    </li>
                </ul>
            </nav>
          </div>
     </Router>
    )
}

export default NavBar
