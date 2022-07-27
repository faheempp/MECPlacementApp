import React,{useState} from 'react'
 import './AdminNewsCard.css';
import NewsDataService from '../../services/news.services';
export default function AdminNewsCard(props) {
  const newsheading=props.newsHeading;
  const newscontent=props.newsContent;
  const newsId=props.newsId;
  const [message,setMessage]=useState({error:false,msg:""});
  const deleteNews=async()=>{
    
    try{
            await NewsDataService.deleteNews(newsId);
            setMessage({error:false,msg:"News(Id:${newsId}) Deleted"});
        }
        catch(err){
            setMessage({error:true,msg:err.message});
        }

  }
  return ( 
    <div className='adm-news-card'>
        <h4 className='adm-news-heading'>{newsheading}</h4>
        <div className='adm-news-content'>{newscontent}</div>
        <button className='del-button'>Delete</button>
    </div>
  )
}

