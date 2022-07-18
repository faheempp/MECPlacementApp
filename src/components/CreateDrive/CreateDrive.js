
import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addDrive } from '../../store/actions/driveActions';
export default function CreateDrive() {
    const [companyName,setCompanyName]=useState('');
    const [slot, setSlot]=useState('');
    const [post,setPost]=useState('');

    const dispatch=useDispatch();
    const addNewDrive=(e)=>{
        e.preventDefault();
        console.log(companyName,post);
        dispatch(addDrive({
            companyName,
            post,
            slot,
            id:nanoid()
        }))
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
