import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Testimonials = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>  <h3>Testimonials</h3></Col>
                <Col md={6}>  What's clients say about me</Col>
            </Row>
            <Row>
                <Col md={4}>
                    <div className="card mb-3" style={{
                        maxwidth: "540px"
                    }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="..." className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="card mb-3" style={{
                        maxwidth: "540px"
                    }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="..." className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="card mb-3" style={{
                        maxwidth: "540px"
                    }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="..." className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default Testimonials;