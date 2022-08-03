import { db } from "../firebase-config";
import { FieldValue } from "firebase/firestore";
import { collection, setDoc, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc,docarrayUnion } from "firebase/firestore";
import {arrayUnion}  from "firebase/firestore";
const CollectionRef1 = collection(db, "accepted");
export class DataService {
    createDocument = async (userid,username) => {

        //const ref = user.uid
        console.log(userid)
        await setDoc(doc(db, "accepted", userid),
            {
                //applied: "Success"
                Accepteddrives:"", 
                Applicant_name:username
            });
        console.log("leela")
    }

    updateDocument =async(userid,companyName,username)=>{
        const userRef=doc(db,"accepted",userid)
        console.log(companyName)
        try{
        await setDoc(userRef, {
        Accepteddrives: arrayUnion(companyName),    
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
 
    getAllaccepted=()=>{
         return getDocs(CollectionRef1)
     }
 
     /*getUser=(id)=>{
         const UserDoc=doc(db,"users",id);
         console.log("wassup")
         console.log(UserDoc)
         return getDoc(UserDoc);
     }*/
}
export default new DataService();
