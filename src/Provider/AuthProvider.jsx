import React, { useEffect, useState } from 'react';
import { AuthContex } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const gProvider = new GoogleAuthProvider

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

    const signInWithG =() =>{
        setLoading(true)
        return signInWithPopup(auth, gProvider)
    }

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
         setUser(currentUser);
         setLoading(false)
         console.log('user ', currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo ={
      loading,
      user, 
      createUser,
      signInUser,
      signInWithG,
      logOut,
    }
    return (
        <AuthContex value={authInfo}>
            {children}
        </AuthContex>
    );
};

export default AuthProvider;