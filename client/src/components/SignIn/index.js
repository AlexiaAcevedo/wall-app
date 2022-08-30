import React from 'react';
import { useState } from 'react';
import {
    Container,
    FormWrap,
    Form,
    FormH1,
    FormSuccessMessage,
    FormErrorMessage,
    FormField,
    FormInput,
    FormButton,
    FormP,
    FormLink
} from './SignInElements';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import jwt_decode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/userSlice';

const SignIn = () => {
    
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let initialUser = useSelector((state) => state.user)
    let [user, setUser] = useState(initialUser);
    let [authTokens, setAuthTokens] = useState( () => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const loginUser = async (e) => {
        console.log('Form submitted')
        let response = await fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': username, 'password':password})
        })
        let data = await response.json()
    
        if(response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            navigate('/');
            // TODO: send to redux store so the rest of the react app has access to this
            dispatch(login({username, authTokens}))
        } else {
            console.log(`Error trying to get user from database. username ${username}`);
        }
    }

    return (
        <>
            <Navbar />
            <Container>
                <FormWrap>
                    <Form>
                        <FormH1>Sign In Now</FormH1>
                        {/* {
                            successful ? <FormSuccessMessage>Your registration was successfull!</FormSuccessMessage> : null
                        }
                        {
                            hasError ? <FormErrorMessage>There was a problem submitting your registration. Please try again.</FormErrorMessage> : null
                        } */}
                        <FormField>
                            <FormInput type='username' name='username' placeholder='Username' required onChange={(e) => setUsername(e.target.value)}></FormInput>
                        </FormField>
                        <FormField>
                            <FormInput type='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required></FormInput>
                        </FormField>
                        <FormP>Don't have an account yet? <FormLink to={'/register'}>Register here</FormLink></FormP>
                        <FormButton type='submit' onClick={loginUser}>Submit</FormButton>
                    </Form>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn