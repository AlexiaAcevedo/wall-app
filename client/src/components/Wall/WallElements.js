import styled from 'styled-components';

export const WallContainer = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(white, gray);

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const WallWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 2fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const WallForm = styled.form`
`

export const WallCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 380px;
    height: 100%;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const PostInput = styled.textarea`
    height: 100px;
    width: 650px;
    margin-bottom: 10px;
`

export const WallH1 = styled.h1`
    font-size: 2.5rem;
    color: rgb(96, 187, 234);
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const WallH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const WallP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const PostButton = styled.button`
    border-radius: 50px;
    background: rgb(96, 187, 234);
    white-space: nowrap;
    padding: 14px 48px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
    }
`