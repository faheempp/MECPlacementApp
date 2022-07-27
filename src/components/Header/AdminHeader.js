import React from "react";
import './Header.css';

import { Link } from 'react-router-dom'
import  collegelogo from'../../images/collegelogo.png';


function AdminHeader({active}){
    return(
        <div className="header">
            <div className="logotitlecontainer">
                {/* <div className="logo">
                    <img src={collegelogo} alt=""></img>
                </div> */}
                <h2 className="pctitle">P. C. | Admin</h2>
                {/* <div className="searchbar">Searchbars</div> */}
            </div>
            <div className="nav">

                
                <Link to="/admin" className="nav-item">Update</Link>
                <Link to="/admin/create" className="nav-item">Create</Link>
                {/* <Link to="/admin" className="nav-item">Admin</Link> */}
                {/* <Link to="/application" className="nav-item">Application</Link> */}
                {/* <Link to="/profile" className="nav-item">Profile</Link> */}
                <Link to="/signin" className="nav-item">Log Out</Link>
            </div>
        </div>
    )
}

export default AdminHeader;