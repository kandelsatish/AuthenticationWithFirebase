import React,{useContext} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import Welcome from './Welcome';
import {Authentication} from './AuthProvider'
const Stack=createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName={Landing} headerMode="none">
            <Stack.Screen name="landing" component={Landing}/>
            <Stack.Screen name="register" component={Register}/>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="welcome" component={Welcome}/>
        </Stack.Navigator>
    )
}
