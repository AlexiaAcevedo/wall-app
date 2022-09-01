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
} from './RegisterElements';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

const Register = () => {
    // params and navigate hooks
    let navigate = useNavigate();
    
    // use states for form data and conditionals
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [hasError, setHasError] = useState(false);

    const registerUser = async () => {
        console.log('About to register user')
        let response = await fetch('http://localhost:8000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': email, 
                'username': username, 
                'password':password})
        })
        let data = await response.json()
        if (response.status == 200) {
            setSuccessful(true);
            setTimeout(() => navigate("/signin"), 3000 )
        } else {
            setHasError(true);
            setTimeout(() => navigate(`/register`), 3000);
        }
    }

    return (
        <>
            <Navbar />
            <Container>
                <FormWrap>
                    <Form>
                        <FormH1>Register Now</FormH1>
                        {
                            successful ? <FormSuccessMessage>Your registration was successful. Please sign in.</FormSuccessMessage> : null
                        }
                        {
                            hasError ? <FormErrorMessage>There was a problem submitting your registration. Please try again.</FormErrorMessage> : null
                        }
                        <FormField>
                            <FormInput type='email' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required></FormInput>
                        </FormField>
                        <FormField>
                            <FormInput type='text' name='username' placeholder='Username' onChange={(e) => setUsername(e.target.value)} required></FormInput>
                        </FormField>
                        <FormField>
                            <FormInput type='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required></FormInput>
                        </FormField>
                        <FormP>Already have an account? <FormLink to={'/signin'}>Sign In</FormLink></FormP>
                        <FormButton type='submit' onClick={registerUser}>Submit</FormButton>
                    </Form>
                </FormWrap>
            </Container>
        </>
    )
}

export default Register;