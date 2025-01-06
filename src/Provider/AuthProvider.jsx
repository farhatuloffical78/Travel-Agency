import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import app from '../Firebase/firebase.config'



export const Authcontext = createContext(); 
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const[loading,setloading]=useState(true);
    const provider = new GoogleAuthProvider();
    const createnewUser = (email, password) => {
       setloading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
const logOut=()=>{
   setloading(true)
    return signOut(auth)
    
}

 const userLogin=(email,password)=>{
   setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }



 const updateUserProfile = (updateData)=>{
      return updateProfile(auth.currentUser, updateData)
 }




 const  googleSingin =()=>{
    setloading(true)
    return signInWithPopup(auth, provider)
}

 
  

    const authinfo = {
        user,
        setUser,
        createnewUser,
        loading,
        logOut,
        updateUserProfile ,
        userLogin,
        googleSingin,
      
   
    };
 





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser); 
             setloading(false);
        });
    
       
        return () => unsubscribe();
    }, []);
    
    return (
        <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
   
    );
};

export default AuthProvider;
