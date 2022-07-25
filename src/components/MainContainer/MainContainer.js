
import DriveInfo from "../DriveInfo/DriveInfo";
import './MainContainer.css';
import '../DriveInfo/DriveInfo.css';
import NewsCard from "../NewsCard/NewsCard";
//import { useSelector } from 'react-redux';
import React, { useEffect,useState } from 'react'
import DriveDataService from '../../services/drive.services.js'
import NewsDataService from "../../services/news.services";
import { doc } from "firebase/firestore";
export default function MainContainer() {

    const [drives, setDrives]=useState([]);
    const [news,setNews]=useState([]);

    useEffect (()=>{
        getDrives();
        getNews();
    },[])

    const getDrives= async ()=>{
        const data= await DriveDataService.getAllDrives();
        console.log(data.docs)
        setDrives(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
    }
    const getNews=async ()=>{
        const data= await NewsDataService.getAllNews();
        console.log(data.docs)
        setNews(data.docs.map((doc)=>({...doc.data(),id: doc.id}))) 
    }
  return(
        <div className="main-container">
            <div className="upcomingdrives">
                <h2 className="upcomingdrivesheading">Upcoming Drives</h2>
                <div className="driveinfocontainer">
                    {drives.map((doc,index)=>{
                        return (
                            <DriveInfo 
                                companyName={doc.companyName} 
                                post={doc.post}
                                slot={doc.slot}
                                location={doc.location}
                                criteria={doc.criteria}
                                lastDate={doc.lastDate}
                                />
                        )
                        })}
                    
                </div>
            </div>
            <div className="news-container">
                <h2 className="news-section-heading">News</h2>
                <div className="news-list-container">
                    {news.map((doc,index)=>{
                        return(
                            <NewsCard newsHeading={doc.newsHeading} newsContent={doc.newsContent}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

