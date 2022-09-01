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
    PostButton,
    FeedWrapper,
    CardUserInfo,
    WallUsername,
    CardContent,
    FormCard,
    Div,
    UserIcon,
    WallMessage
} from './WallElements';

const Wall = () => {
    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState("");
    let {logoutUser, user} = useContext(AuthContext);

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
        let data = {
            'user': user.user_id,
            'content': post, 
        }
        try {
            let response = await axios.post('http://localhost:8000/api/posts/create', data)
            if (response.status === 200 ) {
                getPosts();
                e.target.reset()
            } else {
                logoutUser();
            }
        } catch (e) {
            console.error(`Error while trying to create post. Error: ${e}`)
        }
    }

    let getPostTime = (post) => {
        let diff = Date.now() - new Date(post.created);
        let days = Math.round(diff/86400000);
        let hours  = Math.round(diff/3600000);
        let minutes  = Math.round(diff/60000);
        let statement = "just now";
        if (hours >= 48) {
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
                        <WallMessage>Must be logged in to post on the wall</WallMessage>
                    )}
                    <FeedWrapper>
                    {posts.map(post => (
                            <WallCard>
                                <CardUserInfo>
                                    <Div>
                                        <UserIcon></UserIcon>
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