import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Introduce = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>

                    {/* <div className="card mb-3" style={{
                        maxwidth: "540px"
                    }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <i class="fab fa-react fa-8x"></i>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">MERN Stack</h5>
                                    <p className="card-text">Develop modern web MERN stack</p>
                                    <p className="card-text"><small className="text-muted">6 Projects</small></p>
                                </div>
                            </div>
                        </div>
                    </div> */}

<div className="card mb-3" style={{
                        maxwidth: "540px"
                    }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <i class="fab fa-react fa-8x"></i>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Machine Learning Engineer</h5>
                                    <p className="card-text">Develop ML solutions.</p>
                                    {/* <p className="card-text"><small className="text-muted">6 Projects</small></p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="card mb-3" style={{
                        maxwidth: "540px"
                    }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <i class="fab fa-dev fa-8x"></i>

                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Front-End</h5>
                                    <p className="card-text">I develop front end using modern web technologies.</p>
                                    <p className="card-text"><small className="text-muted">20 Projects</small></p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="card mb-3" style={{
                        maxwidth: "540px"
                    }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <i class="fas fa-chart-bar fa-8x"></i>

                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Data Science</h5>
                                    <p className="card-text">Solve data science problems to improve your business.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>

                    <p><small>Introduce</small></p>
                    <h1>Hello! I'm Md Rana Mahmud</h1>
                    <h3>Move fast and break things-Mark Zuckerberg</h3>
                    <p>Since beginning my journey as a freelance data scientist nearly 4 years ago, I've done remote work for start-up and collaborated with talented people to solve data science problems. I'm quietly confident, curious and hard working on improving my data science and front-end development skills.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Introduce;