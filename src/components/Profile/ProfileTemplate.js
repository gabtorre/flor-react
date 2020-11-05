import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image, Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';

import { userState } from '../../recoil/atoms'

import UserModel from '../../UserModel';

import { useRecoilState } from "recoil";

const ProfileTemplate = (props) => {
    const [user, setUser] = useRecoilState(userState);

    useEffect(function(){
        if(localStorage.access_token) {
            UserModel.show().then((response) => {
            console.log(response.id)
            setUser(response.id);
          })
        }
      },[])

    const { username, id, avatar, cover } = props.profile;

    console.log(parseInt(user), parseInt(id))

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
            <Col style={{display: 'inline-block', alignSelf: 'flex-end'}}><h3 className="break primary-text">{username}</h3>
                <p style={{ marginBottom: 15 }} className="break text-white caption">Paris, France</p>
                
                    <Button variant="primary">Follow</Button>
                    
            </Col>
            <Col></Col>
            <Col></Col>
            <div style={{display: 'inline-block', alignSelf: 'flex-end'}}>

                {parseInt(user) === parseInt(id) &&
                    <Button variant="primary" size="sm"><Link to={`/profile/${id}/edit`} style={{color: 'black'}}>Edit Profile</Link></Button>
                }
            </div>
        </Row>
        </Container>
        </>
    )
}

export default ProfileTemplate;
