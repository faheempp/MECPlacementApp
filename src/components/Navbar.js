import React from "react";
import './components.css';
import  collegelogo from'../images/collegelogo.png';

function Navbar(){
    return(
        <div className="header">
            <div className="logo">
            <img src={collegelogo} alt=""></img>
            </div>
            <div className="pctitle">Placement Cell</div>
            <div className="searchbar">Searchbars</div>
        <nav>
            <div className="nav-item"><a href="">Home</a></div>
            <div className="nav-item"><a href="">Application</a></div>
            <div className="nav-item"><a href="">Profile</a></div>
        </nav>
        </div>
    )
}

export default Navbar;