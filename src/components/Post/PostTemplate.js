import { Button, Card, Col, Modal, Example, Image } from 'react-bootstrap';
import { React, Component, useState, Link} from 'react'
import ReactTimeAgo from 'react-time-ago'


const PostTemplate = (props) => {

  
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
          <Modal.Footer>
          <h4 className="text-primary">{props.owner}</h4><p className="caption text-muted">{props.caption}</p>
          
          <button type="button" onClick={handleDelete}>Delete</button>
          
          <small className="timestamp"><ReactTimeAgo date={props.timestamp} locale="en-US" timeStyle="round"/></small>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default PostTemplate;