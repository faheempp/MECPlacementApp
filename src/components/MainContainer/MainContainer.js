
import DriveInfo from "../DriveInfo/DriveInfo";
import './MainContainer.css';
import '../DriveInfo/DriveInfo.css';
import NewsCard from "../NewsCard/NewsCard";
//import { useSelector } from 'react-redux';
import React, { useEffect,useState } from 'react'
import DriveDataService from '../../services/drive.services.js'
export default function MainContainer() {

    const [drives, setDrives]=useState([]);

    useEffect (()=>{
        getDrives();
    },[])

    const getDrives= async ()=>{
        const data= await DriveDataService.getAllDrives();
        console.log(data.docs)
        setDrives(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
    }
  return(
        <div className="main-container">
            {/* <pre>{JSON.stringify(drives,undefined,2)}</pre> */}
            <div className="upcomingdrives">
                <h2 className="upcomingdrivesheading">Upcoming Drives</h2>
                <div className="driveinfocontainer">
                    {drives.map((doc,index)=>{
                        return (
                            <DriveInfo 
                                companyName={doc.companyName} 
                                post={doc.post}
                                slot={doc.slot}
                                />
                        )
                        })}
                    {/* <driveinfo/> */}
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

