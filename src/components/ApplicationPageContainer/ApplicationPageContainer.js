import React from 'react'
import AppliedDriveCard from '../AppliedDriveCard/AppliedDriveCard'
import './ApplicationPageContainer.css';
export default function ApplicationPageContainer(){
  return (
    <div className='application-page-container'>
        <h2 className="application-heading">Application</h2>
        <h3 className="applied-drive-heading">Applied Drives</h3>
        <AppliedDriveCard/>
    </div>
  )
}
