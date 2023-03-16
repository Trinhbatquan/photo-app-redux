//hàm truyền state global khắp các component của App

import { useContext, createContext } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { auth } from "./FireBase";
import { useEffect } from 'react';
import { useState } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    console.log({user})

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    const googleLogOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        //chạy mỗi khi auth thay đổi (sign hay log đi)
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log("change auth")
          setUser(currentUser);
          console.log('User', currentUser)
        });
        return () => {
          unsubscribe();
        };
      }, []);



    return (
        <AuthContext.Provider value={{googleSignIn, user, googleLogOut}}>
            {children}
        </AuthContext.Provider>
    )
}

//hàm lấy data từ context gửi xuống
export const UserAuth = () => {
    return useContext(AuthContext)
}