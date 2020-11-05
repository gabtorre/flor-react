import { Button, Card, Col, Modal, Example, Image, Row, Container } from 'react-bootstrap';
import { React, Component, useState, Link, useEffect} from 'react'
import ReactTimeAgo from 'react-time-ago'
import UserModel from '../../UserModel';
import { useRecoilState } from "recoil";
import { userState } from '../../recoil/atoms'
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import HeadsetIcon from '@material-ui/icons/Headset';



const PostTemplate = (props) => {
  const [user, setUser] = useRecoilState(userState);

    useEffect(function(){
        if(localStorage.access_token) {
            UserModel.show().then((response) => {
            console.log(response.id)
            setUser(response.id);
          })
        }
      },[])

  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (event, id) => {
      fetch(`http://localhost:8000/posts/${props.id}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `JWT ${localStorage.access_token}`
        },
        })
        .then(
          () => {
            window.location.reload()
          }
        );
      }

    return (
        <>
        <Col sm>
        <Card key={props.index} className="mb-4">
            <a href="#" onClick={handleShow}> 
            <Card.Img variant="top" src={props.image} />
            </a>
        </Card>
        </Col>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header>
            <Modal.Title>
            <Image className='avatar' src={props.owner_avatar} roundedCircle />
            <p className="text-primary" style={{ paddingTop: 15, marginLeft: 15 }}>{props.owner}</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body><Card.Img variant="top" src={props.image} />
          </Modal.Body>
          {props.soundcloud &&
        <Container>
        <Row>
          <Col style={{padding: 0, borderRadius: 0}}>
            <Button style={{padding: 0, borderRadius: 0}} block>
            <a href="http://soundcloud.com" target="_blank" className="text-white"><CloudQueueIcon/></a>
            </Button ></Col>
          <Col style={{padding: 0, borderRadius: 0}}>
            <Button style={{padding: 0, borderRadius: 0}} block>
            <a href="http://beatport.com" target="_blank" className="text-white" style={{height: 25}}><HeadsetIcon/></a>
            </Button></Col>
          <Col style={{padding: 0, borderRadius: 0}}>
            <Button style={{padding: 0, borderRadius: 0}} block>
            <a href="http://bandcamp.com" target="_blank"><img src="https://i.imgur.com/6cp4hhx.png" style={{height: 25}} /></a>
            </Button></Col>
        </Row>
        </Container>
        }
          <Modal.Footer>
          <h4 className="text-primary">{props.owner}</h4><p className="caption text-muted">{props.caption}</p>
          
          <small className="timestamp"><ReactTimeAgo date={props.timestamp} locale="en-US" timeStyle="round"/></small>
          {parseInt(user) === parseInt(props.owner_id) &&
          <Button className="mx-auto" variant="link" onClick={handleDelete}>Delete Post</Button>
          }
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default PostTemplate;