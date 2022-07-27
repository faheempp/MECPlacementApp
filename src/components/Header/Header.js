import React from "react";
import './Header.css';

import { Link } from 'react-router-dom'
import  collegelogo from'../../images/collegelogo.png';


function Header({active}){
    return(
        <div className="header">
            <div className="logotitlecontainer">
                {/* <div className="logo">
                    <img src={collegelogo} alt=""></img>
                </div> */}
                <h2 className="pctitle">Placement Cell</h2>
                {/* <div className="searchbar">Searchbars</div> */}
            </div>
            <div className="nav">

                
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/admin" className="nav-item">Admin</Link>
                <Link to="/application" className="nav-item">Application</Link>
                <Link to="/profile" className="nav-item">Profile</Link>
                <Link to="/signin" className="nav-item">Sign In</Link>
            </div>
        </div>
    )
}

export default Header;