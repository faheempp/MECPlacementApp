import React, { useEffect, useState } from 'react'
import AppliedDriveCard from '../AppliedDriveCard/AppliedDriveCard'
import './ApplicationPageContainer.css';
import {db} from '../../firebase-config';
import { useUserAuth } from '../../context/UserAuthContext';
import {doc,collection, getDocs,query,get,where} from 'firebase/firestore';
export default function ApplicationPageContainer(){
  const { user } = useUserAuth();
  const [applied_drives,setAppliedDrives] = useState("");
  const [ListItems, setList] = useState("");
  const HandleXYZ=async(e) => {  
    
   
      const colref=collection(db,"users")
      const q=query(colref,where("UserID","==",user.uid))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      const applied_drives=doc.get("Applied")
      setAppliedDrives(applied_drives)
      const ListItems = applied_drives.map((applied_drive) => 
        <AppliedDriveCard company= {applied_drive} status="evaluating"/>,
      );
      setList(ListItems)
    })
  }
  useEffect(() => {  
    console.log("Entered")
    HandleXYZ();
    },[])


  return (
    <div className='application-page-container'>
        <h2 className="application-heading">Your Applications</h2>
        <div>{ListItems}</div>
        
    </div>
  )
}
