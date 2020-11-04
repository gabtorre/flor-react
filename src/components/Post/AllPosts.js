import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, CardGroup, Row } from 'react-bootstrap';
import HomePost from '../Post/HomePost'
import fetch from 'isomorphic-fetch'

function AllPosts () {
    const [posts, setPosts] = useState([])

    useEffect( () => {
        fetch("http://localhost:8000/posts/all", {
        headers: {
            'Authorization': `JWT ${localStorage.access_token}`
        }
      })
      .then(response => response.json())
      .then(json => setPosts(json))
    }, []) 

    console.log(posts)

    return (  
        <Container fluid="md" style={{ width: '38rem' }}>
            <CardGroup>
            <Row md={1}>
            
            {posts.map((post, index) => (
                <HomePost 
                    key={index} 
                    id={post.id}
                    owner={post.owner.username}
                    ownerid={post.owner.id}
                    email={post.owner.email}
                    caption={post.caption} 
                    image={post.image}
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