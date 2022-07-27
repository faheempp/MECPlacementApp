import React, { useEffect,useState } from 'react'
import AdminNewsCard from '../AdminNewsCard/AdminNewsCard'
import './EditNewsContainer.css';

import NewsDataService from "../../services/news.services";
import { doc } from "firebase/firestore";

export default function EditNewsContainer() {
    const [news,setNews]=useState([]);

    useEffect (()=>{
        getNews();
    },[])

    const getNews=async ()=>{
        const data= await NewsDataService.getAllNews();
        // console.log(data.docs)
        setNews(data.docs.map((doc)=>({...doc.data(),id: doc.id}))) 
    }

  return (
    <div className='news-section'>
        <h3>News section</h3>
        <div>
        {news.map((doc,index)=>{
                        return(
                            <AdminNewsCard newsId={doc.id} newsHeading={doc.newsHeading} newsContent={doc.newsContent}/>
                        )
                    })}
    </div>
    </div>
  )
}
