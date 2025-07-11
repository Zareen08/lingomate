import React, { useEffect, useState } from 'react';
import { AuthContex } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import axios from 'axios';

const gProvider = new GoogleAuthProvider()

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

   useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);
    setLoading(false);

    if (currentUser) {
      try {
        const idToken = await currentUser.getIdToken(true); 
        const res = await axios.post(
          'https://lingomate-server-site.vercel.app/jwt',
          { token: idToken },    
        );
        console.log('JWT cookie response:', res.data);
      } catch (error) {
        console.error('JWT fetch error:', error);
      }
    }
  });

  return () => unSubscribe();
}, []);

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