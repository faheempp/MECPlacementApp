import React, { Component, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import Header from '../components/Header/Header';
import './SignIn.css';
import {auth, createUserDocument} from '../firebase-config'
import { useUserAuth } from '../context/UserAuthContext';

import { Form, Alert,Button } from "react-bootstrap";
import ProfilePageContainer from '../components/ProfilePageContainer/ProfilePageContainer'

export default function Signup(){
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const { user } = useUserAuth();
  let navigate=useNavigate();
  const [passwordEye, setPasswordEye]=useState(false);
  const [conf_passwordEye, setConfPasswordEye]=useState(false);
  

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      //HandleProfileUpdate();
    } catch (err) {
      setError(err.message);
    }
    setError("");
    console.log(user.email);
    try {  
    await createUserDocument(user)
    navigate('/application');
  }catch (err) {
    setError(err.message);
  }
  };


  

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye)
}
    const handleConfPasswordClick = () => {
        setConfPasswordEye(!conf_passwordEye)
    }  
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value) 
    }
    const handleChangePassword=(e)=>{
        setPassword(e.target.value) 
    }

    const checkPasswords=(e)=>{
        if(document.getElementById('password').value === document.getElementById('conf-password').value){
            document.getElementById('passwords-not-same-error').className='hidden-error';
            document.getElementById('password').classList.remove('error-input')
            document.getElementById('conf-password').classList.remove('error-input')
            
    
        }
        else{
            e.preventDefault();
            document.getElementById('passwords-not-same-error').className='visible-error'; 
            document.getElementById('password').className='error-input';
            document.getElementById('conf-password').classList.add('error-input');
        }
      }
    return (
      <div className='signin-page-container'>
        <div className='title-section'>
            <h1 className='signinpage-pctitle'>Placement Cell</h1>
        </div>
        <div className='signin-form-container'>
        {error && <Alert variant="danger">{error}</Alert>}
            <form  onSubmit={handleSubmit} className='sa'> 
            <div className='input-field'>
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" onChange={handleChangeEmail}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='password'>Password</label>
                <input type={(passwordEye === false)?"password":"text"} id="password" onChange={handleChangePassword}></input> 
                    {
                        (passwordEye === false)? <AiFillEyeInvisible className='visibility-icon' onClick={handlePasswordClick}/>:
                        <AiFillEye className='visibility-icon' onClick={handlePasswordClick}/>
                    }  
            </div>
            <div className='input-field'>
                <label htmlFor='confirm-password'>Confirm Password</label>
                <input type={(conf_passwordEye === false)?"password":"text"} id="conf-password" ></input> 
                    {
                        (conf_passwordEye === false)? <AiFillEyeInvisible className='visibility-icon' onClick={handleConfPasswordClick}/>:
                        <AiFillEye className='visibility-icon' onClick={handleConfPasswordClick}/>
                    } 
                <div id='passwords-not-same-error' className='hidden-error'>
                    <p>ERROR: passwords must match</p>    
                </div> 
            </div>
            <div className='input-field signin-button-container'>
                <button className='signin-button' onClick={ checkPasswords }>Sign Up</button>
            </div>
        </form>
        <div className='formfooter' >Already have an account? <Link to="/signin" className="">Sign In</Link></div>
        </div>
        </div>
    )
 }

  


