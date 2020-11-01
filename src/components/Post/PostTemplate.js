import { Button, Card, Col, Modal, Example, Image } from 'react-bootstrap';
import { React, Component, useState, Link} from 'react'

const PostTemplate = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Col md>
        <Card key={props.index} className="mb-4">
            <a href="#" onClick={handleShow}> 
            <Card.Img variant="top" src={props.image} />
            </a>
        </Card>
        </Col>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
            <Image className='avatar' src={props.owner_avatar} roundedCircle />
            <p style={{ paddingTop: 15, marginLeft: 15 }}>{props.owner}</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body><Card.Img variant="top" src={props.image} />
          </Modal.Body>
          <Modal.Footer>
          <h4>{props.owner}</h4>{props.caption}{props.email}
          
          
          </Modal.Footer>
        </Modal>
      </>
    );
}

// render(<PostTemplate />);

export default PostTemplate;