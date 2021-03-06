import React, { useState } from 'react'
import NewsDataService from '../../services/news.services';
import './CreateNews.css'

export default function CreateNews() {
    const [newsHeading,setNewsHeading]=useState('');
    const [newsContent,setNewsContent]=useState('');
    
    const [message,setMessage]=useState({error:false,msg:""});
    
    const onSubmitHandle=async (e)=>{
        e.preventDefault();
        setMessage("");
        if(newsHeading === "" || newsContent ==="" ){
            setMessage({error:true,msg:"all fields are mandatory"});
            return;
        }
        const latestNews={
            newsHeading,
            newsContent
           
        }
        console.log(latestNews);

        try{
            await NewsDataService.addNews(latestNews);
            setMessage({error:false,msg:"Latest news added"});
        }
        catch(err){
            setMessage({error:true,msg:err.message});
        }

        setNewsHeading("");
        setNewsContent("");
       
    
    }

  return (
    <div className='create-news'>
        <h3>Add News</h3>
        <div className='adm-create-news'>
            <form>
                <div className='feature'>
                    <label htmlFor="newsHeading">News Heading</label>
                    <input 
                        type="text" 
                        name="newsHeading"
                        id="newsHeadinge"
                        value={newsHeading}
                        onChange={(e)=>setNewsHeading(e.target.value)}
                    />
                </div>
                <div className='feature'>
                    <label htmlFor="newsContent">News Content</label>
                    <textarea 
                        type="text" 
                        name="newsContent"
                        id="newsContent"
                        value={newsContent}
                        onChange={(e)=>setNewsContent(e.target.value)}
                    />
                </div>
                
                
                <div>
                    <button onClick={onSubmitHandle}>Add News</button>
                </div>
            </form>
        </div>
    </div>
  )
}
