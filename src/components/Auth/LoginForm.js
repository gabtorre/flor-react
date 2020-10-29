import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class LoginForm extends Component {
    state = {  }
    render() { 
        return (  
            <Form className="mt-5 text-left">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="btn-block" variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        );
    }
}
 
export default LoginForm;