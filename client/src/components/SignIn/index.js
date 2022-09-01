import React from 'react';
import { useContext } from 'react';
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
    FormLink,
} from './SignInElements';
import Navbar from '../Navbar';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {

    let navigate = useNavigate();

    let {loginUser, signInError, signInSuccess} = useContext(AuthContext);

    let success = () => {
        setTimeout(() => navigate('/'), 3000);
        return (
            <FormSuccessMessage>You have been logged in!</FormSuccessMessage>
        )
    }

    let error = () => {
        setTimeout(() => navigate('/signin'), 3000);
        return (
            <FormErrorMessage>There was a problem logging in. Please try again.</FormErrorMessage>
        )
    } 

    return (
        <>
            <Navbar />
            <Container>
                <FormWrap>
                    <Form onSubmit={loginUser}>
                        <FormH1>Sign In Now</FormH1>
                        {
                            signInSuccess ? success() : null
                        }
                        {
                            signInError ? error() : null
                        }
                        <FormField>
                            <FormInput type='text' name='username' placeholder='Username' required></FormInput>
                        </FormField>
                        <FormField>
                            <FormInput type='password' name='password' placeholder='Password' required></FormInput>
                        </FormField>
                        <FormP>Don't have an account yet? <FormLink to={'/register'}>Register here</FormLink></FormP>
                        <FormButton type="submit">Submit</FormButton>
                    </Form>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn