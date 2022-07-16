import React from "react";
import './DriveInfo.css';

function DriveInfo(){
    return(
        <div className="driveinfo">
          <div className="side-card">
            <p className="requirements">Requirements</p>
            <p className="last-date">Last Date</p>
          </div>
          <h3>Company Name</h3>
          <h2>Post: </h2>
          <div>
            <p>Other details</p>
          </div>
          <button>View</button>
          
        </div>
    )
}

export default DriveInfo;