import React from 'react'
import {auth, createUserDocument} from '../../firebase-config'
import louisimg from '../../images/lous.png'
import './ProfilePageContainer.css';
import {useUserAuth} from "../../context/UserAuthContext"
import  { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom'; 


export default function ProfilePageContainer(){
  const { user }=useUserAuth()
  const [error, setError] = useState("");
  let navigate=useNavigate();

  const HandleProfileUpdate=async(e) => {  
    e.preventDefault();
    setError("");
   
    try {
      
    await createUserDocument(user)
   
    navigate('/application');
  }catch (err) {
    setError(err.message);
  }
}


  return (
    <div className='profile-page-container'>
        <h2 className="profile-heading">Profile</h2>
       
        <div className='profile-info-container'>
          <div className='img1'>
            <img src={ localStorage.getItem("Photo") } />
          </div>

          <div className='con1'>
          <div className='line'>
          </div>
          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Name
            </div>
            <div className='profile-info-item-data'>
             Louis
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Branch
            </div>
            <div className='profile-info-item-data'>
              Electronics and Communication
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Semester
            </div>
            <div className='profile-info-item-data'>
              6
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              CGPA Aggregate
            </div>
            <div className='profile-info-item-data'>
              8.9
            </div>
          </div>
          

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Email
            </div>
            <div className='profile-info-item-data'>
             
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Contact No
            </div>
            <div className='profile-info-item-data'>
              989009989
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              LinkedIn
            </div>
            <div className='profile-info-item-data'>
              linkedinlinkhere.com
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              GitHub
            </div>
            <div className='profile-info-item-data'>
              githublikhere.com
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Portfolio
            </div>
            <div className='profile-info-item-data'>
              louis.com
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Resume
            </div>
            <div className='profile-info-item-data'>
              louis.resume          
            </div>
          </div>
          <div className='update-profile-button'>
            <button onClick={HandleProfileUpdate}>
              Update Profile
            </button>
          </div>
          </div>

        </div>
    </div>
  )
}
