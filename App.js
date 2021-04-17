import React, { useState, useEffect, useContext, createContext } from 'react'
import Loading from './components/Loading';
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './components/HomeStack';
import * as firebase from 'firebase'
import { firebaseConfig } from './components/FirebaseConfig'
import Welcome from './components/Welcome';
import { Authentication } from './components/AuthProvider'
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  const { isLoading, setIsLoading, setIsLoggedIn } = useContext(Authentication);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        setIsLoggedIn(true);
        setUser(user);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
      console.log(user);
    })
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [])


  if (isLoading) {
    return (<Loading />)
  }

  if (user) {
    return (<Welcome />)
  }

  return (
    <NavigationContainer >
      <HomeStack />
    </NavigationContainer>
  )
};



export default App;
