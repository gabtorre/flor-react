import React, { useState } from 'react';
import PostModel from '../../PostModel';

import { Form, Button, Card, Container } from 'react-bootstrap';

function NewPost(props) {
    const [image, setImage] = useState('');
    const [caption, setCaption] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        PostModel.create({ image, caption }).then(
            (data) => {
              props.history.push('/profile');
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

