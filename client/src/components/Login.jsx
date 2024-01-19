import React, {useState} from "react";
import axios from "axios";
// import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import {Link} from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Login() {
    // const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState("");

    function login() {
        axios.post("http://localhost:3020/login", {
            username : username, 
            password : password,
        })
        .then(({data}) => {
            console.log(data);
            if (data) {
                console.log("Signed in")
                //redirect the user to the login page
                // navigate("/profile");
            } else {
                console.log("Sign in failed")
                // setError(data.msg);
            }
        })
    }

    return (
        <Container className="signup-container">
            <Row>
                <Col>
                    <div>
                        <p className="signup-bodytext">

                            SnipRepo is a powerful and user-friendly web application
                            designed to streamline the management and organization of code snippets for developers.
                            Whether you're a seasoned programmer or a coding enthusiast,
                            SnipRepo provides an intuitive platform to store, categorize, search, and share your code snippets effortlessly.

                        </p>
                        <img src={require('../images/Img2.png')} className="img" alt={""}/>
                    </div>

                </Col>
                <Col>

                    <div className="signup-form">
                        <h3>Welcome back!</h3>
                        <h5>Log in to your account</h5>
                   
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Username"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        </FloatingLabel>
                        <div>
                            
                        </div>

                        <div className="form-btn">
                            <Button variant="dark" onClick={()=>login()}>Log in</Button>
                        </div>
                        <p>Don't have an account? Sign up</p>
                    </div>
                    
                    {/* <p>Don't have an account? <Link to={`/`}>Sign up</Link></p> */}
                </Col>
            </Row>
        </Container>

    );

}

export default Login;