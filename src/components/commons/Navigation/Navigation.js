import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">Md Rana Mahmud</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/projects">Projects</Link>
                    <Link className="nav-link" to="/blog">Blog</Link>
                    <Link className="nav-link" to="/resume">Resume</Link>
                    <Link className="nav-link" to="/contact">Contact Me</Link>
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
        </Navbar >
    );
};

export default Navigation;