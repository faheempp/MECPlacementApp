
import DriveInfo from "../DriveInfo/DriveInfo";
import './MainContainer.css';
import '../DriveInfo/DriveInfo.css';
import NewsCard from "../NewsCard/NewsCard";
import { useSelector } from 'react-redux';

import React from 'react'

export default function MainContainer() {

    // const drives=useSelector(state => state.drives.drives)
    // const drivedetail= drives.map(drive=>
    //     <div className="driveinfo">
    //         <div>{drive.companyName}</div>
    //         <div>{drive.post}</div>
    //         <div>{drive.slot}</div>
    //     </div>
        
    //     )
  return(
        <div className="main-container">
            <div className="upcomingdrives">
                <h2 className="upcomingdrivesheading">Upcoming Drives</h2>
                <div className="driveinfocontainer">
                    <driveinfo/>
                </div>
            </div>
            <div className="news-container">
                <h2 className="news-section-heading">News</h2>
                <div className="news-list-container">
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                </div>
            </div>
        </div>
    )
}
