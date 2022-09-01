import React, { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const AuthContext = React.createContext({
    user: null,
    loginUser: () => {},
    logoutUser: () => {},
});

export default AuthContext;

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true);
    const [signInSuccess, setSignInSuccess] = useState(false);
    const [signInError, setSignInError] = useState(false);

    let loginUser = async (e) => {
        console.log('Form submitted')
        e.preventDefault()
        let userInfo = {
            'username': e.target.username.value,
            'password': e.target.password.value
        }
        try {
            let response = await axios.post('http://localhost:8000/api/token/', userInfo)
            let data = response.data
            console.log(data)
    
            if(response.status === 200) {
                setAuthTokens(data)
                setUser(jwt_decode(data.access))
                console.log(user)
                localStorage.setItem('authTokens', JSON.stringify(data))
                setSignInSuccess(true);
    
            } else {
                alert('Something went wrong!')
                setSignInError(true);
            }
        } catch (e) {
            console.error(`Error while trying to log in user. Error: ${e}`)
        }
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        setSignInError(false)
        setSignInSuccess(false)
    }

    let updateToken = async () => {
        console.log('Update token called')
        let req = {
            'refresh': authTokens?.refresh
        }
        let response = await axios.post('http://localhost:8000/api/token/refresh/', req)
        let data = response.data

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            logoutUser()
        }
        if (loading) {
            setLoading(false)
        }
    }

    const contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
        signInError,
        signInSuccess
    }

    useEffect(()=> {

        if (loading) {
            updateToken()
        }

        let fourMinutes = 1000 * 60 * 4

        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)
    }, [authTokens,loading])

    
    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}


