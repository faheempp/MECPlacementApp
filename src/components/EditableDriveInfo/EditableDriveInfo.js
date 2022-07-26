import React from 'react'

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
    <div>
        <form>
            <div>
                <label htmlFor="companyName">Company Name</label>
                <input
                    type="text" 
                    name="companyName"
                    id="companyName"
                    value={companyName}
                    
                />
            </div>
            <div>
                <label htmlFor="brief">Brief</label>
                <input 
                    type="text" 
                    name="brief"
                    id="brief"
                    value={brief}
                />
            </div>
             <div>
                <label htmlFor="post">Post</label>
                <input 
                    type="text" 
                    name="post"
                    id="post"
                    value={post}
                />
            </div>
            <div>
                <label htmlFor="slot">Slot</label>
                <input 
                    type="text" 
                    name="slot"
                    id="slot"
                    value={slot}
                />  
            </div>
            <div>
                <label htmlFor="eligibleBranches">Eligible Branches</label>
                <input 
                    type="text" 
                    name="eligibleBranches"
                    id="eligibleBranches"
                    value={eligibleBranches}
                />
            </div>
            <div>
                <label htmlFor="criteria">Criteria</label>
                <input 
                    type="text" 
                    name="criteria"
                    id="criteria"
                    value={criteria}
                />
            </div>
            <div>
                <label htmlFor="remarks">Remarks</label>
                <input 
                    type="text" 
                    name="remarks"
                    id="remarks"
                    value={remarks}
                />
            </div>
            <div>
                <label htmlFor="location">Location</label>
                <input 
                    type="text" 
                    name="location"
                    id="location"
                    value={location}
                />
            </div>
            <div>
                <label htmlFor="pay">Pay</label>
                <input 
                    type="text" 
                    name="pay"
                    id="pay"
                    value={pay}
                />
            </div>
            
            <div>
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
