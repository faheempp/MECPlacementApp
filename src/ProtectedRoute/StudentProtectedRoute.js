import React,{Navigate} from 'react'
import { useUserAuth } from '../context/UserAuthContext';

export default function StudentProtectedRoute({children}) {
    let {user}=useUserAuth();
    if(!user){
        return <Navigate to='/signin'></Navigate>
    }
    return children;
};
