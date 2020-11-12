import React, { useState } from 'react';
import PostModel from '../../models/PostModel';

import { Form, Button, Card, Container } from 'react-bootstrap';

function NewPost(props) {
    const [image, setImage] = useState('');
    const [caption, setCaption] = useState("");
    const [soundcloud, setSoundcloud] = useState("");
    const [beatport, setBeatport] = useState("");
    const [bandcamp, setBandcamp] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        PostModel.create({ image, caption, soundcloud, beatport, bandcamp }).then(
            (data) => {
                props.history.push(`/profile/${data.owner_id}/`);
            }
          );
    }

    return (
        <Container>
        <Card className="mx-auto mt-5 text-center" style={{ width: '30rem' }}>
        <Card.Body className="mx-auto mt-4" style={{ width: '25rem' }}>
        <Card.Title><h3>Add Post</h3></Card.Title>
                        
        <Form className="mt-5 text-left" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicText">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder="Image"
            name="image" 
            value={image} 
            onChange={(e) => setImage(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicText">
            <Form.Label>Caption</Form.Label>
            <Form.Control type="text" placeholder="Image" 
            name="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicText">
            <Form.Label>Soundcloud</Form.Label>
            <Form.Control type="text" placeholder="Soundcloud" 
            name="soundcloud"
            value={soundcloud}
            onChange={(e) => setSoundcloud(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicText">
            <Form.Label>Beatport</Form.Label>
            <Form.Control type="text" placeholder="Beatport" 
            name="beatport"
            value={beatport}
            onChange={(e) => setBeatport(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicText">
            <Form.Label>Bandcamp</Form.Label>
            <Form.Control type="text" placeholder="Bandcamp" 
            name="bandcamp"
            value={bandcamp}
            onChange={(e) => setBandcamp(e.target.value)}/>
        </Form.Group>
        
        <Button className="btn-block" variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </Card.Body>
        </Card>
        </Container>
    )
}

export default NewPost;

