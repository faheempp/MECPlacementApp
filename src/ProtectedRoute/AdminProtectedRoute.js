import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext'

export default function AdminProtectedRoute({children}) {
    let {user}=useUserAuth();

    if(user.email=="pcadmin@pc.com"){
        return children;
    }
    else{
        return <Navigate to='/signin'></Navigate>
    }
}
