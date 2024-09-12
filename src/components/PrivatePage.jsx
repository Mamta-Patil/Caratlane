import React from 'react'
import { Navigate } from 'react-router'
import { auth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const PrivatePage = ({children}) => {
const [user] = useAuthState(auth);
console.log(user)
    // const login=true
    if(!user)
    { 
        return <Navigate to="/login" />
    }
    return children
  return (
    <div>
      
    </div>
  )
}

export default PrivatePage
