import React from 'react'
import { ButtonGroup } from 'react-bootstrap'
import './ApplicantInfoCard.css'
export default function ApplicantInfoCard() {
  return (
    <div className='applicant-info-container'>
        <div className='applicant-info-container-left'>
            <div className='applicant-info-item'>
                <div className='applicant-info-item-name'>Applicant Name : </div>
                <div className='applicant-info-item-data'>Louis Emmanuel Thomas</div>
             </div>
            <div className='applicant-info-item'>
                <div className='applicant-info-item-name'>Branch : </div>
                <div className='applicant-info-item-data'>ECE</div>
            </div>
            <div className='applicant-info-item'>
                <div className='applicant-info-item-name'>CGPA : </div>
                <div className='applicant-info-item-data'>9.1</div>
            </div>
            <div className='applicant-info-item'>
                <div className='applicant-info-item-name'>No. of back logs: </div>
                <div className='applicant-info-item-data'>0 </div>
            </div>
        </div>
        <div className='applicant-info-container-right'>
            <button className='applicant-reject-button'>Reject</button>
            <button className='applicant-accept-button'>Accept</button>
        </div>
    </div>
  )
}
