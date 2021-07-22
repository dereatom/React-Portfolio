import React from 'react';
import classes from "../NavBar/NavBar.css"
function NavBar() {
    return (
        <div className= {classes.NavBar}>
           <nav className="NavBar">
               <ul>
                   <li>
                       <a href ="/">Home</a>
                   </li>
                   <li>
                       <a href ="/About">About Me</a>
                   </li>
                   <li>
                       <a href ="/Projects">Projects</a>
                   </li>
                   <li>
                       <a href ="/#Resume">Resume</a>
                   </li>
                   <li>
                       <a href ="/Contact">Contact</a>
                   </li>
                   <li>
                       <a href ="/#Footer">.</a>
                   </li>
               </ul>
           </nav>
        </div>
    )
}

export default NavBar
