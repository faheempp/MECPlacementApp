import React from 'react'
import CreateDrive from '../components/CreateDrive/CreateDrive';
import CreateNews from '../components/CreateNews/CreateNews';
import AdminHeader from '../components/Header/AdminHeader';
import EditDriveContainer from '../components/EditDriveContainer/EditDriveContainer';
import Header from '../components/Header/Header';

export default function Update() {
  return (
    <div>
      <div className='admin-page'>
        <AdminHeader/>
        <CreateDrive/>
        <CreateNews/>
    </div>
    </div>
  )
}
