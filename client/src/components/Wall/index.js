import React, { useState, useEffect, useContext } from 'react';
import { FaUserCircle} from 'react-icons/fa';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import {
    WallContainer,
    WallWrapper,
    WallCard,
    PostInput,
    WallP,
    WallForm,
    PostButton,
    FeedWrapper,
    CardUserInfo,
    WallUsername,
    CardContent,
    FormCard,
    Div,
    UserIcon
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
        if (response.status === 200 ) {
            getPosts()
        } else {
            logoutUser()
        }
    }

    let getPostTime = (post) => {
        let diff = Date.now() - new Date(post.created);
        let days = Math.round(diff/86400000);
        let hours  = Math.round(diff/3600000);
        let minutes  = Math.round(diff/60000);
        let statement = "just now";
        if (hours > 48) {
            statement = `${days} days ago`;
        } else if (hours > 24) {
            statement = `${days} day ago`;
        } else if (minutes > 60) {
            statement = `${hours} hours ago`;
        } else if (minutes > 1) {
            statement = `${minutes} minutes ago`;
        }
        return `posted ${statement}`;
    }

    return (
        <>
            <WallContainer id="wall">
                <WallWrapper>
                    {user ? (
                        <WallForm onSubmit={createPost}>
                        <FormCard>
                            <PostInput name='post' placeholder="what's on your mind?" maxLength={150} onChange={(e) => setPost(e.target.value)} required></PostInput>
                            <PostButton  type='submit'>Submit</PostButton>
                        </FormCard>
                        </WallForm>
                    ) : (
                        <WallP>Sign in to post on the wall</WallP>
                    )}
                    <FeedWrapper>
                    {posts.map(post => (
                            <WallCard>
                                <CardUserInfo>
                                    <Div>
                                        <UserIcon><FaUserCircle /></UserIcon>
                                        <WallUsername>@{post.username}</WallUsername>
                                    </Div>
                                    <Div>
                                        <WallP>{getPostTime(post)}</WallP>
                                    </Div>
                                </CardUserInfo>
                                <CardContent>
                                    <WallP>{post.content}</WallP>
                                </CardContent>
                            </WallCard>
                        ))}
                    </FeedWrapper>
                </WallWrapper>
            </WallContainer>
        </>
    )
}

export default Wall