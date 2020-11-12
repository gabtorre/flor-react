import { Card, Image, Button, Row, Container, Col } from 'react-bootstrap';
import { React, useState, useEffect} from 'react'
import PostModel from '../../models/PostModel';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import HeadsetIcon from '@material-ui/icons/Headset';

const HomePost = (props) => {
  const [comments, setComments] = useState(null);

  useEffect( () => {
    getComments();
  }, []) 

  const getComments = () => {
    fetch(`https://pulse-django.herokuapp.com/posts/comments/${props.id}/all/`, {
    headers: {
        'Authorization': `JWT ${localStorage.access_token}`
        }
      })
      .then(response => response.json())
      .then(json => setComments(json));
   }

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
        
        <Card.Footer className="home-card-footer">
        <h4 className="text-primary" style={{paddingTop: '0.05em'}}><a href={`http://localhost:3000/profile/${props.ownerid}`} >{props.owner}</a></h4>
        <p className="text-muted">{props.caption}</p>
        </Card.Footer>

        <div className="comment-div">
        { comments && comments.map((comment, index) => {
            return  <Comments key={index} comments={comment}/>
        })}
        </div>

        <CommentForm id={props.id} getComments={getComments} />
      </Card>
    </>
  );
}

const Comments = (props) =>{
  console.log("comment props", props)
  return(
    <div className="home-card-footer">
    {props.comments && (
      <>
        <h4 className="text-primary" style={{paddingTop: '0.05em'}}>
          <a href={`http://localhost:3000/profile/${props.comments.id}`} >
        {props.comments.username}
        </a>
        </h4>
        <p className="text-muted comment-text"> {props.comments.comment}</p>
      </>
    )}
    </div>
  )
}

const CommentForm = ({id, getComments}) => {
  const [comment, setValue] = useState('');

  const handleSubmit = (event, id, comment) => {
    event.preventDefault();
    if(!comment) return;
    PostModel.comment(id, { comment }).then( () => getComments() )
    setValue('');
  }
  
  return (
    <form onSubmit={(e) => handleSubmit(e, id, comment)} className="comment-form" >
      <input id="main-input" className="comment-input" type='text' placeholder='Add a comment...'
      value={comment}
      onChange={(e) => setValue(e.target.value)}/>
      <Button variant="link" type="submit"><small>Post</small></Button>
    </form>
  )
}

export default HomePost;