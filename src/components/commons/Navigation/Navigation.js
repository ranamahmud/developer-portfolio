import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">Md Rana Mahmud</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Services</Nav.Link>
                    <Nav.Link href="#link">Works</Nav.Link>
                    <Nav.Link href="#link">Notes</Nav.Link>
                    <Nav.Link href="#link">Contacts </Nav.Link>
                    <Nav.Link href="#link">
                        <span><i class="fab fa-github fa-lg"></i>Twitter</span>
                    </Nav.Link>
                    <Nav.Link href="#link">
                        <span>
                            <i class="fab fa-github fa-lg"></i>
                            Github</span>
                    </Nav.Link>
                    <Nav.Link href="#link">
                        <i class="far fa-envelope fa-lg"></i>
                    </Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;