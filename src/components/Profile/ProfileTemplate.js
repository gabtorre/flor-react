import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';

const ProfileTemplate = (props) => {

    const { username, id, avatar, cover } = props.profile;

    return (
        <>
        <Jumbotron className="jumbotron-img"
        style={{background: `url(${cover})`,height: 320}}>
        
        </Jumbotron>
        <Container className="profile-div">
        <Row style={{marginTop: -75, zIndex: 4}}>
            <Col><Image 
            roundedCircle src={avatar} alt={id} 
            style={{height: 150, zIndex: 4}} /></Col>
            <Col><h3 className="break primary-text">{username}</h3>
                <p className="break text-white caption">Paris, France</p>
                <p className="break">
                    <Button variant="primary">Follow</Button>
                </p></Col>
            <Col>3 of 3</Col>
        </Row>

            
            
            
            <Link to={`/profile/${id}/edit`} style={{color: 'black'}}>Edit</Link>
        </Container>
        </>
    )
}

export default ProfileTemplate;
