import React,{useState} from 'react'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import ApplicantInfoCard from '../ApplicantInfoCard/ApplicantInfoCard';
import './DriveApplicantsList.css'

export default function DriveApplicantsList() {
    const [isOpen,setIsOpen]=useState(true);
     
    return (
        <div className='applicant-list-container'>
            <div className='drive-name'>
                <div onClick={()=>setIsOpen(!isOpen)}>Company name Drive</div>
                <div className='drop-icons' onClick={()=>setIsOpen(!isOpen)}>
                    {!isOpen?<AiFillCaretDown/>:<AiFillCaretUp/>}
                </div>
            </div>
            {isOpen && <div className='applicant-expandable-list'>
                <ApplicantInfoCard/>
                <ApplicantInfoCard/>
                <ApplicantInfoCard/>
            </div>}
        </div>
    )
  
}
