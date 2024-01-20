import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavbarMain from "./NavbarMain";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Alert, Stack } from "react-bootstrap";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  async function signup() {
    try {
      const res = await axios.post("http://localhost:3020/signup", {
        username,
        password,
      });
      console.log(res);
      if (res.status === 200) {
        console.log("Signup successfully");
        navigate("/login");
      }
    } catch (err) {
      setError(err.response.data.msg);
      setShow(true);
    }
  }

  return (
    <div>
      <NavbarMain />
      <Container className="signup-container">
        <Row>
          <Col lg={6} md={12}>
            <p className="signup-bodytext">
              <span className="logo white">SnipRepo</span> is a powerful and
              user-friendly web application designed to streamline the
              management and organization of code snippets for developers.
              Whether you're a seasoned programmer or a coding enthusiast,
              SnipRepo provides an intuitive platform to store, categorize,
              search, and share your code snippets effortlessly.
            </p>

            <img src={require("../images/Img1.png")} className="img1" alt={""} />
          </Col>

          {/* </div>
            </Container> */}
          {/* </Col> */}
          <Col lg={6} md={12}>
            <div className="signup-form">
              <h4>Create an account</h4>
              <h6 className="subtitle">Let's start organising</h6>

              <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => {
                    setShow(false);
                    setUsername(e.target.value);
                  }}
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setShow(false);
                    setPassword(e.target.value);
                  }}
                />
              </FloatingLabel>
              <div></div>
              {show && (
                <Alert key="danger" variant="danger" className="alert">
                  {error}
                </Alert>
              )}
              <div className="form-btn">
                <Button variant="dark" onClick={() => signup()}>
                  Sign up
                </Button>
              </div>

              <p>
                <span className="subtitle">Already have an account?</span>
                <Link to={`/login`} className="homepage-account-link">
                  Log in
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
