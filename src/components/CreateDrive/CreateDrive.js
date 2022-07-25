
import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import DriveDataService from "../../services/drive.services"

export default function CreateDrive() {
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
    
    const addNewDrive=async (e)=>{
        e.preventDefault();
        setMessage("");
        if(companyName === "" || slot==="" || post ===""){
            setMessage({error:true,msg:"all fields are mandatory"});
            return;
        }
        const newDrive={
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
        console.log(newDrive);

        try{
            await DriveDataService.addDrive(newDrive);
            setMessage({error:false,msg:"new drive added"});
        }
        catch(err){
            setMessage({error:true,msg:err.message});
        }

        setCompanyName("");
        setBrief("");
        setEligibleBranches("");
        setCriteria("");
        setLocation("");
        setPay("");
        setSlot("");
        setPost("");
        setLastDate("");
        setRemarks("");
    
    }

  return (
    <div>
        <h3>Create new drive</h3>
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
                <button onClick={addNewDrive}>Add new drive</button>
            </div>
        </form>
    </div>
  )
}
