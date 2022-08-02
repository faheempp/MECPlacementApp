import React from 'react'
import { ButtonGroup } from 'react-bootstrap'
import './ApplicantInfoCard.css'
import  DataService  from '../../services/acceptedDrives.services'
export default function ApplicantInfoCard(props) {
    const HandleAccept=async(e)=>{
        e.preventDefault();
        console.log(props.user_id)
        await DataService.createDocument(props.user_id)
    }

  return (
    <div className='applicant-info-container'>
        <div className='applicant-info-container-left'>
            <div className='applicant-info-item'>
                <div className='applicant-info-item-name'>Applicant Name : </div>
                <div className='applicant-info-item-data'>{props.name}</div>
             </div>
            <div className='applicant-info-item'>
                <div className='applicant-info-item-name'>Branch : </div>
                <div className='applicant-info-item-data'>{props.Branch}</div>
            </div>
            <div className='applicant-info-item'>
                <div className='applicant-info-item-name'>CGPA : </div>
                <div className='applicant-info-item-data'>{props.CGPA}</div>
            </div>
            <div className='applicant-info-item'>
                <div className='applicant-info-item-name'>No. of back logs : </div>
                <div className='applicant-info-item-data'>{props.No_of_Backlogs} </div>
            </div>
        </div>
        <div className='applicant-info-container-right'>
            <button className='applicant-reject-button'>Reject</button>
            <button className='applicant-accept-button' onClick={HandleAccept}>Accept</button>
        </div>
    </div>
  )
}
