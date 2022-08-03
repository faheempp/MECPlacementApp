import React from 'react'
import AdminHeader from '../components/Header/AdminHeader';
import AdminCreatePageContainer from '../components/AdminCreatePageContainer/AdminCreatePageContainer';
import Footer from '../components/Footer/Footer';


export default function Create() {
  return (
    <div>
        <AdminHeader active='create'/>
        <AdminCreatePageContainer/>
        <Footer/>
    </div>
  )
}
