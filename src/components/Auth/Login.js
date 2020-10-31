import React from 'react';
import { Card, Container } from 'react-bootstrap';

import LoginForm from './LoginForm';

class Login extends React.Component {
    state = {  }
    render() { 
        return (  
            <Container>
                <Card className="mx-auto mt-5 text-center" style={{ width: '30rem' }}>
                    <Card.Body className="mx-auto mt-4" style={{ width: '25rem' }}>
                        <Card.Title><h3>Welcome to Flôr</h3></Card.Title>
                        <LoginForm/>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}
 
export default Login;