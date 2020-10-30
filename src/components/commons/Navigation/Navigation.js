import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Md Rana Mahmud</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Services</Nav.Link>
                    <Nav.Link href="#link">Works</Nav.Link>
                    <Nav.Link href="#link">Notes</Nav.Link>
                    <Nav.Link href="#link">Contacts </Nav.Link>
                    <Nav.Link href="#link">Twitter </Nav.Link>
                    <Nav.Link href="#link">Github </Nav.Link>
                    <Nav.Link href="#link">Email </Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;