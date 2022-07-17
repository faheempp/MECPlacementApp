import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header';
class SignIn extends Component {
    state={
        email:'',
        password:'',
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
      <div className='SignIn-page-conatiner'>
        <Header/>
        <form onSubmit={this.handleSubmit}  className='sa'>
            <h5 className='signin-heading'>Sign In</h5>
            <div className='input-field'>
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" onChange={this.handleChange}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='password'>Password</label>
                <input type="password" id="password"  onChange={this.handleChange}></input>
            </div>
            <div className='input-field'>
                <button className='signin-button'>Login</button>
            </div>
            
        </form>
        <Link to="/signup" className="">
                <p>doesn't have an account? Sign Up</p>
                </Link>
      </div>
    )
  }
}

export default SignIn