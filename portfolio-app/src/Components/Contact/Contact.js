import React from 'react'
import "../Contact/Contact.css"
import HandShake from "../../image/HandShake.png"
import PageHeader from '../PageHeader/PageHeader'

const Contact = (props) => (
    <div className="Contact" id = "contact">
        <PageHeader title= {"Contact me"}/>
        <div className ="wrap"> 
            <div>
                <img className ="hand" src = {HandShake} alt= "Hand Shake"/>
            </div>
            <form method="post" action="#Summit">
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="6"></textarea>
                </div>
                <ul className="actions">
                    <li><input type="submit" value="Send Message" className="special" /></li>
                    <li><input type="reset" value="Clear" /></li>
                </ul>
            </form>
        </div> 

    </div>
)
export default Contact