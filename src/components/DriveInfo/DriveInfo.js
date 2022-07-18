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
            </ul>
            <p className="last-date">Last Date: 01/01/2020</p>
          </div>
          <div className="main-card">            
          <h3 className="company-name">Company Name</h3>
          <h2 className="drive-post-name">Post</h2>
          <div className="company-slot">c2</div> 
          <div className="company-location">Kochi</div> 
          <button>View</button>

          </div>
          
        </div>
    )
}

export default DriveInfo;