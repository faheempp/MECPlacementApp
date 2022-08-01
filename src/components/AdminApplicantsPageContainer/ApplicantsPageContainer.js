import React from 'react'
import DriveApplicantsList from '../DriveApplicantsList/DriveApplicantsList'
import './ApplicantsPageContainer.css'

export default function ApplicantsPageContainer() {
  return (
    <div className='applicant-page-container'>
        <h2 className="applicant-page-heading">Applicants</h2>
        <div className='applicant-list-wrapper'>
          <DriveApplicantsList/>
          <DriveApplicantsList/>
          <DriveApplicantsList/>
        </div>
    </div>
  )
}
