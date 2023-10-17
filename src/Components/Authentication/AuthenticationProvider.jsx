import React, { createContext, useState } from 'react';
import { app } from './firebase.init';
export let AuthContext = createContext();
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GithubAuthProvider, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(app);
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();



const AuthenticationProvider = ({ children }) => {
    let [loggedInUser, setLoggedInUser] = useState(null);
    let signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    let signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    let googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    let gitLogin = () => {
        return signInWithPopup(auth, gitProvider);
    }
    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (user) => {
            setLoggedInUser(user);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    let authentication = {
        signUp,
        signIn,
        googleLogin,
        gitLogin
    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthenticationProvider;