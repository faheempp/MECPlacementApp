import React,{useEffect, useState} from 'react'
import louisimg from '../../images/lous.png'
import './DriveDetailContainer.css';
import DriveDataService from '../../services/drive.services';
import {doc} from 'firebase/firestore'
export default function DriveDetailPageContainer(props){
  const [companyName,setCompanyName]=useState('');
  const [brief,setBrief]=useState(''); 
  const [criteria,setCriteria]=useState(''); 
  const [eligibleBranches,setEligibleBranches]=useState(''); 
  const [lastDate,setLastDate]=useState(''); 
  const [location,setLocation]=useState(''); 
  const [pay,setPay]=useState(''); 
  const [post,setPost]=useState(''); 
  const [remarks,setRemarks]=useState(''); 
  const [slot,setSlot]=useState(''); 

  const driveid=props.driveid;
     const getDriveDetail= async ()=>{
        const data= await DriveDataService.getDrive(driveid);
        // console.log(data);
        const companyName=data._document.data.value.mapValue.fields.companyName.stringValue;
        const brief=data._document.data.value.mapValue.fields.brief.stringValue;
        const criteria=data._document.data.value.mapValue.fields.criteria.stringValue;
        const eligibleBranches=data._document.data.value.mapValue.fields.eligibleBranches.stringValue;
        const lastDate=data._document.data.value.mapValue.fields.lastDate.stringValue;
        const location=data._document.data.value.mapValue.fields.location.stringValue;
        const pay=data._document.data.value.mapValue.fields.pay.stringValue;
        const post=data._document.data.value.mapValue.fields.post.stringValue;
        const remarks=data._document.data.value.mapValue.fields.remarks.stringValue;
        const slot=data._document.data.value.mapValue.fields.slot.stringValue;
        setCompanyName(companyName);
        setBrief(brief);
        setCriteria(criteria);
        setEligibleBranches(eligibleBranches);
        setLastDate(lastDate);
        setLocation(location);
        setPay(pay);
        setPost(post);
        setRemarks(remarks);
        setSlot(slot);
        // setDrives(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
    }
    useEffect(()=>{
      getDriveDetail();
    },[])
   
  return (
    <div className='drive-detail-page-container'>
        <h2 className="drive-detail-heading">Drive Details {}</h2>
        <div className='drive-detail-info'>
            <div className="">            
            <h3 className="company-name"> {companyName}</h3>
            <div className="compamny-brief">{brief}</div>
            <h2 className="drive-post-name">Post: {post}</h2>
            <div className="company-slot">Slot: {slot}</div> 
            <div className="company-location">Location: {location}</div>
            <div className='company-eligibleBranches'>{eligibleBranches}</div> 
            <div className='company-lastdate'>{lastDate}</div> 
            <div className='company-pay'>{pay}</div> 
            <div className='company-remarks'>Remarks :{remarks}</div> 
            <div className="requirements">Criteria: {criteria}</div>
            <div className=''>Registration: Link Here</div>
            <div className=''>Website here</div>
            <button>Apply</button>
          </div>
        </div>
        
    </div>
  )
}
