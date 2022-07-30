import React, { Component, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import './SignIn.css'
import { useUserAuth } from '../context/UserAuthContext';
import { Form, Alert,Button } from "react-bootstrap";
import ProfilePageContainer from '../components/ProfilePageContainer/ProfilePageContainer'

const Signup=()=> {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  }
/*<<<<<<< HEAD
    const handleConfPasswordClick = () => {
        setConfPasswordEye(!conf_passwordEye)
    }  
    const handleChangeEmail=(e)=>{
        setEmail(e.value) 
    }
    const handleChangePassword=(e)=>{
        setPassword(e.value) 
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(password);
    } 
    const checkPasswords=(e)=>{
        if(document.getElementById('password').value === document.getElementById('conf-password').value){
            document.getElementById('passwords-not-same-error').className='hidden-error';
            document.getElementById('password').classList.remove('error-input')
            document.getElementById('conf-password').classList.remove('error-input')
            SignInWithGoogle();
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
=======
  };*/
  return (
    <>
    <div className="p-4 box">
      <h2 className="mb-3">New User Sign Up</h2>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="d-grid gap-2">
          <Button variant="primary" type="Submit">
              Login
            </Button>
          </div>
        </Form>
        
    </div>
    <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/SignIn">Login</Link>
      </div>
    </>
  )
}

export default Signup;
