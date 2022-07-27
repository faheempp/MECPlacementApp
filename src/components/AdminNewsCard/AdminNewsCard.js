import React from 'react'
 import './AdminNewsCard.css';

export default function AdminNewsCard(props) {
  const newsheading=props.newsHeading;
  const newscontent=props.newsContent;
  return (
    <div className='adm-news-card'>
        <h4 className='adm-news-heading'>{newsheading}</h4>
        <div className='adm-news-content'>{newscontent}</div>
        <div><button>Delete</button></div>
    </div>
  )
}

