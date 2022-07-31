import React from 'react'
import EditDriveContainer from '../EditDriveContainer/EditDriveContainer';
import EditNewsContainer from '../EditNewsContainer/EditNewsContainer';
import './AdminUpdatePageContainer.css'
export default function AdminUpdatePageContainer() {
  return (
    <div className='update-page-container'>
        <div className='update-page-left'><EditDriveContainer/></div>
        <div className='update-page-left'><EditNewsContainer/></div>
    </div>
  )
}