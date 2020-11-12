import React, { useState, useEffect } from 'react'
import { Container, CardGroup, Row } from 'react-bootstrap';
import HomePost from '../Post/HomePost'
import fetch from 'isomorphic-fetch'

function AllPosts () {
    const [posts, setPosts] = useState([])

    useEffect( () => {
        fetch("https://pulse-django.herokuapp.com/posts/", {
        headers: {
            'Authorization': `JWT ${localStorage.access_token}`
        }
      })
      .then(response => response.json())
      .then(json => setPosts(json))
    }, []) 

    return (  
        <Container fluid="md" style={{ width: '38rem' }}>
            <CardGroup>
            <Row md={1}>
            
            {posts.map((post, index) => (
                <HomePost 
                    key={index} 
                    id={post.id}
                    owner={post.owner}
                    ownerid={post.owner_id}
                    caption={post.caption}
                    image={post.image}
                    soundcloud={post.soundcloud}
                    beatport={post.beatport}
                    bandcamp={post.bandcamp}
                    owner_avatar={post.owner_avatar}
                    timestamp={post.timestamp}
                    />
            ))}
            </Row>
            </CardGroup>
            </Container>
    );
}
 
export default AllPosts;