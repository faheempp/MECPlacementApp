import React from 'react'
import CreateDrive from '../components/CreateDrive/CreateDrive';
import CreateNews from '../components/CreateNews/CreateNews';
import EditDriveContainer from '../components/EditDriveContainer/EditDriveContainer';
import EditNewsContainer from '../components/EditNewsContainer/EditNewsContainer';
import AdminHeader from '../components/Header/AdminHeader';

export default function Admin() {
  return (
    <div>
      <div className='admin-page'>
        <AdminHeader/>
        <EditDriveContainer/>
        <EditNewsContainer/>
    </div>
    </div>
  )
}
