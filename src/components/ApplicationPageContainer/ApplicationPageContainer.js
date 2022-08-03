import React, { useEffect, useState } from "react";
import AppliedDriveCard from "../AppliedDriveCard/AppliedDriveCard";
import "./ApplicationPageContainer.css";
import { db } from "../../firebase-config";
import { useUserAuth } from "../../context/UserAuthContext";
import {
  doc,
  collection,
  getDocs,
  query,
  get,
  where,
} from "firebase/firestore";
import { propTypes } from "react-bootstrap/esm/Image";
import { render } from "@testing-library/react";
import driveServices from "../../services/drive.services";
import DriveDataService from '../../services/drive.services.js'
import DataService from '../../services/acceptedDrives.services'

export default function ApplicationPageContainer() {
  const { user } = useUserAuth();
  const [applied_drives, setAppliedDrives] = useState("");
  const [slot_var, setSlotVar] = useState("");
  const [post_var, setPostVar] = useState("");
  const [slot, setSlot] = useState("");
  const [post, setPost] = useState("");
  const [ListItems, setList] = useState("");
  const [SelectItems, setSelectList] = useState("");
  const [finalList, setfList] = useState("");
  const [ListItemsFinal, setListFinal] = useState("");
  const [drives, setDrives]=useState([]);
  const [accepted, setAccepted]=useState([]);
 

  const getDrives= async ()=>{
    const data= await DriveDataService.getAllDrives();
    console.log(data.docs)
    setDrives(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
}
  const getAllaccepted= async ()=>{
  const data= await DataService.getAllaccepted();
  console.log("accepted" + data.docs)
  setAccepted(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
}

  const HandleUserApplied = async (e) => {
    // Retrieve user Info About Drive
    const colref = collection(db, "users");
    const q = query(colref, where("UserID", "==", user.uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const applied_drives = doc.get("Applied");
      setAppliedDrives(applied_drives);
    });

    
    
    const ListItems= drives.map((doc,index)=>{
      //console.log(doc.companyName)
      for(let i=0;i<applied_drives.length;i++)
      {
        var setter="EVALUATING";
        if(doc.companyName==applied_drives[i])
        {
          const SelectItems=accepted.map((doc1,index)=>{

            if(user.uid==doc1.id)
            { 
              for(let j=0;j<doc1.Accepteddrives.length;j++)
              {
                if(applied_drives[i]==doc1.Accepteddrives[j])
                {
                  console.log("enter");
                  console.log(doc1.Accepteddrives[j])
                  setter="ACCEPTED";
                }
              }
            }
            ////////
            ///////
            /////////
          })
            return (
              <AppliedDriveCard
              company={doc.companyName}
              post={doc.post}
              slot={doc.slot}
              status={setter}
            />)
          setSelectList(SelectItems)
          //console.log(doc.companyName)
        }
      }})
  setList(ListItems);
 };
  useEffect(() => {
    getDrives();
    getAllaccepted();
    //HandleUserApplied();
  },[]);
 
  return (
    <div className="application-page-container">
      <h2 className="application-heading">Your Applications</h2>

      <div>{ListItems}</div>
      <div>{SelectItems}</div>
      <button onClick={HandleUserApplied}>View Applications</button> 
    </div>
  );
}
