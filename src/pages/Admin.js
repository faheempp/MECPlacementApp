import React from 'react'
import CreateDrive from '../components/CreateDrive/CreateDrive';
import CreateNews from '../components/CreateNews/CreateNews';
import AdminUpdatePageContainer from '../components/AdminUpdatePageContainer/AdminUpdatePageContainer';
import AdminHeader from '../components/Header/AdminHeader';
import Footer from '../components/Footer/Footer';

export default function Admin() {
  return (
    <div>
      <div className='admin-page'>
        <AdminHeader/>
        <AdminUpdatePageContainer/>
        <Footer/>
    </div>
    </div>
  )
}
