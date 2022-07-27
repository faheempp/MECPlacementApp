import React,{useState} from 'react'
import DriveDataService from "../../services/drive.services"

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
  const id=props.id;
  
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
            await DriveDataService.updateDrive(id,updatedDrive);
            setMessage({error:false,msg:"drive updated"});
        }
        catch(err){
            setMessage({error:true,msg:err.message});
        }
  }
  return (
    <div>
        <form>
            <div>
                <label htmlFor="companyName">Company Name</label>
                <input
                    type="text" 
                    name="companyName"
                    id="companyName"
                    value={companyName}
                    onChange={(e)=>setCompanyName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="brief">Brief</label>
                <input 
                    type="text" 
                    name="brief"
                    id="brief"
                    value={brief}
                    onChange={(e)=>setBrief(e.target.value)}
                />
            </div>
             <div>
                <label htmlFor="post">Post</label>
                <input 
                    type="text" 
                    name="post"
                    id="post"
                    value={post}
                    onChange={(e)=>setPost(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="slot">Slot</label>
                <input 
                    type="text" 
                    name="slot"
                    id="slot"
                    value={slot}
                    onChange={(e)=>setSlot(e.target.value)}
                />  
            </div>
            <div>
                <label htmlFor="eligibleBranches">Eligible Branches</label>
                <input 
                    type="text" 
                    name="eligibleBranches"
                    id="eligibleBranches"
                    value={eligibleBranches}
                    onChange={(e)=>setEligibleBranches(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="criteria">Criteria</label>
                <input 
                    type="text" 
                    name="criteria"
                    id="criteria"
                    value={criteria}
                    onChange={(e)=>setCriteria(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="remarks">Remarks</label>
                <input 
                    type="text" 
                    name="remarks"
                    id="remarks"
                    value={remarks}
                    onChange={(e)=>setRemarks(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="location">Location</label>
                <input 
                    type="text" 
                    name="location"
                    id="location"
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="pay">Pay</label>
                <input 
                    type="text" 
                    name="pay"
                    id="pay"
                    value={pay}
                    onChange={(e)=>setPay(e.target.value)}
                />
            </div>
            
            <div>
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
                <button onClick={updateHandle}>Update drive</button>
            </div>
        </form>
        </div>
  )
}
