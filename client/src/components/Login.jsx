import React, { useState } from "react";
import axios from "axios";
import NavbarMain from "./NavbarMain";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useCookies } from "react-cookie";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  async function login() {
    try {
     const response = await axios.post(
        "http://localhost:3020/login",
        { username, password },
        { withCredentials: true }
      );

      const token = response.data.token;
      setCookie("token", token, { path: "/" });
      navigate("/dashboard", { state: { username } });
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
              Welcome to <span className="logo white">SnipRepo</span>! If
              you're already part of our coding community, it's time to log in
              and access your personalized collection of code snippets. Whether
              you're a seasoned developer or just getting started, SnipRepo
              makes it easy to find and manage your favorite code snippets.
            </p>

            <img
              src={require("../images/Img2.png")}
              className="img2"
              alt={""}
            />
          </Col>

          {/* </div>
            </Container> */}
          {/* </Col> */}
          <Col lg={6} md={12}>
            <div className="signup-form">
              <h4>Welcome back!</h4>
              <h6 className="subtitle">Log in to your account</h6>

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
                <Button variant="dark" onClick={() => login()}>
                  Log in
                </Button>
              </div>

              <p>
                <span className="subtitle">Don't have an account?</span>
                <Link to={`/`} className="homepage-account-link">
                  Sign up
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
