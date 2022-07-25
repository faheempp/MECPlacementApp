import React from 'react'
import CreateDrive from '../components/CreateDrive/CreateDrive';
import CreateNews from '../components/CreateNews/CreateNews';
import Header from '../components/Header/Header';

export default function Admin() {
  return (
    <div>
      <div className='admin-page'>
        <Header/>
        <CreateDrive/>
        <CreateNews/>
    </div>
    </div>
  )
}
