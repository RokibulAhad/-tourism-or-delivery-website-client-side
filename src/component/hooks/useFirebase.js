import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import initializeFirebase from "../Login/firebase/firebase.init";

initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    
    const auth = getAuth();
    

    const signInWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        
        .finally(()=> setIsLoading(false));
    }

   

    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    } ,[])

    const logOut = () => { 
        setIsLoading(true)       
        signOut(auth)
        .then(() => {})
        .finally(()=>setIsLoading(false))
    }

    
    return{
        user,
        signInWithGoogle,
        logOut,        
        error,        
        isLogin,        
        name,        
        isLoading,
        signInWithEmailAndPassword,
        auth,
        email,
        password
        
    }
}

export default useFirebase;