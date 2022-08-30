import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button1} from '../ButtonElement';
import {
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src = {Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Share Your Thoughts</HeroH1>
                <HeroP>Let the world know what is on your mind
                </HeroP>
                <HeroBtnWrapper>
                    <Button1 to="wall" 
                    onMouseEnter = {onHover} 
                    onMouseLeave = {onHover}
                    primary = 'true'
                    dark = 'true'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    >
                        View the wall {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button1>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero