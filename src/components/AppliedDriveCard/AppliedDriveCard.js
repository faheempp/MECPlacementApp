import React from 'react'
import './AppliedDriveCard.css';
export default function AppliedDriveCard(props) {
  return (
    <div className='applied-drive-card'>
        <div className='applied-drive-card-left'>
            <h3>Company Name</h3>
            <h4>Post</h4>
            <p>Date of Application: 01/01/2022</p>
            <button>View Application</button>
        </div>
        <div className='applied-drive-card-right'>
            <div className='applied-drive-current-status'>Current Status:</div>
            <p>{props.status}</p>
        </div>
    </div>
  )
}
