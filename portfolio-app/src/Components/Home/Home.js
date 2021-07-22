import React from 'react'
import  "./Home.css"
import Selfi from "../../image/Dereje3.jpg"
// import BinaryGlobe from "../../image/BinaryGlobe.JPEG"

function Home() {
    return (
        <div className = "Home" >
            <div className ="Container">
                <h1 className= "Hello">Hello My name is </h1>
                <h2>Dereje Ayele</h2>
                <p> A Full Stack Developer</p>
                <p>currently working as</p>
                 <p>Pathology Tech</p>
            </div>
            <img className = "Selfi" src= {Selfi} alt = "Dereje selfi"></img>
            {/* <img className = "BinaryGlobe" src = {BinaryGlobe} alt="Binary Glob"></img> */}
        </div>
    )
}

export default Home
