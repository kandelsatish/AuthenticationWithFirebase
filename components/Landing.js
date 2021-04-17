import React, { useState,useContext } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Keyboard
} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {Authentication} from './AuthProvider'
export default function Landing({ navigation }) {
    const {logIn}=useContext(Authentication);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handelLogIn = (email, password) => {
        Keyboard.dismiss();
        logIn(email,password);
    }
    return (
        <LinearGradient colors={['#f5ad42', '#ba9423', '#2b2a27']} style={styles.container}>
            <View style={styles.from}>
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
                <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                        disabled={false}
                        value={null}
                        onValueChange={(newValue) => { }}
                    />
                    <Text style={{ color: 'grey' }}>Remember Email</Text>
                </View>
                <TouchableOpacity style={styles.loginButton}
                    onPress={() => handelLogIn(email, password)}>
                    <Text>LOG IN</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ marginTop: 30 }}
                onPress={() => navigation.navigate("register")}>
                <Text style={{ color: '#fff' }}>Not registered Yet?Tab here!</Text>
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
        width: "80%",
        height: 200,
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
