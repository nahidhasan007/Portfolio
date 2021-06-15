import React from 'react'
import './portfolio.scss'

function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
           |<h1>Portfolio</h1>
           <ul>
               <li>Featured</li>
               <li>Web App</li>
               <li>Mobile App</li>
               <li>Design</li>
           </ul>
           <div className="container">
               <div className="item">
                    <img src="images/banking1.jpg" alt="Banking-app" />
                    <h2>Banking App</h2>
               </div>
               <div className="item">
                    <img src="images/banking1.jpg" alt="Banking-app" />
                    <h2>Banking App</h2>
               </div>

               <div className="item">
                    <img src="images/banking1.jpg" alt="Banking-app" />
                    <h2>Banking App</h2>
               </div>

               <div className="item">
                    <img src="images/banking1.jpg" alt="Banking-app" />
                    <h2>Banking App</h2>
               </div>

               <div className="item">
                    <img src="images/banking1.jpg" alt="Banking-app" />
                    <h2>Banking App</h2>
               </div>

               <div className="item">
                    <img src="images/banking1.jpg" alt="Banking-app" />
                    <h2>Banking App</h2>
               </div>
           </div>
        </div>
    )
}

export default Portfolio
