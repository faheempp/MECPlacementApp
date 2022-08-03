import './Header.css';
import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import  collegelogo from'../../images/collegelogo.png';
import {useUserAuth} from '../../context/UserAuthContext';


function AdminHeader(props){
    const {user, logOut}=useUserAuth()
    const HandleLogout=async()=>{ 
        await logOut();
    }
    const findCurrentPage=async()=>{
        document.getElementById(props.active).classList.add('active');
    }
    useEffect(() => {
        findCurrentPage();
    })
    return(
        <div className="header">
            <div className="logotitlecontainer">
                {/* <div className="logo">
                    <img src={collegelogo} alt=""></img>
                </div> */}
                <h2 className="pctitle">P C | Admin</h2>
            </div>
            <div className="nav">
                <Link to="/admin" className="nav-item" id='update'>Update</Link>
                <Link to="/admin/create" className="nav-item" id='create'>Create</Link>
                <Link to="/admin/applicants" className="nav-item" id='applicants'>Applicants</Link>
                {/* <Link to="/application" className="nav-item">Application</Link> */}
                {/* <Link to="/profile" className="nav-item">Profile</Link> */}
                <Link to="/"onClick={HandleLogout} className="nav-item">Log Out</Link>
            </div>
        </div>
    )
}

export default AdminHeader;