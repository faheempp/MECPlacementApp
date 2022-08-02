import React from 'react'
import { ButtonGroup } from 'react-bootstrap'
import './ApplicantInfoCard.css'
import  DataService  from '../../services/acceptedDrives.services'
import  DataRejectService  from '../../services/rejectedDrives.services'
export default function ApplicantInfoCard(props) {
    const HandleAccept=async(e)=>{
        e.preventDefault();
        console.log(props.company)
        await DataService.updateDocument(props.user_id,props.company,props.name)
        console.log("lala")
    }
    const HandleReject=async(e)=>{
        e.preventDefault();
        console.log(props.company)
        await DataRejectService.updateDocument(props.user_id,props.company,props.name)
        console.log("lala")
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
            <button className='applicant-reject-button' onClick={HandleReject}>Reject</button>
            <button className='applicant-accept-button' onClick={HandleAccept}>Accept</button>
        </div>
    </div>
  )
}
