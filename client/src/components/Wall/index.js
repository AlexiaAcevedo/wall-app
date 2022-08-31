import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import {
    WallContainer,
    WallWrapper,
    WallCard,
    PostInput,
    WallP,
    WallForm,
    PostButton
} from './WallElements';

const Wall = (primary) => {
    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState("");
    let { authTokens, logoutUser, user } = useContext(AuthContext);

    useEffect(()=> {
        getPosts()
    }, [])

    let getPosts = async () => {
        try {
            let response = await axios.get("http://localhost:8000/api/posts/get")

            if (response.status === 200 ) {
                setPosts(response.data)
            } else {
                logoutUser()
            }
            
        } catch (e) {
            console.error(`Error while trying to get posts. Error: ${e}`)
        }
    }

    let createPost = async (e) => {
        e.preventDefault()
        console.log('Sending post data to backend')
        let response = await fetch('http://localhost:8000/api/posts/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'user': user.user_id,
                'content': post, 
                })
        })
        let data = await response.json()
    }

    return (
        <>
            <WallContainer id="wall">
                <WallWrapper>
                    {user ? (
                        <WallForm onSubmit={createPost}>
                        <WallCard>
                            <PostInput name='post' placeholder="what's on your mind?" maxLength={150} onChange={(e) => setPost(e.target.value)} required></PostInput>
                            <PostButton  type='submit'>Submit</PostButton>
                        </WallCard>
                        </WallForm>
                    ) : (
                        <WallCard>
                            <WallP>Sign in to post on the wall</WallP>
                        </WallCard>
                    )}



                    
                    
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