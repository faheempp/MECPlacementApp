import React from 'react'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header'
import ProfilePageContainer from '../components/ProfilePageContainer/ProfilePageContainer'
function Profile() {
  
  return (
    <div>
      <div className='profile-page'>
        <Header/>
        <ProfilePageContainer/>
        <Footer/>
    </div>
    </div>
  )
}

export default Profile