import React from 'react'
import CreateDrive from '../components/CreateDrive/CreateDrive';
import CreateNews from '../components/CreateNews/CreateNews';
import AdminHeader from '../components/Header/AdminHeader';
import Header from '../components/Header/Header';

export default function Update() {
  return (
    <div>
      <div className='admin-page'>
        <AdminHeader/>
        <h1>Update Page</h1>
        <CreateDrive/>
        <CreateNews/>
    </div>
    </div>
  )
}
