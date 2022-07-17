import React, { Component } from 'react'

export class CreateDrive extends Component {
  state={
        companyName:'',
        briefInfo:'',
        post:'',
        slot:'',
        lastDate:'',
        location:'',
        requirements:'',
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
        <form onSubmit={this.handleSubmit}  className=''>
            <h5 className='signin-heading'>Create new drive</h5>
            
            <div className='input-field'>
                <label htmlFor='companyName'>Company Name</label>
                <input type="text" id="companyName"  onChange={this.handleChange}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='briefInfo'>Brief Info</label>
                <input type="text" id="briefInfo"  onChange={this.handleChange}></input>
            </div>
            
            
            <div className='input-field'>
                <label htmlFor='post'>Post</label>
                <input type="text" id="post"  onChange={this.handleChange}></input>
            </div>
            
            <div className='input-field'>
                <label htmlFor='slot'>Slot</label>
                <input type="text" id="slot"  onChange={this.handleChange}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='requirements'>Requirements</label>
                <input type="text" id="requirements" onChange={this.handleChange}></input>
            </div>
            
            <div className='input-field'>
                <label htmlFor='location'>Location</label>
                <input type="text" id="location" onChange={this.handleChange}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='lastDate'>Last date</label>
                <input type="date" id="lastDate"  onChange={this.handleChange}></input>
            </div>
            <div className='input-field'>
                <button className='create-drive-button'>Create Drive</button>
            </div>
        </form>
      </div>
    )
  }
}

export default CreateDrive