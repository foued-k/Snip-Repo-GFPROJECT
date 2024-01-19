import React from "react";
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarMain() {
    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          {/* <Navbar.Brand className="text-center nav-brand">SnipRepo</Navbar.Brand> */}
          <h4>SnipRepo</h4>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>

        
    )
}

export default NavbarMain;