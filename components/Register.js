import React, { useState,useContext } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {Authentication} from './AuthProvider'
export default function Register({ navigation }) {

    const {register}=useContext(Authentication)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignUp = (email, password) => {
        register(email,password);
        navigation.goBack();
    }
    return (
        <LinearGradient colors={['#f5ad42', '#9c8236', '#8a7c53']} style={styles.container}>
            <View style={styles.from}>
                <View style={styles.inputfield}>
                    <TextInput placeholder="User Name" size={25} onChangeText={(val) => setEmail(val)} />
                </View>
                <View style={styles.inputfield}>
                    <MaterialCommunityIcons name="account-tie" size={25} />
                    <TextInput placeholder="Email" size={25} onChangeText={(val) => setEmail(val)} />
                </View>
                <View style={styles.inputfield}>
                    <MaterialCommunityIcons name="lock" size={25} />
                    <TextInput placeholder="Password"
                        onChangeText={(val) => setPassword(val)}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.loginButton}
                    onPress={() => handleSignUp(email, password)}>
                    <Text>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={{margin: 30}}>
                <Text style={{color:'#fff'}}>Go Back</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    from: {
        backgroundColor: '#fff',
        width: "90%",
        height: 300,
        borderRadius: 20,
    },
    inputfield: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: '#f5ad42',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        borderRadius: 15,
        height: 40
    }
})
