import React, { useState,useEffect } from 'react'
import DriveDataService from "../../services/drive.services"
import EditableDriveInfo from '../EditableDriveInfo/EditableDriveInfo';
import './EditDriveContainer.css';
export default function EditDriveContainer() {
    const [companyName,setCompanyName]=useState('');
    const [brief, setBrief]=useState('');
    const [eligibleBranches, setEligibleBranches]=useState('');
    const [criteria,setCriteria]=useState("");
    const [location,setLocation]=useState("");
    const [pay,setPay]=useState("");
    const [slot, setSlot]=useState('');
    const [post,setPost]=useState('');
    const [remarks,setRemarks]=useState("");
    const [lastDate,setLastDate]=useState("");
    const [message,setMessage]=useState({error:false,msg:""});
    
    const [drives, setDrives]=useState([]);

    useEffect (()=>{
        getDrives();
    },[])

    const getDrives= async ()=>{
        const data= await DriveDataService.getAllDrives();
        // console.log(data.docs)
        setDrives(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
    }
    

  return (
    <div className='edit-drive-container'>
        <h3>Edit drive</h3>
        <div>
            {drives.map((doc,index)=>{
                return(
                    <EditableDriveInfo
                        companyName={doc.companyName} 
                        post={doc.post}
                        slot={doc.slot}
                        brief={doc.brief}
                        eligibleBranches={doc.eligibleBranches}
                        location={doc.location}
                        criteria={doc.criteria}
                        lastDate={doc.lastDate}
                        pay={doc.pay}
                        remarks={doc.remarks}
                        id={doc.id}
                    />
                )
            })}
        </div>
    </div>
  )
}
