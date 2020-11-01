import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import UserModel from '../../UserModel';

import { useRecoilState } from "recoil";
import { userState } from '../../recoil/atoms'

import { Nav, Navbar, Container } from 'react-bootstrap';

import './Header.css';

const Header = (props) =>  {
    const [user, setUser] = useRecoilState(userState);

    useEffect(function(){
        if(localStorage.access_token) {
          UserModel.show().then((response) => {
            setUser(response.username);
          })
        }
      },[])

    function logout() {
    setUser(null);
    localStorage.clear();
    }

    return ( 
        <Navbar collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home">Flôr</Navbar.Brand>
            <div>{user ? (<h4>Hello {user}</h4>) : (<h4>Hello</h4>)}</div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">

            {user ? (
                <>
                <li>{user.username}</li>
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
                <Nav.Link as={NavLink} to="/new_post">New Post</Nav.Link>
                <li className='btn' onClick={logout}>
                    Log Out
                </li>
                </>
                ) : (
                <>
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>

                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                </>
            )}               

                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    );
}
 
export default Header;