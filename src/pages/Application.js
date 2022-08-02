import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ApplicationPageContainer from '../components/ApplicationPageContainer/ApplicationPageContainer';
export default function Application() {
  return (
    <div className='application-page'>
        <Header active='application'/>
        <ApplicationPageContainer/>
        <Footer/>
    </div>
  )
}
