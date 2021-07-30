import React from 'react'
import {FaGithub, FaTwitter, FaLinkedin, FaFacebook  } from "react-icons/fa";
import "../Footer/Footer.css"
const handleURL = (url) => {
    return () => window.open(url,  "_blank")
}
function Footer() {
    return (
        <div className ="footer" id = "footer">
            <p>Visit me on social media:</p>
            <FaGithub color= 'white' size ='30px' style = {{padding: '1%'}} onClick ={handleURL('https://github.com/dereatom')}/>
            <FaLinkedin color= 'white' size ='30px' style = {{padding: '1%'}} onClick ={handleURL('https://www.linkedin.com/in/dereje-atomsa-ayele-3b58b2204/')}/>
            <FaTwitter color= 'white' size ='30px' style = {{padding: '1%'}} onClick ={handleURL('https://twitter.com/DereAtom')}/>
            <FaFacebook color= 'white' size ='30px' style = {{padding: '1%'}} onClick ={handleURL('https://www.facebook.com/dereje.atomsa.7/')}/>
        </div>
    )
}

export default Footer
