import React from 'react'
import "../Projects/Projects.css"
import PageHeader from '../PageHeader/PageHeader'
import EscapeArray from "../../image/Escape_Array.jpg"
import NationalPark from "../../image/National_Park.png"
import WorkDay from "../../image/Work_Day.JPG"
import TeamProfile from "../../image/Team_Profile.JPG"
import BudgetTracker from "../../image/Budget_Tracher.png"
import WorkoutTracker from "../../image/WorkoutTracker.jpg"
function Projects() {
    return (
        <div className= "Projects" id = "projects">
            <PageHeader title= {"My Recent works"}/>
            <div className= "card-body">
                <img src={EscapeArray} alt="Escape Array"/>
                <h1>Escap Array(TRIPLY)</h1>
                <p>TRIPLY is a post pandemic travel guide for those who want to escape on a budget, featuring smaller US cities with lower costs of living.</p>
                <p>Technologies: express-handlebars, MySQL2, Sequelize, dotenv package, bcrypt package,express-session, connect-session-sequelize</p>
       
                <div className = "link">
                    <a href="https://polar-spire-28260.herokuapp.com/" className="card-link">Deployed</a>
                    <a href="https://github.com/GitOffMyFarm/Escape-Array" className="card-git">GitHub</a>
                </div>
        </div>
        <div className= "card-body" id= "budget">
                <img src={BudgetTracker} alt="Budget Trackers"/>
                <h1>Budget Trackers</h1>
                <p>This app is able us to track our withdrawals and deposits with or without a data/internet connection, So that our account balance is accurate when we are traveling, internet connection interruption or slow connection. Balance offline saved and show up on account</p>
                <p>Techinolgies: MongoDB Atlas, mongod, indexDB, cach, and heroku for deploy.</p>
       
                <div className = "link">
                    <a href="https://gentle-ridge-31868.herokuapp.com/" className="card-link">Deployed</a>
                    <a href="https://github.com/dereatom/Budget-Trackers" className="card-git">GitHub</a>
                </div>
        </div>
        
        <div className= "card-body">
                <img src={WorkDay} alt="Work Day"/>
                <h1>Day Planner App</h1>
                <p>This app is used a daily planner to create a schedule. Current day is displayed at the top of the calendar. It's presented with timeblocks for standard business hours Each timeblock is color coded to indicate whether it is in the past, present, or future.</p>
                <p>Technologes: Moment.js, CSS, HTML, and JavaScript.</p>
       
                <div className = "link">
                    <a href="https://dereatom.github.io/Day-Planner/" className="card-link">Deployed</a>
                    <a href="https://github.com/dereatom/Day-Planner" className="card-git">GitHub</a>
                </div>
        </div>
        <div className= "card-body">
                <img src={TeamProfile} alt="Team Profile"/>
                <h1>Team Profile Generator</h1>
                <p>The App was built a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each employee</p>
                <p>Techinolgies: Node.js, CSS, Jest package, HTML, and Inqirer package.</p>
       
                <div className = "link">
                    <a href="https://dereatom.github.io/TeamProfileGenerator/" className="card-link">Deployed</a>
                    <a href="https://github.com/dereatom/TeamProfileGenerator" className="card-git">GitHub</a>
                </div>
        </div>
        <div className= "card-body">
                <img src={NationalPark} alt="National Park"/>
                <h1>National Park Servis</h1>
                <p>Good solution for finding National Park and Historic site. It's presented with a drop down auto-complete list of potential sites and the previously searched button displaying park name and saved for future.</p>
                <p>Used Techinolgies: Materialize(CSS Framework), jQuery, jQuery UI,Server Side API, HTML, and JavaScript.</p>
       
                <div className = "link">
                    <a href="https://epurpur.github.io/NationalParkService/" className="card-link">Deployed</a>

                    <a href="https://github.com/epurpur/NationalParkService" className="card-git">GitHub</a>
                </div>
        </div>
       
        <div className= "card-body">
                <img src={WorkoutTracker} alt="Workout Tracker"/>
                <h1>Employee Tracker</h1>
                <p>Able us to view, create, and track daily workouts.I want to be able to log multiple exercises in a workout on a given day.I should also be able to track the name, type, weight, sets, reps, and duration of exercise.</p>
                <p>Techinolgies: NPM install, MongoDB, Mongoose, Express.js, Node.js, Robo3T, JavaScript, HTML, CSS, and Compression</p>
       
                <div className = "link">
                    <a href="https://vast-ocean-10608.herokuapp.com/?id=60da8e83c63009001507391d" className="card-link">Deployed</a>
                    <a href="https://github.com/dereatom/Workout-Tracker" className="card-git">GitHub</a>
                </div>
        </div>
    </div>
    )
}

export default Projects
