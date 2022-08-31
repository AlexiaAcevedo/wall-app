import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { Button2 } from '../ButtonElement';
import {
    WallContainer,
    WallWrapper,
    WallCard,
    PostInput,
    WallP
} from './WallElements';

const Wall = (primary) => {
    let [posts, setPosts] = useState([]);
    let {authTokens} = useContext(AuthContext);

    useEffect(()=> {
        getPosts()
    }, [])

    let getPosts = async () => {
        try {
            let response = await axios.get("http://localhost:8000/api/posts/get")
            setPosts(response.data)
        } catch (e) {
            console.error(`Error while trying to get posts. Error: ${e}`)
        }
    }

    return (
        <>
            <WallContainer id="wall">
                <WallWrapper>
                    <WallCard>
                        <PostInput name='post' placeholder="what's on your mind?" maxLength={150}></PostInput>
                        <Button2  type='submit' primary={primary ? 1 : 0}>Submit</Button2>
                    </WallCard>
                    <WallCard>
                        {posts.map(post => (
                            <WallP>{post.username}:{post.content}</WallP>
                        ))}
                    </WallCard>
                </WallWrapper>
            </WallContainer>
        </>
    )
}

export default Wall