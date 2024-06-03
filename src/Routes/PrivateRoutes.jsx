import React, { useContext } from 'react'
import { AuthContext } from '../components/Providers/AuthProviders'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <div>Loading...</div>
    }
    if(user?.email){
        return  children
    }

  return (
    <Navigate state={location.pathname} to='/login'>PrivateRoutes</Navigate>
  )
}

export default PrivateRoutes