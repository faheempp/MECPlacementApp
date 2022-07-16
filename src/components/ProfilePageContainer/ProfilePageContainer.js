import React from 'react'
import louisimg from '../../images/lous.png'
import './ProfilePageContainer.css';
export default function ProfilePageContainer(){
  return (
    <div className='profile-page-container'>
        <h2 className="profile-heading">Profile</h2>
        <div className='profile-info-container'>

          <div className='profile-info-item profile-image'>
            <div className='profile-info-item-name'>
            </div>
            <div className='profile-info-item-data'>
              <img src={louisimg}></img>
            </div>
          </div>
          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Name
            </div>
            <div className='profile-info-item-data'>
              Louis Emmanuel Thomas
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
              9.01
            </div>
          </div>
          

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Email
            </div>
            <div className='profile-info-item-data'>
              loose@gmail.com
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Contact No
            </div>
            <div className='profile-info-item-data'>
              9999999999
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              LinkedIn
            </div>
            <div className='profile-info-item-data'>
              Link here
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              GitHub
            </div>
            <div className='profile-info-item-data'>
              GH Link here
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Portfolio
            </div>
            <div className='profile-info-item-data'>
              Portfolio Link here
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Resume
            </div>
            <div className='profile-info-item-data'>
              Link here
            </div>
          </div>

          <div className='update-profile-button'>
            <button>
              Update Profile
            </button>
          </div>
        </div>
    </div>
  )
}
