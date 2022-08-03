import React from 'react'
import Header from '../components/Header/Header';
import MainContainer from '../components/MainContainer/MainContainer';
import Footer from '../components/Footer/Footer';
import { useUserAuth } from '../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import './SignIn.css';

import { clear } from '@testing-library/user-event/dist/clear';


export default function Home() {
  const {user, logOut}=useUserAuth()
  let navigate=useNavigate();
  const HandleLogout=async()=>{
    
    await logOut();
    navigate("/signin");
    

  }
  return (
    <div>
        <Header active='home'/>
        <div className='input-field signin-button-container'>
        {/* <button className='signin-button' onClick={ HandleLogout } style ={{ width: 120 }}>LogOut</button> */}
        </div>
        <MainContainer/>
        <Footer/>
    </div>
  )
}
