import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import UserModel from '../../UserModel';

import { useRecoilState } from "recoil";
import { userState } from '../../recoil/atoms'

import { Nav, Navbar, Container } from 'react-bootstrap';

import './Header.css';

import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
        <Navbar collapseOnSelect expand="lg" 
        className={`${user ? "active" : "nav-transparent"}`}>
            <Container>
            <Navbar.Brand href="#home"
            className={`${user ? "active" : "text-white"}`}
            >Flôr</Navbar.Brand>
            <div>{user ? (<h4>Hello {user}</h4>) : (<h4></h4>)}</div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">

            {user ? (
                <>
                <li>{user.username}</li>
                
                <Nav.Link as={NavLink} to="/home"><HomeIcon /></Nav.Link>
                <Nav.Link as={NavLink} to={`/profile/${user}`}><AccountCircleIcon /></Nav.Link>
                <Nav.Link as={NavLink} to="/new_post">New Post</Nav.Link>
                <li className='btn' onClick={logout}>
                    Log Out
                </li>
                </>
                ) : (
                <>
                <Nav.Link as={NavLink} className="text-white" to="/login">Log In</Nav.Link>

                <Nav.Link as={NavLink} className="text-white" to="/register">Sign Up</Nav.Link>
                </>
            )}               

                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    );
}
 
export default Header;