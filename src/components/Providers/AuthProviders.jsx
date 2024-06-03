import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth=getAuth(app)
const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)

        })

        return ()=>{
            return unsubscribe()
        }
    },[])
    const authInfo={
        user,
        loading,
        signIn,
        logOut,
        createUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthProviders