import React, { Component, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import Header from '../components/Header/Header';
import './SignIn.css';
import { useUserAuth } from '../context/UserAuthContext';
import { Form, Alert,Button } from "react-bootstrap";


export default function Signin(){
  const [passwordEye, setPasswordEye]=useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { logIn,signinwithg } = useUserAuth();
  let navigate=useNavigate();
  
  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye)
}
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      if(email=="pcadmin@pc.com" && password == "pcadmin"){
        navigate("/admin");
      }
      else{navigate("/home");}
    } catch (err) {
      setError(err.message);
    }
  };

  const HandleGoogleAuth=async(e) => {  
    e.preventDefault();
    setError("");
    try {
    await signinwithg();
    navigate('/application');
  }catch (err) {
    setError(err.message);
  }
};
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value) 
    }
    const handleChangePassword=(e)=>{
        setPassword(e.target.value) 
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
            <div className='input-field signin-button-container'>
                <button className='signin-button' type = "Submit">Sign In</button>
            </div>
            <div className='separator'><p>OR</p></div>
            <div className='input-field signin-button-container'>
            <button className='signin-button' type = "Submit" onClick={HandleGoogleAuth}>Sign In With Google</button>
                </div>
        </form>
        <div className='formfooter' >Don't have an account? <Link to="/signup" className="">Sign Up</Link></div>
        </div>
        </div>
    )
 }