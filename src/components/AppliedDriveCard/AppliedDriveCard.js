import React from 'react'
import './AppliedDriveCard.css';  

export default function AppliedDriveCard(props) { 
  /*const HandleXYZ=async(e) => {  
    e.preventDefault();
   
    const colref=collection(db,"users")
    const q=query(colref,where("UserID","==",user.uid))
    console.log("Entered")
    const querySnapshot = await getDocs(q);
    console.log("Entered")
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data())
      var applied_drives=doc.get("Applied")
      
      for ( let i=0;i<applied_drives.length;i++)
      {
      console.log("Drive" + i)
      console.log(applied_drives[i])
      }
    })
  
  
  }*/



  return (
   
    <div className='applied-drive-card'>
        <div className='applied-drive-card-left'>
            <h3>{props.company}</h3>
            <h4>{props.post}</h4>
            <h4>Slot: {props.slot}</h4>
            {/* <p>Date of Application: 01/01/2022</p>
            <button>View Application</button> */}
        </div>
        <div className='applied-drive-card-right'>
            <div className='applied-drive-current-status'>Current Status:</div>
            <p>{props.status}</p>
        </div>
    </div>
  )
}
