import React, { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = React.createContext({
    user: null,
    loginUser: () => {},
    logoutUser: () => {},
    // successful: false,
    // hasError: false
});

export default AuthContext;

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true);
    // const [successful, setSuccessful] = useState(false);
    // const [hasError, setHasError] = useState(false);

    let loginUser = async (e) => {
        console.log('Form submitted')
        e.preventDefault()
        let response = await fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value})
        })
        let data = await response.json()
        console.log(data)

        if(response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            console.log(user)
            localStorage.setItem('authTokens', JSON.stringify(data))
            // setSuccessful(true);
            // setTimeout(() => navigate('/'), 3000);

        } else {
            alert('Something went wrong!')
            // setHasError(true);
            // setTimeout(() => navigate('/signin'), 3000);
        }
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        //add navigate to navbar component
    }

    let updateToken = async () => {
        console.log('Update token called')
        let response = await fetch('http://localhost:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'refresh': authTokens?.refresh})
        })
        let data = await response.json()

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
        // successful,
        // hasError
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


