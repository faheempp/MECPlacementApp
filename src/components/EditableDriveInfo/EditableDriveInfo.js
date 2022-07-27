import React from 'react'
import './EditableDriveInfo.css'

export default function EditableDriveInfo(props) {
  const companyName=props.companyName;
  const slot=props.slot;
  const post=props.post;
  const brief=props.brief;
  const eligibleBranches=props.eligibleBranches;
  const location=props.location;
  const lastDate=props.lastDate;
  const criteria=props.criteria;
  const pay=props.pay;
  const remarks=props.remarks
  const id=props.id;

  
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
                    
                />
            </div>
            <div className='feature'>
                <label htmlFor="brief">Brief</label>
                <textarea 
                    type="text" 
                    name="brief"
                    id="brief"
                    value={brief}
                />
            </div>
             <div className='feature'>
                <label htmlFor="post">Post</label>
                <input 
                    type="text" 
                    name="post"
                    id="post"
                    value={post}
                />
            </div>
            <div className='feature'>
                <label htmlFor="slot">Slot</label>
                <input 
                    type="text" 
                    name="slot"
                    id="slot"
                    value={slot}
                />  
            </div>
            <div className='feature'>
                <label htmlFor="eligibleBranches">Eligible Branches</label>
                <input 
                    type="text" 
                    name="eligibleBranches"
                    id="eligibleBranches"
                    value={eligibleBranches}
                />
            </div>
            <div className='feature'>
                <label htmlFor="criteria">Criteria</label>
                <textarea 
                    type="text" 
                    name="criteria"
                    id="criteria"
                    value={criteria}
                />
            </div>
            <div className='feature'>
                <label htmlFor="remarks">Remarks</label>
                <textarea 
                    type="text" 
                    name="remarks"
                    id="remarks"
                    value={remarks}
                />
            </div>
            <div className='feature'>
                <label htmlFor="location">Location</label>
                <input 
                    type="text" 
                    name="location"
                    id="location"
                    value={location}
                />
            </div>
            <div className='feature'>
                <label htmlFor="pay">Pay</label>
                <input 
                    type="text" 
                    name="pay"
                    id="pay"
                    value={pay}
                />
            </div>
            <div className='feature'>
                <label htmlFor="lastDate">Last Date</label>
                <input 
                    type="text" 
                    name="lastDate"
                    id="lastDate"
                    value={lastDate}
                />
            </div>            
            <div>
                <button>Update drive</button>
            </div>
        </form>
        </div>
  )
}
