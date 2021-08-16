import React from 'react';
import  "./NavBar.css"
// import {Link} from "react-router-dom"
import {Nav} from "react-bootstrap"
function NavBar() {
    return (
        
     <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="about-me">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
         <Nav.Link href="projects">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
         <Nav.Link href="resume">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
         <Nav.Link href="contact">Contact</Nav.Link>
        </Nav.Item>
        
  </Nav>
  
    )
}

export default NavBar
