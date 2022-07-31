import React from 'react'
import Header from '../components/Header/Header'
import ProfilePageContainer from '../components/ProfilePageContainer/ProfilePageContainer'
function Profile() {
  
  return (
    <div>
      <div className='profile-page'>
        <Header/>
        
        <ProfilePageContainer/>
    </div>
    </div>
  )
}

export default Profile