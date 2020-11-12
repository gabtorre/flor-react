import React, { useState, useEffect } from 'react'
import { Container, CardGroup, Row } from 'react-bootstrap';
import PostTemplate from '../Post/PostTemplate'
import fetch from 'isomorphic-fetch'

function AllPosts (props) {
    const [posts, setPosts] = useState([])

    useEffect( () => {
        getPosts();
      }, []) 

    const getPosts = () => {
        fetch(`https://pulse-django.herokuapp.com/posts/user/${props.user_id}`, {
        headers: {
            'Authorization': `JWT ${localStorage.access_token}`
            }
          })
          .then(response => response.json())
          .then(json => setPosts(json));
    }

    return (  
        <Container fluid="md mt-4">
            <CardGroup>
            <Row md={3}>
            {posts.map((post, index) => (
                <PostTemplate 
                    key={index} 
                    id={post.id}
                    owner={post.owner}
                    owner_id={post.owner_id}
                    caption={post.caption} 
                    image={post.image}
                    soundcloud={post.soundcloud}
                    beatport={post.beatport}
                    bandcamp={post.bandcamp}
                    owner_avatar={post.owner_avatar}
                    timestamp={post.timestamp}
                    getPosts={getPosts}
                    />
            ))}
            </Row>
            </CardGroup>
        </Container>
    );
}
 
export default AllPosts;