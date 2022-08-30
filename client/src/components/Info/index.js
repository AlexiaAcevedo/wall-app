import React from 'react';
import image from '../../images/about.svg';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2, 
    TextWrapper,
    TopLine,
    Subtitle,
    BtnWrap, 
    Img, 
    ImgWrap, 
    Heading, 
    BtnLink
} from './InfoElements';

const Info = ({
    lightBg,
    id,
    imgStart,
    darkText,
    alt,
    primary
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Join The Wall</TopLine>
                                <Heading darkText={darkText}>Creating an account is super easy</Heading>
                                <Subtitle darkText={darkText}>The wall is a social application that allows a user to post their thoughts, views, and criticisms for everyone to see. Get everything set up and ready in under a minute. All we need is to know a little more about you and you're ready to go!</Subtitle>
                                <BtnWrap>
                                    <BtnLink to={'/register'}
                                    primary={primary ? 1 : 0}>Register Now
                                    </BtnLink>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={image} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info