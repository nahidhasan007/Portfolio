import React from 'react'
import './intro.scss'


function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imagecontainer">
                    <img src="images/emp2.png" alt="profile"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Nahid Hasan</h1>
                    <h3>Python Developer</h3>
                </div>
                
            </div>
        </div>
    )
}

export default Intro
