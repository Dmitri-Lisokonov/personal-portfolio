import { onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import React, { useEffect } from "react";
import { ReactNode, useState } from "react";
import { User } from "../entities/User";
import { IAuthContext } from "../interface/IAuthContext";
import { auth } from "../service/firebase";

export const AuthContext = React.createContext({} as IAuthContext);

export const AuthProvider = (props: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState({} as User);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user) {
                let updated = {} as User;

                user.getIdToken()
                    .then((token) => {
                        updated = new User(token);
                    })
                    .then(() => {
                        setCurrentUser(updated);
                    })
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={value} >
            {props.children}
        </AuthContext.Provider>
    )
}