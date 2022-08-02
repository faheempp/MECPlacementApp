import { db } from "../firebase-config";

import {collection, getDocs, getDoc, addDoc,updateDoc, deleteDoc, doc} from "firebase/firestore";

const UserCollectionRef = collection(db,"users");
export class UserDataService{
    /*addDrive=(newDrive)=>{  
        return addDoc(driveCollectionRef, newDrive);
    }

    updateDrive=(id, updatedDrive)=>{
        const  driveDoc=doc(db,"drives",id);
        return updateDoc(driveDoc, updatedDrive);
    }

    deleteDrive=(id)=>{
        const driveDoc=doc(db,"drives",id);
        return deleteDoc(driveDoc);
    }*/

    getAllUsers=()=>{
        return getDocs(UserCollectionRef)
    }

    getUser=(id)=>{
        const UserDoc=doc(db,"users",id);
        console.log("wassup")
        console.log(UserDoc)
        return getDoc(UserDoc);
    }
}
export default new UserDataService();
