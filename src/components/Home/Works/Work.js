import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Work = () => {
    return (
        <Container>
            <Row>
                <Col md={6}><h2>
                    Latest Works

                </h2>
                    <p>Perfect solutions for Modern Web Development and Cutting Edge Data Science</p>
                    <div>
                        <Image src={require('../../../images/projects/creative-agency.png').default} fluid />
                    </div>
                </Col>
                <Col md={6}>
                    <Row>
                        <Image src={require('../../../images/projects/volunteer-network.png').default} fluid />
                    </Row>
                    <Row>
                        <Image src={require('../../../images/projects/travel-guru.png').default} fluid />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Work;