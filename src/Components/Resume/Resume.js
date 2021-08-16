import React from 'react'
import "../Resume/Resume.css"
import PageHeader from '../PageHeader/PageHeader'

function Resume() {
    return (
    <div className = "resume" id = "resume">
        <div>
            <PageHeader title= {"Resume"}/>
            <a href="https://drive.google.com/file/d/1vCW1L6jDihMVZTbBDVmTFR6C5ws7POyU/view?usp=sharing" className="card-git">Resume Link</a>
       </div>
       <p>Full Resume PDF was attached in the link above but this are few Technolgies and deccumentation or library I effectively used until today.</p>
        <div className ="wrap-resume"> 
            <div className = "wrap-front">
                
                <ul0 className = "lang">
                <h3 className="resume-heading">Front End Languages</h3>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuary</li>
                    <li>React</li>
                </ul0>
            </div>
            <div className = "wrap-back">
                
                <ul1 className = "lang">
                <h3 className="resume-heading">Back End Languages</h3>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Inquirer</li>
                </ul1>
            </div>
            <div className = "wrap-other">
               
                <ul2 className = "lang">
                <h3 className="resume-heading">Other Technologies</h3>
                    <li>Bootstrap</li>
                    <li>Sequelize</li>
                    <li>Bycrypt</li>
                    <li>Bula</li>
                    <li>Handlebars</li>
                    <li>Font Awesome</li>
                    <li>Materilized</li>
                    <li>Graphql</li>

                </ul2> 
            </div>
        </div> 
    </div>
    )
}

export default Resume
