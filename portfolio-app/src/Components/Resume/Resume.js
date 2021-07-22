import React from 'react'
import "../Resume/Resume.css"
import PageHeader from '../PageHeader/PageHeader'
const mystyle = {
    fontFamily: "Monofett",
    color: 'black',
    textDecorationLine: "none",
    textAlign: "center",
    fontSize: "70px"
  }

function Resume() {
    return (
    <div>
        <div className="resume" id ="Resume">
        <PageHeader title= {"My Resume"} id = "Resume" />
          <h2 className="resume-link" style={{mystyle}}>  <a className="resume-link2" href='https://docs.google.com/document/d/1BXPOifL64DtICmt1H3of6APTad30pTHWIlFAwMLyk9g/edit'>Link to Resume</a> </h2>

          <h3 className="resume-heading">Front End Languages</h3>
          <ul className="lang-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>React</li>
          </ul>
          <h3 className="resume-heading">Back End Languages</h3>
          <ul className="lang-list">
              <li>Node</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Inquirer</li>
              <li>Jest</li>
              
          </ul>
          <h3 className="resume-heading">Other Technologies</h3>
          <ul className="lang-list">
          <li>Bootstrap</li>
          <li>Sequelize</li>
          <li>Bycrypt</li>
          <li>Bulma</li>
          <li>Handlebars</li>
          <li>Google Fonts</li>
          <li>Font Awesome</li>
          </ul>

        </div>
        </div>
    )
}

export default Resume
