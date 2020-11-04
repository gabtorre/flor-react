import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import UserModel from '../../UserModel';
import ProfileModel from '../../ProfileModel';

import { useRecoilState } from "recoil";
import { userState, usernameState } from '../../recoil/atoms'

import { Nav, Navbar, Container } from 'react-bootstrap';

import './Header.css';

import { useHistory } from "react-router-dom";

import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Header = (props) =>  {
    const [user, setUser] = useRecoilState(userState);

    useEffect(function(){
        if(localStorage.access_token) {
            UserModel.show().then((response) => {
            console.log(response)
            setUser(response.id);
          })
        }
      },[])

    const history = useHistory();

    function logout() {
    setUser(null);
    localStorage.clear();
    history.push(`/`);
    window.location.reload();
    }

    return ( 
        <Navbar collapseOnSelect expand="lg" >
            <Container>
            <Navbar.Brand href="#"><strong>Flôr</strong ></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">

            {user ? (
                <>
                
                <Nav.Link as={NavLink} to="/home"><HomeIcon /></Nav.Link>
                <Nav.Link as={NavLink} to={`/profile/${user}`}><AccountCircleIcon /></Nav.Link>
                <Nav.Link as={NavLink} to="/new_post"><AddCircleOutlineIcon /></Nav.Link>
                <li className='btn' onClick={logout}>
                    Log Out
                </li>
                </>
                ) : (
                <>
                <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>

                <Nav.Link as={NavLink} to="/register">Sign Up</Nav.Link>
                </>
            )}               

                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    );
}
 
export default Header;