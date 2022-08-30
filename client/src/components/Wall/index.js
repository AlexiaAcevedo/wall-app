import React from 'react';
import { Button2 } from '../ButtonElement';
import {
    WallContainer,
    WallWrapper,
    WallCard,
    PostInput,
} from './WallElements';

const Wall = (primary) => {
    return (
        <>
            <WallContainer id="wall">
                <WallWrapper>
                    <WallCard>
                        <PostInput name='post' placeholder="what's on your mind?" maxLength={150}></PostInput>
                        <Button2  type='submit' primary={primary ? 1 : 0}>Submit</Button2>
                    </WallCard>
                    <WallCard>
                        
                    </WallCard>
                </WallWrapper>
            </WallContainer>
        </>
    )
}

export default Wall