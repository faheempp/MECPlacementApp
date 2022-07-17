import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
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
      <div className=''>
        <Header/>
        <form onSubmit={this.handleSubmit}  className='sa'>
            <h5 className='signin-heading'>Sign Up</h5>
            
            <div className='input-field'>
                <label htmlFor='firstName'>First Name</label>
                <input type="text" id="firstName"  onChange={this.handleChange}></input>
            </div>
            
            <div className='input-field'>
                <label htmlFor='lastName'>Last Name</label>
                <input type="text" id="lastName"  onChange={this.handleChange}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" onChange={this.handleChange}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='password'>Password</label>
                <input type="password" id="password"  onChange={this.handleChange}></input>
            </div>
            <div className='input-field'>
                <button className='signin-button'>Sign Up</button>
            </div>
        </form>
        <Link to="/signin" className="">
                <p>already have an account? Sign in</p>
        </Link>
      </div>
    )
  }
}

export default SignUp