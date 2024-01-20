import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NavbarDashboard({username}) {
const navigate = useNavigate()


const logout = async() => {
  await axios.get("http://localhost:3020/logout")
  navigate("/login")
}

  return (
    <Navbar bg="light" data-bs-theme="light" className="nav-bar">
      <Container className="nav-container">
        <Navbar.Brand className=" nav-brand">SnipRepo</Navbar.Brand>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="dark">Search</Button>
        </Form>
        <Form className="d-flex">
          <span className="me-2"><i>Hello</i>, <b>{username}</b></span>
          <Button className="logout-btn" onClick={logout}>Logout</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavbarDashboard;
