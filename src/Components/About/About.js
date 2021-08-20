import React from 'react'
import "../About/About.css"
import PageHeader from '../PageHeader/PageHeader'
import SkillsImg from "../../image/Skills.jpg"
import useMediaQuery  from 'react-responsive'
function About() {
    return (
    <div className= "wrap-about" id = "about-me">
        <div className = "wrap-contents">
            <useMediaQuery className = "ContainerA">
             <PageHeader title= {"About Me"}/> 
              <img className ="skills-img" src ={SkillsImg} alt = "my skill img"/>
                <div className = "Text">
                    <p>I'm Dereje Ayele, Born and Grown Up in East Africa, Ethiopia. Father of two cute boys. Currently working at VCU Health System Microbiology Lab. Former <br></br>student and worker of Jimma University and Mettu Health Center as Technical Assistance and Medical Lab Tech respectively. Graduated from Harmaya <br></br> University by Associate Degree, and From Jimma University BSc 2012. I moved To Richmond, VA, US by 2013. Currently Graduated from University of Richmond Boot Camp by  Full Stack Developer.</p>
                </div>
            </useMediaQuery>
            <useMediaQuery className = "Skills">
               <PageHeader title= {"Skills"}/>
                    <div className = "Text">
                        <p>My languages: HTML, CSS, JavaScript, jQuery, Node.js, MySQL and React.js. Effectively used Dev Tools, Bootstrap, GitHub, Gitlab, Material Design, &<br></br> VS Code. Speaks three languages: English, Amharic and Afaan Oromo. From my experience of work: problem solving, Teamwork, Critical thinking, <br></br>communication and interpersonal skills as well as Medical Laboratory science skills.</p>
                    </div>
            </useMediaQuery>
            
        </div> 
    </div>
    )
}

export default About
