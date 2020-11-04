import { Button, Card, Col, Modal, Example, Image } from 'react-bootstrap';
import { React, Component, useState, Link} from 'react'


const HomePost = (props) => {

    return (
        <>
        <Card className="mt-5">
          <Card.Header className="home-card-header">
            
            <Image className='avatar' src={props.owner_avatar} roundedCircle />
            
            
            <h4 className="text-primary" style={{ paddingTop: 7, marginLeft: 15 }}>
              <a href={`http://localhost:3000/profile/${props.ownerid}`} >{props.owner}</a></h4>
          </Card.Header>
          <Card.Body className="home-card-body"><Card.Img variant="top" src={props.image} />
          </Card.Body>
          <Card.Footer className="home-card-footer">
          <h4 className="text-primary"><a href={`http://localhost:3000/profile/${props.ownerid}`} >{props.owner}</a></h4>
          <p className="text-muted">{props.caption}</p>
          </Card.Footer>
        </Card>
      </>
    );
}

export default HomePost;