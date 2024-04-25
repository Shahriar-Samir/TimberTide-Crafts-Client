import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, GithubAuthProvider, onAuthStateChanged, signOut} from 'firebase/auth'
import app from "../firebase/firebase";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const userInfo = auth.currentUser
    const googleProvider = new GoogleAuthProvider
    const githubProvider = new GithubAuthProvider
    const [userLoggedin ,setUserLoggedin] = useState(false)
    const [loader,setLoader] = useState(true)
    
    useEffect(()=>{

        onAuthStateChanged(auth,user=>{
            if(user){
                setUserLoggedin(user)
                setLoader(false)
            }
            else{
                setUserLoggedin(false)
                setLoader(false)
            }
    })
    },[])

    const createAccount = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const loginWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    
    const loginWithGithub = ()=>{
        return signInWithPopup(auth,githubProvider)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    const userHandlers = {createAccount,login,loginWithGoogle,loginWithGithub, userLoggedin, userInfo, loader,logOut}

    
    return (
        <AuthContext.Provider value={userHandlers}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;