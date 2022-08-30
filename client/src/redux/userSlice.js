import { createSlice } from '@reduxjs/toolkit';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';




export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {
            username: '',
            authToken: '',
        },
        pending: false,
        error: false,
    },
    reducers: {
    login: (state, action) => {
        state.userInfo = action.payload;
    },
    logout: (state) => (state = {}),
    },
});

export const updateToken = async () => {
    

    let response = await fetch('http://localhost:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({'refresh': authTokens.refresh})
        })
        let data = await response.json()
}

// export const logoutUser = () => {
//     //setAuthTokens(null);
//     //setUser(null)
//     dispatch(logout);
//     navigate('/')
// }

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;