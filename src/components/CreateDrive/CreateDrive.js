import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addDrive } from '../../store/actions/driveActions';
import { nanoid } from 'nanoid';


function CreateDrive(){

//   const state={
//         companyName:'',
//         briefInfo:'',
//         post:'',
//         slot:'',
//         lastDate:'',
//         location:'',
//         requirements:'',
//     }
    const [companyName, setCompanyName]=useState('');
    const [briefInfo, setBriefInfo]=useState('');
    const [post, setPost]=useState('');
    const [slot, setSlot]=useState('');
    const [lastDate, setLastDate]=useState('');
    const [location, setLocation]=useState('');
    const [requirements, setRequirements]=useState('');

    const dispatch=useDispatch();
    // const handleChange=(e)=>{
    //     this.setState({
    //         [e.target.id]: e.target.value,
    //     })

    // }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state);
        dispatch(addDrive({
            id: nanoid(),
            companyName,
            briefInfo,
            post,
            slot,
            lastDate,
            location,
            requirements,
        }))
    }
    return (
      <div className=''>
        <form onSubmit={this.handleSubmit}  className=''>
            <h5 className='signin-heading'>Create new drive</h5>
            
            <div className='input-field'>
                <label htmlFor='companyName'>Company Name</label>
                <input type="text" id="companyName" value={companyName}  onChange={(e)=>setCompanyName(e.target.value)}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='briefInfo'>Brief Info</label>
                <input type="text" id="briefInfo" value={briefInfo} onChange={(e)=>setBriefInfo(e.target.value)}></input>
            </div>
            
            
            <div className='input-field'>
                <label htmlFor='post'>Post</label>
                <input type="text" id="post" value={post }onChange={(e)=>setPost(e.target.value)}></input>
            </div>
            
            <div className='input-field'>
                <label htmlFor='slot'>Slot</label>
                <input type="text" id="slot"  value={slot}onChange={(e)=>setSlot(e.target.value)}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='requirements'>Requirements</label>
                <input type="text" id="requirements" value={requirements}onChange={(e)=>setRequirements(e.target.value)}></input>
            </div>
            
            <div className='input-field'>
                <label htmlFor='location'>Location</label>
                <input type="text" id="location" value={location} onChange={(e)=>setLocation(e.target.value)}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='lastDate'>Last date</label>
                <input type="date" id="lastDate" value={lastDate}onChange={(e)=>setLastDate(e.target.value)}></input>
            </div>
            <div className='input-field'>
                <button className='create-drive-button'>Create Drive</button>
            </div>
        </form>
      </div>
    )
  
}

export default CreateDrive