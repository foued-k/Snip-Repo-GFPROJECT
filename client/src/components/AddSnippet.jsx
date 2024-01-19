import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import {Link} from "react-router-dom";

function AddSnippet() {

    return (
        <Container className="signup-container">
            <Row>
                <Col className="signup-leftcol">
                    <div className="snippetPreview">



                    </div>

                </Col>
                <Col>

                    <div className="signup-form">

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Snippet title"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="title" onChange={(e) => console.log(e.target.value)} />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Snippet description"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="description" onChange={(e) => console.log(e.target.value)} />
                        </FloatingLabel>

                        <Form.Select aria-label="Default select example">
                            <option>Choose a snippet language</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>


                        <div>
                            <Form.Label className="add-code-title">Add your code here</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter your code" onChange={(e) => console.log(e.target.value)} />
                        </div>

                        <div className="form-btn">
                            <Button className="logout-btn">Add snippet</Button>
                        </div>

                    </div>

                </Col>
            </Row>
        </Container>

    );

}

export default AddSnippet;