import React from 'react';
import { Button, Card, CardDeck, Container, Image } from 'react-bootstrap';

const Home = () => {
    return (  
            <div className="home-div">
                <Container className="d-flex flex-column align-items-">
                    <h1 className="text-center home-title" >Don't Miss A Beat</h1>
                    <div className="text-center">
                    <Button variant="light" size="lg" style={{ marginTop: 50 }}>Get Started</Button>
                    </div>

                    <CardDeck style={{ marginTop: 100 }}>
                        <Card className="blur">
                            <Image rounded className="mx-auto" variant="top" style={{width: 100, marginTop: -35}} src="https://picsum.photos/100" />
                            <Card.Body className="text-center">
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Button variant="light" size="lg" >Get Started</Button>
                            </Card.Body>
                        </Card>
                        <Card className="blur">
                            <Image rounded className="mx-auto" variant="top" style={{width: 100, marginTop: -35}} src="https://picsum.photos/100" />
                            <Card.Body className="text-center">
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Button variant="light" size="lg" >Get Started</Button>
                            </Card.Body>
                        </Card>
                        <Card className="blur">
                            <Image rounded className="mx-auto" variant="top" style={{width: 100, marginTop: -35}} src="https://picsum.photos/100" />
                            <Card.Body className="text-center">
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Button variant="light" size="lg" >Get Started</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    </Container>

                
            </div>
    );
}
 
export default Home;