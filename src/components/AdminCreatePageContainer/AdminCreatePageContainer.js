import React from 'react'
import CreateDrive from '../CreateDrive/CreateDrive';
import CreateNews from '../CreateNews/CreateNews';
import './AdminCreatePageContainer.css'
export default function AdminCreatePageContainer() {
  return (
    <div className='create-page-container'>
        <div className='create-page-left'><CreateDrive/></div>
        <div className='create-page-left'><CreateNews/></div>
    </div>
  )
}
