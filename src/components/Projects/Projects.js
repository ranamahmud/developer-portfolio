import React, { Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Navigation from '../commons/Navigation/Navigation';

const Projects = () => {
    return (
        <Fragment>
            <Navigation />
            <Container>
                <Row>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require('../../images/projects/creative-agency.png').default} />
                            <Card.Body>
                                <Card.Title>Creative Agency</Card.Title>
                                <Card.Text>
                                    Responsive web app to order and manage digital service.
    </Card.Text>


                                <a href="https://creative-agency-d474c.web.app/"> <Button variant="primary">Live Site</Button></a>
                                <a href="https://github.com/ranamahmud/creative-agency-client">  <Button variant="primary">Github</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require('../../images/projects/travel-guru.png').default} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                                <a href="https://creative-agency-d474c.web.app/"> <Button variant="primary">Live Site</Button></a>
                                <a href="https://github.com/ranamahmud/creative-agency-client">  <Button variant="primary">Github</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require('../../images/projects/travel-guru.png').default} />
                            <Card.Body>
                                <Card.Title>Travel Guru</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                                <a href="https://creative-agency-d474c.web.app/"> <Button variant="primary">Live Site</Button></a>
                                <a href="https://github.com/ranamahmud/creative-agency-client">  <Button variant="primary">Github</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require('../../images/projects/volunteer-network.png').default} />
                            <Card.Body>
                                <Card.Title>Volunteer Network</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                                <a href="https://creative-agency-d474c.web.app/"> <Button variant="primary">Live Site</Button></a>
                                <a href="https://github.com/ranamahmud/creative-agency-client">  <Button variant="primary">Github</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Projects;