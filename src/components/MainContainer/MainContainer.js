import React from "react";

import DriveInfo from "../DriveInfo/DriveInfo";
import './MainContainer.css';
import NewsCard from "../NewsCard/NewsCard";


function MainContainer(){
     return(
        <div className="main-container">
            <div className="upcomingdrives">
                <h2 className="upcomingdrivesheading">Upcoming Drives</h2>
                <div className="driveinfocontainer">
                    <DriveInfo />
                    <DriveInfo />
                    <DriveInfo />
                </div>
            </div>
            <div className="news-container">
                <h2 className="news-section-heading">News</h2>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </div>
        </div>
    )
}

export default MainContainer;