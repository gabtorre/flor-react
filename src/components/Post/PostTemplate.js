import { Button, Card } from 'react-bootstrap';

const PostTemplate = (props) => {
    return (
        <Card key={props.index}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Text>
                {props.caption}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
 
export default PostTemplate;