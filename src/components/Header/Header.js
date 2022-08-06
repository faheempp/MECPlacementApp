import React, { useEffect } from "react";
import './Header.css';
import { Link } from 'react-router-dom' 
import {useUserAuth} from '../../context/UserAuthContext'; 


function Header(props){
    const {user, logOut}=useUserAuth()
    // let navigate=useNavigate();
    const HandleLogout=async()=>{ 
        await logOut();
        // navigate("/signin");  
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
                <h2 className="pctitle">Placement Cell</h2>
                {/* <div className="searchbar">Searchbars</div> */}
            </div>
            <div className="nav">

                
                <Link to="/home" className="nav-item" id="home">Home</Link>
                {/* <Link to="/admin" className="nav-item">Admin</Link> */}
                <Link to="/application" className="nav-item" id="application">Application</Link>
                <Link to="/profile" className="nav-item profile" id="profile">Profile</Link>
                {/* <Link to="/signin" className="nav-item">Sign In</Link>  */}
                <Link onClick={HandleLogout} to="/" className="nav-item">Log Out</Link>
            </div>
        </div>
    )
}

export default Header;