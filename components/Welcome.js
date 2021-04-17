// import { Button } from 'native-base'
import React,{useContext} from 'react'
import { View,ActivityIndicator, StyleSheet,Text,Button } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import firebase from 'firebase'
import {Authentication} from './AuthProvider'
export default function Welcome() {
    const {signOut}=useContext(Authentication)
    const handleSignOut=()=>{
       signOut();
    }
    return (
      <LinearGradient colors={['#f5ad42', '#9c8236','#8a7c53']}  style={styles.container}>
          <Text>We are at welcome page</Text>
          <Text>{firebase.auth().currentUser.uid}</Text>
          <Button title="SignOut" onPress={()=>{handleSignOut()}}/>
      </LinearGradient>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
})
