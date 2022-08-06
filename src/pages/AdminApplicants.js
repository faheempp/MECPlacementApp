import React from 'react'
import ApplicantsPageContainer from '../components/AdminApplicantsPageContainer/ApplicantsPageContainer'
import AdminHeader from '../components/Header/AdminHeader'
import Footer from '../components/Footer/Footer';
export default function AdminApplicants() {
  return (
    <div>
        <AdminHeader active='applicants'/>
        <ApplicantsPageContainer/>
        <Footer/>
    </div>
  )
}
