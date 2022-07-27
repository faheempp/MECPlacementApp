
import React,{useState} from 'react'
import DriveDataService from "../../services/drive.services"
import './EditableDriveInfo.css'


export default function EditableDriveInfo(props) {
  const [companyName,setCompanyName]=useState(props.companyName);
  const [slot,setSlot]=useState(props.slot);
  const [post,setPost]=useState(props.post);
  const [brief,setBrief]=useState(props.brief);
  const [eligibleBranches,setEligibleBranches]=useState(props.eligibleBranches);
  const [location,setLocation]=useState(props.location);
  const [lastDate,setLastDate]=useState(props.lastDate);
  const [criteria,setCriteria]=useState(props.criteria);
  const [pay,setPay]=useState(props.pay);
  const [remarks,setRemarks]=useState(props.remarks);
  const driveId=props.id;
  
  const [message,setMessage]=useState({error:false,msg:""});
  const updateHandle=async(e)=>{
    const updatedDrive={
            companyName,
            brief,
            eligibleBranches,
            criteria,
            location,
            pay,
            slot,
            post,
            lastDate,
            remarks
        }
        try{
            await DriveDataService.updateDrive(driveId,updatedDrive);
            setMessage({error:false,msg:"drive updated"});
        }
        catch(err){
            setMessage({error:true,msg:err.message});
        }
  }
  const deleteHandle=async()=>{
    
    try{
            await DriveDataService.deleteDrive(driveId);
            setMessage({error:false,msg:"Drive Deleted"});
            console.log(driveId);
        }
        catch(err){
            setMessage({error:true,msg:err.message});
        }

  }
  return (
    <div className='company-form'>
        <div className='adm-card-heading'>{companyName} Drive</div>
        <form>
            <div className='feature'>
                <label htmlFor="companyName">Company Name</label>
                <input
                    type="text" 
                    name="companyName"
                    id="companyName"
                    value={companyName}
                    onChange={(e)=>setCompanyName(e.target.value)}
                />
            </div>
            <div className='feature'>
                <label htmlFor="brief">Brief</label>
                <textarea 
                    type="text" 
                    name="brief"
                    id="brief"
                    value={brief}
                    onChange={(e)=>setBrief(e.target.value)}
                />
            </div>
             <div className='feature'>
                <label htmlFor="post">Post</label>
                <input 
                    type="text" 
                    name="post"
                    id="post"
                    value={post}
                    onChange={(e)=>setPost(e.target.value)}
                />
            </div>
            <div className='feature'>
                <label htmlFor="slot">Slot</label>
                <input 
                    type="text" 
                    name="slot"
                    id="slot"
                    value={slot}
                    onChange={(e)=>setSlot(e.target.value)}
                />  
            </div>
            <div className='feature'>
                <label htmlFor="eligibleBranches">Eligible Branches</label>
                <input 
                    type="text" 
                    name="eligibleBranches"
                    id="eligibleBranches"
                    value={eligibleBranches}
                    onChange={(e)=>setEligibleBranches(e.target.value)}
                />
            </div>
            <div className='feature'>
                <label htmlFor="criteria">Criteria</label>
                <textarea 
                    type="text" 
                    name="criteria"
                    id="criteria"
                    value={criteria}
                    onChange={(e)=>setCriteria(e.target.value)}
                />
            </div>
            <div className='feature'>
                <label htmlFor="remarks">Remarks</label>
                <textarea 
                    type="text" 
                    name="remarks"
                    id="remarks"
                    value={remarks}
                    onChange={(e)=>setRemarks(e.target.value)}
                />
            </div>
            <div className='feature'>
                <label htmlFor="location">Location</label>
                <input 
                    type="text" 
                    name="location"
                    id="location"
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                />
            </div>
            <div className='feature'>
                <label htmlFor="pay">Pay</label>
                <input 
                    type="text" 
                    name="pay"
                    id="pay"
                    value={pay}
                    onChange={(e)=>setPay(e.target.value)}
                />
            </div>
            <div className='feature'>
                <label htmlFor="lastDate">Last Date</label>
                <input 
                    type="text" 
                    name="lastDate"
                    id="lastDate"
                    value={lastDate}
                    onChange={(e)=>setLastDate(e.target.value)}
                />
            </div>            
            <div>
                <button onClick={updateHandle}>Update</button>
                <button onClick={deleteHandle}>Delete</button>
            </div>
            
        </form>
        </div>
  )
}
