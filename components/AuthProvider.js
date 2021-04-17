import React, { useState,createContext } from 'react'
import firebase from 'firebase'
import App from '../App'

const Authentication= createContext();

export default function AuthProvider({children}) {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Authentication.Provider value={{
            isLoading,
            isLoggedIn,
            setIsLoading,
            setIsLoggedIn,
            register: async (email,password)=>{
                await firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(()=>{
                    console.log("the user is registered")
                }).catch((err)=>{
                    console.log(err)
                })
            },
            logIn:async (email,password)=>{
                await firebase.auth().signInWithEmailAndPassword(email,password)
                .then(()=>{
                    console.log("the user is signed in");
                }).catch((err)=>{
                    console.log(err)
                })
            },
            signOut:  async ()=>{
                await firebase.auth().signOut()
                .then(()=>{
                   console.log("logged out")
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }}>
            {children}
        </Authentication.Provider>
    )
}

export {Authentication} ;
