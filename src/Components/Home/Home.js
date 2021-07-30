import React from 'react'
import  "./Home.css"
import Selfi from "../../image/Dereje3.jpg"

function Home() {
    return (
        <div className = "Home" >
            <div className ="Container">
                <h1>Hello My name is </h1>
                <h2>Dereje Ayele</h2>
                <p> A Full Stack Developer</p>
                <p>currently working as</p>
                 <p>Pathology Tech</p>
            </div>
            <img className = "Selfi" src= {Selfi} alt = "Dereje selfi"></img>
        </div>
    )
}

export default Home
