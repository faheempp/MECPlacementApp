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
        {/* <h2 className="drive-detail-heading">Drive Details {}</h2> */}
        <div className='drive-detail-info'>
            <div className="">            
            <h3 className="company-name"> {companyName}</h3>
            <h4 className='about company-about'>About</h4>
            <div className="descrp compamny-brief">{brief}</div>
            <h4 className='about company-post'>Post</h4>
            <h2 className=" descrp drive-post-name">{post}</h2>
            <h4 className='about company-slot'>Slot:</h4>
            <div className="descrp drive-company-slot">{slot}</div>
            <h4 className='about company-location'>Location</h4> 
            <div className="descrp drive-company-location">{location}</div>
            <h4 className='about company-eligibility'>Eligibility</h4> 
            <div className='descrp drive-company-eligibleBranches'>{eligibleBranches}</div> 
            <h4 className='about company-last-date'>Last Date</h4> 
            <div className='descrp drive-company-lastdate'>{lastDate}</div> 
            <h4 className='about company-pay'>Pay:</h4> 
            <div className='descrp drive-company-pay'>{pay}</div>
            <h4 className='about company-remarks'>Remarks</h4>  
            <div className='descrp drive-company-remarks'>{remarks}</div> 
            <h4 className='about company-criteria'>Criteria</h4> 
            <div className="descrp drive-criteria">{criteria}</div>
            <h4 className='about company-registration'>Registration Link</h4> 
            <div className='descrp company-reg-link'>link</div>
            <h4 className='about company-website'>Company Website</h4> 
            <div className='descrp drive-company-web'>Website here</div>
            <button>Apply</button>
          </div>
        </div>
        
    </div>
  )
}
