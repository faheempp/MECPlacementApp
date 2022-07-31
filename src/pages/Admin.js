import React from 'react'
import CreateDrive from '../components/CreateDrive/CreateDrive';
import CreateNews from '../components/CreateNews/CreateNews';
import AdminUpdatePageContainer from '../components/AdminUpdatePageContainer/AdminUpdatePageContainer';
import AdminHeader from '../components/Header/AdminHeader';

export default function Admin() {
  return (
    <div>
      <div className='admin-page'>
        <AdminHeader/>
        <AdminUpdatePageContainer/>
    </div>
    </div>
  )
}
