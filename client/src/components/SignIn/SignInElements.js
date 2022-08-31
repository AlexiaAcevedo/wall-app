import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
    margin: 0;
    padding: 0;
    background: linear-gradient(white, gray);
    height: 100vh;
    overflow: hidden;
`

export const FormWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background: white;
    border-radius: 10px;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.05);
`

export const Form = styled.form`
    padding: 0 40px;
    box-sizing: border-box;

    @media screen and (max-width: 480px) {
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin: 40px 0;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormH3 = styled.h3`
    margin: 40px 0;
    color: red;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
`

export const FormSuccessMessage = styled.h6`
    margin: 10px 0;
    color: green;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
`

export const FormErrorMessage = styled.h6`
    margin: 10px 0;
    color: red;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
`

export const FormField = styled.div`
    position: relative;
    border-bottom: 2px solid #adadad;
    margin: 30px 0;
`

export const FormInput = styled.input`
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;
`

export const FormP = styled.p`
    font-size: 14px;
    text-align: center;
`

export const FormLink = styled(LinkR)`
`

export const FormButton = styled.button`
    width: 100%;
    height: 50px;
    border: 1px solid;
    background: rgb(96, 187, 234);
    border-radius: 25px;
    font-size: 18px;
    color: #e9f4fb;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    margin: 40px 0;

    &:hover {
        border-color: black;
        transition: .5s;
    }
`