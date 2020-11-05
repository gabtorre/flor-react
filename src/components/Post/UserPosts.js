import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, CardGroup, Row } from 'react-bootstrap';
import PostTemplate from '../Post/PostTemplate'
import fetch from 'isomorphic-fetch'

function AllPosts (props) {
    const [posts, setPosts] = useState([])

    useEffect( () => {
        fetch(`http://localhost:8000/posts/user/${props.user_id}`, {
        headers: {
            'Authorization': `JWT ${localStorage.access_token}`
        }
      })
      .then(response => response.json())
      .then(json => setPosts(json))
    }, []) 

    console.log(posts)

    return (  
        <Container fluid="md mt-4">
            <CardGroup>
            <Row md={3}>
            
            {posts.map((post, index) => (
                <PostTemplate 
                    key={index} 
                    id={post.id}
                    owner={post.owner.username}
                    email={post.owner.email}
                    caption={post.caption} 
                    image={post.image}
                    soundcloud={post.soundcloud}
                    beatport={post.beatport}
                    bandcamp={post.bandcamp}
                    owner_id={post.owner.id}
                    owner_avatar={post.owner.avatar}
                    timestamp={post.timestamp}
                    />
            ))}
            </Row>
            </CardGroup>
            </Container>
    );
}
 
export default AllPosts;