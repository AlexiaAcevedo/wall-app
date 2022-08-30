import React, { createContext, useState, useEffect, useContext } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = React.createContext({
    user: null,
    loginUser: () => {},
});

export default AuthContext;

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(null);
    let [user, setUser] = useState(null);

    const loginUser = async (e) => {
        console.log('Form submitted')
        // let response = await fetch('http://localhost:8000/api/token/', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({'username': e.target.email.value, 'password': e.target.password.value})
        // })
        // let data = await response.json()
        // console.log(data)

        // if(response.status === 200) {
        //     setAuthTokens(data)
        //     setUser(jwt_decode(data.access))
        //     console.log(user)
        // } else {
        //     alert('Something went wrong')
        // }
    }

    const contextData = {
        user,
        loginUser
    }
    
    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}


