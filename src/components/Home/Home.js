import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Card, CardDeck, Container, Image } from 'react-bootstrap';

const mystyle={
    background: 'linear-gradient(to bottom, #E23E57, #931D45)'
  }

const Home = () => {
    return (  
            <div className="home-div">
                <Container className="d-flex flex-column align-items-">
                    <h1 className="text-center home-title" style={{transform: 'skew(0deg, -5deg)' }}><strong>Don't Miss A Beat</strong></h1>
                    <img style={{ mixBlendMode: 'darken', position: 'absolute', left: 0, right: 0, margin: '0 auto' }} src="https://i.stack.imgur.com/Jw3f1.gif"/>
                    <div className="text-center">
                    {/* <Link to='http://localhost:3000/register'>
                    <Button className="text-primary" variant="light" size="lg" style={{ marginTop: 50 }}>Get Started</Button></Link> */}
                    </div>

                    <CardDeck style={{ marginTop: 180 }}>
                        <Card className="blur">
                            <Image className="mx-auto rounded-img" variant="top" style={{width: 100, marginTop: -35}} src="https://partyflock.nl/images/artist/124435_960x960_571420/Alignment.webp" />
                            <Card.Body className="text-center">
                            <Card.Title className="primary-text"><h3>alignment</h3></Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Button style={mystyle} size="lg" className="btn-block" >Follow</Button>
                            </Card.Body>
                        </Card>
                        <Card className="blur">
                            <Image className="mx-auto rounded-img" variant="top" style={{width: 100, marginTop: -35}} src="https://pbs.twimg.com/profile_images/1292161982574075905/elphXNNo_400x400.jpg" />
                           
                            <Card.Body className="text-center">
                            <Card.Title className="primary-text"><h3>spfdj</h3></Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Button style={mystyle} size="lg" className="btn-block" >Follow</Button>
                            </Card.Body>
                        </Card>
                        <Card className="blur">
                            <Image className="mx-auto rounded-img" variant="top" style={{width: 100, marginTop: -35}} src="https://equinox.melbourne/wp-content/uploads/2020/07/hadone-01.jpg" />
                            <Card.Body className="text-center">
                            <Card.Title className="primary-text"><h3>hadone</h3></Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Button style={mystyle} size="lg" className="btn-block" >Follow</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    </Container>

                
            </div>
    );
}
 
export default Home;