import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)



const AuthProvider = ({children}) => {
    const[ user , setUser] = useState(null);
   


    const newUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
       
    }
  const signInUser =(email,password) =>{
     
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser = ()=>{
      return signOut(auth)
    }

    useEffect(()=>{
      const outSideUser = onAuthStateChanged(auth , loggedInUser=>{
         console.log('oberes user' , loggedInUser)
         setUser(loggedInUser)
        
      } );

      return ()=>{
        outSideUser();
      }

    },[])
   

  const authInformation ={
    user,
    newUser,
    signInUser,
    auth,
    signOutUser
    
  }

 return(
     <AuthContext.Provider value={authInformation}>
    {children}
  </AuthContext.Provider>
  );
   
};

export default AuthProvider;