import React from 'react'
 import './AdminNewsCard.css';

export default function AdminNewsCard(props) {
  const newsheading=props.newsHeading;
  const newscontent=props.newsContent;
  return (
    <div className='news-card'>
        <h4 className='news-heading'>{newsheading}</h4>
        <div className='news-content'>{newscontent}</div>
        <div><button>Delete</button></div>
    </div>
  )
}

