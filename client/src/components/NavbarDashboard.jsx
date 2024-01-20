import React from "react";
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function NavbarDashboard() {
    return (
        <Navbar bg="light" data-bs-theme="light" className="justify-content-between">
            <Container>
                <Navbar.Brand className="text-center nav-brand">SnipRepo</Navbar.Brand>
                {/* <h4>SnipRepo</h4> */}
                {/* <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav> */}
           
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
            <span className="me-2">Hello username</span>
            <Button className="logout-btn">Logout</Button>
          </Form>


            </Container>
        </Navbar>

    )
}


export default NavbarDashboard;