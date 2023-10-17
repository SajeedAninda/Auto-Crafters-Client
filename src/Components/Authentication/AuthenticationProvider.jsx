import React, { createContext } from 'react';
import { app } from './firebase.init';
export let AuthContext = createContext();
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);


const AuthenticationProvider = ({ children }) => {
    let signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    let authentication = {
        signUp
    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthenticationProvider;