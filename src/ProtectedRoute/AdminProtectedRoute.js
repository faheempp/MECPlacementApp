import React,{Navigate} from 'react'
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
