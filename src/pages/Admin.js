import React from 'react'
import CreateDrive from '../components/CreateDrive/CreateDrive';
import Header from '../components/Header/Header';

export default function Admin() {
  return (
    <div>
      <div className='admin-page'>
        <Header/>
        <CreateDrive/>
    </div>
    </div>
  )
}
