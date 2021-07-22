import React from 'react'
import {FaGithub, FaTwitter, FaLinkedin  } from "react-icons/fa";
// import FagitHub from "../../image/GitHub.png"
// import FaLinkedIn from "../../image/LinkedIn.png"
// import FaTwitter from "../../image/Twitter.png"
const handleURL = (url) => {
    return () => window.open(url,  "_blank")
}
function Footer() {
    return (
        <div>
            <FaGithub color= 'white' size ='30px' style = {{padding: '1%'}} onClick ={handleURL('https://github.com/dereatom')}/>
            <FaLinkedin color= 'white' size ='30px' style = {{padding: '1%'}} onClick ={handleURL('https://www.linkedin.com/in/dereje-atomsa-ayele-3b58b2204/')}/>
            <FaTwitter color= 'white' size ='30px' style = {{padding: '1%'}} onClick ={handleURL('https://twitter.com/DereAtom')}/>
        </div>
    )
}

export default Footer
