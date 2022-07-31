import React from "react";
import './Header.css';

import { Link } from 'react-router-dom'
import  collegelogo from'../../images/collegelogo.png';
import {useUserAuth} from '../../context/UserAuthContext';
import {useNavigate} from 'react-router-dom';


function Header({active}){
    const {user, logOut}=useUserAuth()
    // let navigate=useNavigate();
    const HandleLogout=async()=>{ 
        await logOut();
        // navigate("/signin");  
    }
    return(
        <div className="header">
            <div className="logotitlecontainer"> 
                <h2 className="pctitle">Placement Cell</h2>
                {/* <div className="searchbar">Searchbars</div> */}
            </div>
            <div className="nav">

                
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/admin" className="nav-item">Admin</Link>
                <Link to="/application" className="nav-item">Application</Link>
                <Link to="/profile" className="nav-item">Profile</Link>
                {/* <Link to="/signin" className="nav-item">Sign In</Link>  */}
                <Link onClick={HandleLogout} to="/signin" className="nav-item">Log Out</Link>
            </div>
        </div>
    )
}

export default Header;