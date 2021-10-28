import React from 'react';
import { ButtonGroup, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hook/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand className="text-bold fs-2" as={HashLink} to="/home">Ummahani Private Hospital</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="me-auto fs-5">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="aboutUs">About uS</Nav.Link>
                            <Nav.Link as={HashLink} to="contactUs">Contact Us</Nav.Link>
                            {user?.email ?
                                <button id="btn" onClick={logOut} >Logout</button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        </Nav>
                        <Navbar.Text className="fs-5">
                            Signed in as: <a className="" href="#Login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;