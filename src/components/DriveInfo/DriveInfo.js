import react from "react";
import { Link } from "react-router-dom";
import './DriveInfo.css';
import DriveDetail from "../../pages/DriveDetail";
function DriveInfo(props){
  const companyName=props.companyName;
  const slot=props.slot;
  const post=props.post;
  const location=props.location;
  const lastDate=props.lastDate;
  const criteria=props.criteria;
  const id=props.id;
  console.log(props)
    return(
        <div className="driveinfo">
          <div className="drive-info-left-card">            
            <h3 className="company-name">{companyName}</h3>
            <h2 className="drive-post-name">Post: {post}</h2>
            <div className="company-slot">Slot: {slot}</div> 
            <div className="company-location">Location: {location}</div>
            <Link to={'/drivedetail/'+id}><button onClick={<DriveDetail/>}>View</button></Link>
          </div>
          <div className="drive-info-right-card">
            <p className="requirements">Criteria:</p>
            <p className="requirements">
              {criteria}
            </p>
            <p className="last-date">Last Date: {lastDate}</p>
          </div>
          
          
        </div>
    )
}

export default DriveInfo;