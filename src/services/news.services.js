import { db } from "../firebase-config";
import {collection, getDocs, getDoc, addDoc,updateDoc, deleteDoc, doc} from "firebase/firestore";

const newsCollectionRef=collection(db,"news");

class NewsDataService{
    addNews=(latestNews)=>{
        return addDoc(newsCollectionRef,latestNews);
    }
    updateNews=(id,updatedNews)=>{
        const newsDoc=doc(db,"news",id)
        return updateDoc(newsDoc, updatedNews)
    }
    deleteNews=(id)=>{
        const newsDoc=doc(db,"news",id)
        return deleteDoc(newsDoc);
    }
    getAllNews=()=>{
        return getDocs(newsCollectionRef)
    }

    getNews=(id)=>{
        const newsDoc=doc(db,"news",id);
        return getDoc(newsDoc);
    }
}

export default NewsDataService