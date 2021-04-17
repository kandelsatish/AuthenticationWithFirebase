import React from 'react'
import App from '../App'
import AuthProvider from './AuthProvider'
export default function Main() {
    return (
        <AuthProvider>
            <App />
        </AuthProvider>

    )
}
