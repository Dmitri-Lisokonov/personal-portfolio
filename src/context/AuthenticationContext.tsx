import { onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import firebaseui from "firebaseui";
import React, { useEffect } from "react";
import { ReactNode, useState } from "react";
import { User } from "../entities/User";
import { IAuthContext } from "../interface/IAuthContext";
import { app, auth } from "../service/firebase";

export const AuthContext = React.createContext({} as IAuthContext);

export const AuthProvider = (props: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState({} as User);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            if (user) {
                const updated = new User(user.email);
                setCurrentUser(updated);
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={value} >
            {props.children}
        </AuthContext.Provider>
    )
}