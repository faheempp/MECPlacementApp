import React from 'react'
import louisimg from '../../images/lous.png'
import './DriveDetailContainer.css';
import DriveDataService from '../../services/drive.services';
import {doc} from 'firebase/firestore'
export default function DriveDetailPageContainer(props){
    const driveid=props.driveid;

    const getDriveDetail= async ()=>{
        const data= await DriveDataService.getDrive(driveid);
        //console.log(data.docs)
        // setDrives(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
    }
  return (
    <div className='drive-detail-page-container'>
        <h2 className="drive-detail-heading">Drive Details {}</h2>
        <div className='drive-detail-info'>
            <div className="drive-info-left-card">            
            <h3 className="company-name">companyName {driveid}</h3>
            <div className="compamny-brief">KeyValue Software Systems is a product development start-up from India, which builds highly scalable web and mobile products for customers around the globe.</div>
            <h2 className="drive-post-name">Post: post</h2>
            <div className="company-slot">Slot: slot</div> 
            <div className="company-location">Location: location</div> 
            <button>Apply</button>
          </div>
          <div className="drive-info-right-card">
            <p className="requirements">Criteria:</p>
            <p className="requirements">
              criteria
            </p>
            <p className="last-date">Last Date: lastDate</p>
          </div>
        </div>
        
    </div>
  )
}
