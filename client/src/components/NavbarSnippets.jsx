import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Form, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NavbarSnippets() {
  const navigate = useNavigate();

  const logout = async () => {
    await axios.get("http://localhost:3020/logout");
    navigate("/login");
  };
  return (
    <Navbar bg="light" data-bs-theme="light" className="d-flex ">
      <Container fluid>
        <Navbar.Brand className="logo ms-2">&lt;SnipRepo&gt;</Navbar.Brand>
        <Navbar.Brand>
          <Link to={"/dashboard"} className="links-snippets">
            Dashboard
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to={"/mysnippets"} className="links-snippets">
            My Snippets
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to={"/newsnippet"} className="links-snippets">
            Add new snippet
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse className="logo justify-content-center ms-5">
          {/* <Form className="d-flex" onSubmit={handleSearch}>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="search"
                value={search}
                onChange={captureSearch}
                aria-label="Search"
              />
              <Button variant="dark" onClick={handleSearch}>
                Search
              </Button>
            </InputGroup>
          </Form> */}
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {/* <Form className="d-flex align-items-center">
            <span className="me-2">
              <span className="hello">Hello</span>, <b>{username}</b>
            </span> */}
          <Button
            className="logout-btn"
            onClick={logout}
            style={{ marginLeft: "15px" }}
          >
            Logout
          </Button>
          {/* </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSnippets;
