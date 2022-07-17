import React from "react";
import './Header.css';

import { Link } from 'react-router-dom'
import  collegelogo from'../../images/collegelogo.png';


function Header({active}){
    return(
        <div className="header">
            <div className="logotitlecontainer">
                {/* git p */}
                <div className="pctitle">Placement Cell</div>
                {/* <div className="searchbar">Searchbars</div> */}
            </div>
            <div className="nav">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/application" className="nav-item">Application</Link>
                <Link to="/profile" className="nav-item">Profile</Link>
            </div>
        </div>
    )
}

export default Header;