import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import './SignIn.css'
import  { SignInWithGoogle } from '../firebase-config'
export class SignUp extends Component {
  state={
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
  render() {
    return (
      <div className='signin-page-container'>
        <div className='title-section'>
            <h1 className='signinpage-pctitle'>Placement Cell</h1>
        </div>
        <div className='signin-form-container'>
            <form onSubmit={this.handleSubmit}  className='sa'>
            <h5 className='signin-heading'>Sign Up</h5>
            
            {/* <div className='input-field'>
                <label htmlFor='firstName'>First Name</label>
                <input type="text" id="firstName"  onChange={this.handleChange}></input>
            </div>
            
            <div className='input-field'>
                <label htmlFor='lastName'>Last Name</label>
                <input type="text" id="lastName"  onChange={this.handleChange}></input>
            </div> */}
            <div className='input-field'>
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" onChange={this.handleChange}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='password'>Password</label>
                <input type="password" id="password"  onChange={this.handleChange}></input>
            </div>
            <div className='input-field signin-button-container'>
                <button className='signin-button' onClick={ SignInWithGoogle }>Sign Up</button>
            </div>
        </form>
        <div className='formfooter' >Already have an account? <Link to="/signin" className="">Sign In</Link></div>
        </div>
      </div>
    )
  }
}

export default SignUp