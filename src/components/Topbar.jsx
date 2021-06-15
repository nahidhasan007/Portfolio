import React from 'react'
import './topbar.scss'
import { Mail, Person} from "@material-ui/icons"


function Topbar() {
    return (
        <div className="topbar" id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#contact" className="logo">contact</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+88001728142739</span>  
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>nahidhasancse008@gmail.com</span>
                    </div>
                </div> 
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line1"></span>
                        <span className="line1"></span>
                    </div>
                </div>
             </div>          
        </div>
    )
}

export default Topbar
