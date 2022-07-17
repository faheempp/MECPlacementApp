import React from 'react'
import AppliedDriveCard from '../AppliedDriveCard/AppliedDriveCard'
import './ApplicationPageContainer.css';
export default function ApplicationPageContainer(){
  return (
    <div className='application-page-container'>
        <h2 className="application-heading">Your Applications</h2>
        <AppliedDriveCard status="evaluating"/>
        <AppliedDriveCard status="accepted"/>
        <AppliedDriveCard status="rejected"/>
    </div>
  )
}
