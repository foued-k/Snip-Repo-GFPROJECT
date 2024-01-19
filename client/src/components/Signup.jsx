import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import {Link} from "react-router-dom";

function Signup() {

    return (
        <Container className="signup-container">
            <Row>
                <Col className="signup-leftcol">
                    <div>
                        <p className="signup-bodytext">

                            SnipRepo is a powerful and user-friendly web application
                            designed to streamline the management and organization of code snippets for developers.
                            Whether you're a seasoned programmer or a coding enthusiast,
                            SnipRepo provides an intuitive platform to store, categorize, search, and share your code snippets effortlessly.

                        </p>
                        <img src={require('../images/Img1.png')} className="img" alt={""} />
                    </div>

                </Col>
                <Col>

                    <div className="signup-form">
                        <h3>Create an account</h3>
                        <h5>Let's start organising</h5>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Username"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="username" onChange={(e) => console.log(e.target.value)}/>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" onChange={(e) => console.log(e.target.value)}/>
                        </FloatingLabel>
                        <div>

                        </div>

                        <div className="form-btn">
                            <Button variant="dark">Sign up</Button>
                        </div>

                        <p>Already have an account? Log in</p>
                    </div>
                    {/* <p>Already have an account? <Link to={`/login`}>Log in</Link></p> */}
                </Col>
            </Row>
        </Container>

    );

}

export default Signup;