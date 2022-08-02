import React,{useState,useEffect} from 'react'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import ApplicantInfoCard from '../ApplicantInfoCard/ApplicantInfoCard';
import './DriveApplicantsList.css'
import UserDataService from '../../services/user.services.js'

export default function DriveApplicantsList(props) {
    const [isOpen,setIsOpen]=useState(false);
    const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const data = await UserDataService.getAllUsers();
    console.log(data.docs);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getUsers();
  }, []);
     
    return (
        <div className='applicant-list-container'>
            <div className='drive-name'>
                <div onClick={()=>setIsOpen(!isOpen)}>{props.company}</div>
                <div className='drop-icons' onClick={()=>setIsOpen(!isOpen)}>
                    {!isOpen?<AiFillCaretDown/>:<AiFillCaretUp/>}
                </div>
            </div>
            {isOpen && <div className='applicant-expandable-list'>

                {users.map((doc, index) => {
                    console.log(props.company)
                    let applied_size=doc.Applied.length
                    console.log(applied_size)
                    for(let i=0;i<applied_size;i++)
                    {
                    if(doc.Applied[i]== props.company)
                        return <ApplicantInfoCard name={doc.Name} Branch={doc.Branch} CGPA={doc.CGPA} No_of_Backlogs={doc.Backlog}/> ;
                    }
                })}
            </div>}
        </div>
    )
  
}
