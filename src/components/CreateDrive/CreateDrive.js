
import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import DriveDataService from "../../services/drive.services"

export default function CreateDrive() {
    const [companyName,setCompanyName]=useState('');
    const [slot, setSlot]=useState('');
    const [post,setPost]=useState('');
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
            slot,
            post,
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
        setPost("");
        setSlot("");
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
                <button onClick={addNewDrive}>Add new drive</button>
            </div>
        </form>
    </div>
  )
}
