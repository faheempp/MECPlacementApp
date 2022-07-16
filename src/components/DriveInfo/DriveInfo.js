import React from "react";
import './DriveInfo.css';

function DriveInfo(){
    return(
        <div className="driveinfo">
          <div className="left-card">
            <h3>Company Name</h3>
            <h2>Post: </h2>
            <div>
              <p>Other details</p>
            </div>
            <button>View</button>
          </div>
          <div className="right-card">
            <p className="requirements">Requirements</p>
            <p className="last-date">Last Date</p>
          </div>
          
          
        </div>
    )
}

export default DriveInfo;