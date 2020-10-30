import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <div>Front-End Developer</div>
                    <div className="talk">
                        <h1>Talk is cheap.</h1>
                        <h1>Show me the code</h1>
                        <p>I design and code elegant things.I love what I do. </p>
                    </div>

                    <Link to="/contact">Let's CHAT!</Link>

                    <div className="experience">
                        <Row md={6}>
                            <div className="experience-left">
                                <h1>4</h1><p>YEARS Experience</p>
                            </div>
                            <div className="experience-right">
                                <h1>350</h1><p>PROJECTS Completed Worldwide Experience</p>
                            </div>
                        </Row>
                    </div>

                </Col>
                <Col md={6}>left</Col>
            </Row>
        </Container>
    );
};

export default Header;