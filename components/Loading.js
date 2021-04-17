import React from 'react'
import { View,ActivityIndicator, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
export default function Loading() {
    return (
      <LinearGradient colors={['#f5ad42', '#9c8236','#8a7c53']}  style={styles.container}>
          <ActivityIndicator size="large" color={"#fff"}/>
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
