import React from 'react'
import "../About/About.css"
import PageHeader from '../PageHeader/PageHeader'
import SkillsImg from "../../image/Skills.jpg"

function Resume() {
    return (
    <div className= "about-me" id = "about-me">
        <div className = "wrap">
          <img className= "skills-img" src= {SkillsImg} alt ="Dereje prpfessinal img"/>
                <div className = "ContainerA">
                    <PageHeader title= {"About Me"}/>
                    <div className = "Text">
                        <p>I'm Dereje Ayele, Born and Grown Up in East Afarica, Ethiopia. Father of two cute boys. currently working at VCU Health System Microbiolgy Lab. Former student and worker of Jimma University and Mettu Health Center as Technical Assistance and Medical Lab Tech respectively. Graduated from Harmay University by Associate Degree, and From Jimma University BSc 2012. I moved To Richmond, VA, US by 2013. Now at school for Full Stack Developer at University of Richmond Coding boot camp.</p>
                    </div>
                    <div className = "resume">
                        <h4>Here is my Resume PDF link.</h4>
                        <a href="https://drive.google.com/file/d/1vCW1L6jDihMVZTbBDVmTFR6C5ws7POyU/view?usp=sharing" className="card-git">Resume Link</a>

                    </div>
               </div>
               <div className = "Skills">
                  <PageHeader title= {"Skills"}/>   
                    <div className = "Text">
                        <p>My languages: HTML, CSS, JavaScript, jQuary, Node.js, MySQL and React.js. From my expriance of work: problem solving, Teamwork, Critical thinking, Comunication and interpersonal skills as well as Medical Laboratory science skills. Speaks three languages: English, Amharic and Afaan Oromo. Effectivelly used Dev Tools:Bootstrap, GitHub, Gitlab, Material Desig, & VSCode.</p>
                    </div>
                </div>
         </div> 
    </div>
    )
}

export default Resume
