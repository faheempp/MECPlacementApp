import React from 'react'
import './AppliedDriveCard.css';
export default function AppliedDriveCard() {
  return (
    <div className='applied-drive-card'>
        <div className='applied-drive-card-left'>
            <h3>Company Name</h3>
            <h4>Post</h4>
            <p>Other Details</p>
        </div>
        <div className='applied-drive-card-right'>
            <div className='applied-drive-current-status'>Current Status</div>
        </div>
    </div>
  )
}
