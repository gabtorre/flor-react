import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import UserModel from '../../models/UserModel';
import { useRecoilState } from "recoil";
import { userState } from '../../recoil/atoms';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Header.css';
import { useHistory } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const Header = (props) =>  {
    const [user, setUser] = useRecoilState(userState);

    useEffect(function(){
        if(localStorage.access_token) {
            UserModel.show().then((response) => {
            setUser(response.id);
          })
        }
      },[])

    const history = useHistory();

    function logout() {
    setUser(null);
    localStorage.clear();
    history.push(`/`);
    }

    return ( 
        <Navbar collapseOnSelect expand="lg" >
            <Container>
            <Navbar.Brand href="#"><strong>pulse</strong ></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">

            {user ? (
                <>
                
                <Nav.Link as={NavLink} to="/home"><HomeIcon /></Nav.Link>
                <Nav.Link as={NavLink} to={`/profile/${user}`}><AccountCircleIcon /></Nav.Link>
                <Nav.Link as={NavLink} to="/new_post"><AddCircleOutlineIcon /></Nav.Link>
                <Nav.Link onClick={logout}><ExitToAppIcon/></Nav.Link>
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