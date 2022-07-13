import React from "react";
import DriveInfo from "./driveInfo";
import './components.css';
function MainContainer(){
     return(
        <div className="main-container">
            <h2>Upcoming Drives</h2>
            <div className="driveinfocontainer">
                <DriveInfo></DriveInfo>
                <DriveInfo></DriveInfo>
                <DriveInfo></DriveInfo>
                <DriveInfo></DriveInfo>
            </div>
        </div>
    )
}

export default MainContainer;