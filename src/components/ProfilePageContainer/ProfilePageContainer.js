const [studentName,setStudentName]=useState('');
  const [branch, setBranch]=useState('');
  const [classDivision,setClassDivision]=useState('');
  const [semester,setSemester]=useState('');
  const [cgpa,setCgpa]=useState('');
  const [backlogs,setBacklogs]=useState('');
  const [ktuid,setKtuId]=useState('');
  const [githubLink,setGithubLink]=useState('');
  const [portfolioLink,setPortfolioLink]=useState('');
  const [linkedIn,setLinkedIn]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');





import React,{useState} from 'react'
import {auth, createUserDocument} from '../../firebase-config'

import louisimg from '../../images/lous.png'
import './ProfilePageContainer.css';
import {useUserAuth} from "../../context/UserAuthContext"
import  { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom'; 


export default function ProfilePageContainer(){

  const [studentName,setStudentName]=useState('');
  const [branch, setBranch]=useState('');
  const [classDivision,setClassDivision]=useState('');
  const [semester,setSemester]=useState('');
  const [cgpa,setCgpa]=useState('');
  const [backlogs,setBacklogs]=useState('');
  const [ktuid,setKtuId]=useState('');
  const [githubLink,setGithubLink]=useState('');
  const [portfolioLink,setPortfolioLink]=useState('');
  const [linkedIn,setLinkedIn]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');
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
            <div>
              <label className='profile-info-item' >Name</label>
              <input className='profile-info-item-name'
                type="text"
                name="studentName"
                id="studentName"
                value={studentName}
                onChange={(e)=>setStudentName(e.target.value)}/>
            </div>
            <div>
              <label className='profile-info-item'>Branch</label>
              <input className='profile-info-item-name'
                type="text"
                name="branch"
                id="branch"
                value={branch}
                onChange={(e)=>setBranch(e.target.value)}/>
            </div>
            <div>
              <label className='profile-info-item' >Division</label>
              <input className='profile-info-item-name'
                type="text"
                name="division"
                id="division"
                value={division}
                onChange={(e)=>setDivision(e.target.value)}/>
            </div>
            <div>
              <label className='profile-info-item' >Semester</label>
              <input className='profile-info-item-name'
                type="text"
                name="semester"
                id="semester"
                value={semester}
                onChange={(e)=>setSemester(e.target.value)}/>
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
              { localStorage.getItem("Email")}
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
            <button>
              Update Profile
            </button>
          </div>
          </div>

        </div>
    </div>
  )
}

