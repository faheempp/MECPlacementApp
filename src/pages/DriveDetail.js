import React from 'react'
import Header from '../components/Header/Header'
import DriveDetailPageContainer from '../components/DriveDetailContainer/DriveDetailContainer'
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
function DriveDetail() {
    const {driveid} = useParams();
    console.log(driveid)
  return (
    <div>
      <div className='profile-page'>
        <Header/>
        <DriveDetailPageContainer driveid={driveid}/>
        <Footer/>
    </div>
    </div>
  )
}

export default DriveDetail