import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';


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
                    <Nav.Link href="#link">
                        <span>  <Image fluid src={require("../../../images/icons/twitter-brands.svg").default}
                            style={{
                                height: "30px",
                                width: "30px"
                            }}
                        />Twitter</span>
                    </Nav.Link>
                    <Nav.Link href="#link">
                        <span> <Image fluid src={require("../../../images/icons/github-square-brands.svg").default}
                            style={{
                                height: "30px",
                                width: "30px"
                            }}
                        />Github</span>
                    </Nav.Link>
                    <Nav.Link href="#link">
                        <span> <Image fluid src={require("../../../images/icons/envelope-solid.svg").default}
                            style={{
                                height: "30px",
                                width: "30px"
                            }}
                        /></span>
                    </Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;