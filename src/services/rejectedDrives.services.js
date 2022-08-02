import { db } from "../firebase-config";
import { FieldValue } from "firebase/firestore";
import { collection, setDoc, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc,docarrayUnion } from "firebase/firestore";
import {arrayUnion}  from "firebase/firestore";
const CollectionRef = collection(db, "rejected");
export class DataRejectService {
    

    updateDocument =async(userid,companyName,username)=>{
        const userRef=doc(db,"rejected",userid)
        console.log(companyName)
        try{
        await setDoc(userRef, {
        Rejecteddrives: arrayUnion(companyName),    
        Applicant_name:username,
      },
      {
        merge:true
      },
    )}catch(err){
        console.log(err)
    }
    }

    /* updateDrive=(id, updatedDrive)=>{
         const  driveDoc=doc(db,"drives",id);
         return updateDoc(driveDoc, updatedDrive);
     }
 
     deleteDrive=(id)=>{
         const driveDoc=doc(db,"drives",id);
         return deleteDoc(driveDoc);
     }*/
 
    /* getAllUsers=()=>{
         return getDocs(UserCollectionRef)
     }*/
 
     /*getUser=(id)=>{
         const UserDoc=doc(db,"users",id);
         console.log("wassup")
         console.log(UserDoc)
         return getDoc(UserDoc);
     }*/
}
export default new DataRejectService();
