import React from 'react';
import ProfileModel from '../../models/ProfileModel';
import { Form, Button, Card, Container } from 'react-bootstrap';

class ProfileEdit extends React.Component {
    state = {
        username: '',
        email: '',
        id: '',
        avatar: '',
        cover: '',
    }

    componentDidMount(){
        this.fetchProfile();
    }

    fetchProfile = () => {
        ProfileModel.show(this.props.match.params.id)
        .then(json => {
            console.log(json)
            this.setState({
            ...json
            })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        ProfileModel.edit(this.props.match.params.id, this.state)
        .then(json => {
            this.props.history.push(`/profile/${this.props.match.params.id}`)
        })
    }

    handleDelete = (event) => {
        event.preventDefault();

        ProfileModel.delete(this.props.match.params.id)
        .then(json => {
            this.props.history.push(`/`)
        })
        .then(() => {window.location.reload()});
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <Container>
            <Card className="mx-auto mt-5 text-center" style={{ width: '30rem' }}>
            <Card.Body className="mx-auto mt-4" style={{ width: '25rem' }}>
            <Card.Title><h3>Edit Your Account</h3></Card.Title>
                            
            <Form className="mt-5 text-left" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicText">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username"
                name="username" 
                value={this.state.username} 
                onChange={this.handleChange}/>
            </Form.Group>
    
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email" 
                name="email"
                value={this.state.email}
                onChange={this.handleChange}/>
            </Form.Group>
    
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" 
                name="password"
                value={this.state.password}
                onChange={this.handleChange}/>
            </Form.Group>
    
            <Form.Group controlId="formBasicText">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="text" placeholder="Avatar"
                name="avatar" 
                value={this.state.avatar} 
                onChange={this.handleChange}/>
            </Form.Group>
    
            <Form.Group controlId="formBasicText">
                <Form.Label>Cover Image</Form.Label>
                <Form.Control type="text" placeholder="Cover Image"
                name="cover" 
                value={this.state.cover} 
                onChange={this.handleChange}/>
            </Form.Group>
    
            <Button className="btn-block" variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            <Form className="mt-5 text-left" onSubmit={this.handleDelete}>
            <Button className="btn-block" variant="primary" type="submit">
                Delete My Account
            </Button>
            </Form>
            </Card.Body>
            </Card>
            </Container>
        );
    }

}   

export default ProfileEdit;