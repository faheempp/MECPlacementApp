import { db } from "../firebase-config";

import {collection, getDocs, getDoc, addDoc,updateDoc, deleteDoc, doc} from "firebase/firestore";

const driveCollectionRef = collection(db,"drives");
class DriveDataService{
    addDrive=(newDrive)=>{
        return addDoc(driveCollectionRef, newDrive);
    }

    updateDrive=(id, updatedDrive)=>{
        const  driveDoc=doc(db,"drives",id);
        return updateDoc(driveDoc, updatedDrive);
    }

    deleteDrive=(id)=>{
        const driveDoc=doc(db,"drives",id);
        return deleteDoc(driveDoc);
    }

    getAllDrives=()=>{
        return getDocs(driveCollectionRef)
    }

    getDrive=(id)=>{
        const driveDoc=doc(db,"drives",id);
        return getDoc(driveDoc);
    }
}


export default new DriveDataService();