import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Nav, Navbar, Container } from 'react-bootstrap';

import './Header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand href="#home">Flôr</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    
                    <Nav.Link>
                    <NavLink to="/">Home</NavLink>
                    </Nav.Link>
                    
                    <Nav.Link>
                        <NavLink to="/profile">Profile</NavLink>
                    </Nav.Link>

                    <Nav.Link>
                    <NavLink to="/login">Login</NavLink>
                    </Nav.Link>

                    <Nav.Link>
                    <NavLink to="/register">Register</NavLink>
                    </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        );
    }
}
 
export default Header;

// <Navbar collapseOnSelect expand="lg">
//                 <Navbar.Brand href="#home">Flôr</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="ml-auto">
//                         <NavLink to="/">Home</NavLink>
//                         <NavLink to="/profile">Profile</NavLink>
//                         <NavLink to="/login">Login</NavLink>
//                         <NavLink to="/register">Register</NavLink>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>