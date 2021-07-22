import React from 'react';
import classes from "../NavBar/NavBar.css"
function NavBar() {
    return (
        <div className= {classes.NavBar}>
           <nav className="NavBar">
               <ul>
                   <li><a href ="/">Home</a></li>
                   <li><a href ="/#about-me">About Me</a></li>
                   <li><a href ="/#projects">Projects</a></li>
                   <li><a href ="/#resume">Resume</a></li>
                   <li><a href ="/#contact">Contact</a></li>
                   <li><a href = "/#footer"></a></li>
               </ul>
           </nav>
        </div>
    )
}

export default NavBar
