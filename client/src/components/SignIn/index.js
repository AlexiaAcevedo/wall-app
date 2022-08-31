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
    FormH3
} from './SignInElements';
import Navbar from '../Navbar';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    let {loginUser, successful, hasError, user} = useContext(AuthContext);
    
    return (
        <>
            <Navbar />
            <Container>
                <FormWrap>
                    <Form onSubmit={loginUser}>
                        <FormH1>Sign In Now</FormH1>
                        {user && <FormH3>Already logged in</FormH3> }
                        
                        {/* {
                            successful ? <FormSuccessMessage>Your registration was successfull!</FormSuccessMessage> : null
                        }
                        {
                            hasError ? <FormErrorMessage>There was a problem submitting your registration. Please try again.</FormErrorMessage> : null
                        } */}
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