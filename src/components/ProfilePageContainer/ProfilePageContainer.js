import React from 'react'
import louisimg from '../../images/lous.png'
import './ProfilePageContainer.css';
export default function ProfilePageContainer(){
  return (
    <div className='profile-page-container'>
        <h2 className="profile-heading">Profile</h2>
        <div className='profile-info-container'>
          <div className='img1'>
            <img src={louisimg}></img>
          </div>

          <div className='con1'>
          <div className='line'>
          </div>
          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Name
            </div>
            <div className='profile-info-item-data'>
            <input type="text" class="form-control" placeholder="enter name" value=""/>
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Branch
            </div>
            <div className='profile-info-item-data'>
            <input type="text" class="form-control" placeholder="enter branch" value=""/>
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Semester
            </div>
            <div className='profile-info-item-data'>
            <input type="text" class="form-control" placeholder="enter semester" value=""/>
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              CGPA Aggregate
            </div>
            <div className='profile-info-item-data'>
            <input type="text" class="form-control" placeholder="enter value" value=""/>
            </div>
          </div>
          

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Email
            </div>
            <div className='profile-info-item-data'>
            <input type="text" class="form-control" placeholder="enter email id" value=""/>
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Contact No
            </div>
            <div className='profile-info-item-data'>
            <input type="text" class="form-control" placeholder="enter contact number" value=""/>
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              LinkedIn
            </div>
            <div className='profile-info-item-data'>
            <input type="text" class="form-control" placeholder="linkedin link here" value=""/>
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              GitHub
            </div>
            <div className='profile-info-item-data'>
            <input type="text" class="form-control" placeholder="github link here" value=""/>
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Portfolio
            </div>
            <div className='profile-info-item-data'>
            <input type="text" class="form-control" placeholder="portfolio link here" value=""/>
            </div>
          </div>

          <div className='profile-info-item'>
            <div className='profile-info-item-name'>
              Resume
            </div>
            <div className='profile-info-item-data'>
            <input type="text" class="form-control" placeholder="resume link here" value=""/>
            </div>
          </div>
          <div className='update-profile-button'>
            <button>
              Update Profile
            </button>
          </div>
          </div>

        </div>
    </div>
  )
}
