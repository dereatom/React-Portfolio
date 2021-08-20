import React from 'react';
import  "./NavBar.css"
import {Link} from "react-router-dom"
import {Nav} from "react-bootstrap"
function NavBar() {
    return (
        
     <Nav className="justify-content-center" activeKey="/home">
      
        <Nav.Item>
        <Link to = "/" >Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to = "/about-me" >About Me</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to = "/projects" >Portfolio</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to = "/resume" >Resume</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to = "/contact" >Contact</Link>
        </Nav.Item>
        
  </Nav>
  
  )
}

export default NavBar
