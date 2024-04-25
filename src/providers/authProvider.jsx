import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, GithubAuthProvider} from 'firebase/auth'
import app from "../firebase/firebase";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider
    const githubProvider = new GithubAuthProvider
    
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

    const userHandlers = {createAccount,login,loginWithGoogle,loginWithGithub}

    
    return (
        <AuthContext.Provider value={userHandlers}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;