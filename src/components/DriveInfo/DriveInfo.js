import React from "react";
import './DriveInfo.css';

function DriveInfo(){
    return(
        <div className="driveinfo">

          <div className="side-card">
            <p className="requirements">Preferred requirements:</p>
            <ul className="requirements">
              <li>Requirement 1</li>
              <li>Requirement 2</li>
              <li>Requirement 3</li>
              <li>Requirement 4</li>
            </ul>
            <p className="last-date">Last Date: 01/01/2020</p>
          </div>
          <div className="main-card">            
          <h3>Company Name</h3>
          <h4>Post</h4> 
          <button>View</button>

          </div>
          
        </div>
    )
}

export default DriveInfo;