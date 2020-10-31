import React from 'react'
import PostModel from '../../PostModel';
import axios from 'axios';
import { Container, CardGroup } from 'react-bootstrap';
import PostTemplate from '../../components/Post/PostTemplate';

class Profile extends React.Component {
    state = { 
        posts: [],
     }

    async getPosts() {
        let data = await axios
          .get("http://localhost:8000/posts/", {
            headers: {
                'Authorization': `JWT ${localStorage.access_token}`
            }
          })
          .then(function(response) {
            console.log(response)
            return response;
          })
          .catch(function(error) {
            console.log(error);
          });
        this.setState({ posts: data.data });
        
      }

    componentDidMount() {
        this.getPosts();
      }
    
    render() { 
        return (
            <Container fluid="md">
            <CardGroup>
            {this.state.posts.map((post, index) => (
                <PostTemplate 
                    index={index} 
                    caption={post.caption} 
                    image={post.image} 
                    />
            ))}
            </CardGroup>
            </Container>
        );
    }
}
 
export default Profile;
