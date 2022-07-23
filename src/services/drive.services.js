import { db } from "../firebase-config";

import {collection, getDocs, getDoc, addDoc,updateDoc, deleteDoc, doc} from "firebase/firestore";

const driveCollectionRef=collection(db,"drives");
class DriveDataService{
    addNewDrive=(newDrive)=>{
        return addDoc(driveCollectionRef, newDrive);
    }

    updateDrive=(id, updatedDrive)=>{
        const  driveDoc=doc(db,"books",id);
        return updateDoc(driveDoc,updatedDoc);
    }

    deleteDrive=(id)=>{
        const driveDoc=doc(db,"books",id);
        return deleteDoc(driveDoc);
    }

    getAllDrives=()=>{
        return getDocs(driveCOllectionRef)
    }

    getDrive=(id)=>{
        const driveDoc=doc(db,"books",id);
        return getDocs(driveDoc);
    }
}


export default new BookDataService;