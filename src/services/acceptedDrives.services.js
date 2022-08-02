import { db } from "../firebase-config";

import { collection, setDoc, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const CollectionRef = collection(db, "accepted");
export class DataService {
    createDocument = async (userid) => {

        //const ref = user.uid
        console.log(userid)


        await setDoc(doc(db, "accepted", userid),
            {
                applied: "Success"
            });
        console.log("leela")
    }

    /* updateDrive=(id, updatedDrive)=>{
         const  driveDoc=doc(db,"drives",id);
         return updateDoc(driveDoc, updatedDrive);
     }
 
     deleteDrive=(id)=>{
         const driveDoc=doc(db,"drives",id);
         return deleteDoc(driveDoc);
     }
 
     getAllUsers=()=>{
         return getDocs(UserCollectionRef)
     }
 
     getUser=(id)=>{
         const UserDoc=doc(db,"users",id);
         console.log("wassup")
         console.log(UserDoc)
         return getDoc(UserDoc);
     }*/
}
export default new DataService();
