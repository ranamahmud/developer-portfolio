import React, { Fragment } from 'react';
import { Container, Form } from 'react-bootstrap';
import Navigation from '../commons/Navigation/Navigation';

const Contact = () => {
    return (
        <Fragment>
            <Navigation />
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter your Name" />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Your Query</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <button className="btn btn-primary" type="submit">
                        Submit
  </button>
                </Form>
            </Container>
        </Fragment>
    );
};

export default Contact;