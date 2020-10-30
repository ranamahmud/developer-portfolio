import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"
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
                <Col md={6}>
                    <Image src={require('../../../images/front-image.png').default} />
                    <i class="fab fa-python fa-10x"></i>
                    <i class="fab fa-js fa-8x"></i>
                    <i class="fab fa-angular fa-6x"></i>
                    <i class="fab fa-react fa-7x"></i>
                    <i class="fab fa-node fa-3x"></i>
                    <i class="fas fa-database fa-4x"></i>

                </Col>
            </Row>
        </Container>
    );
};

export default Header;