
import React from "react";
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarMain() {
 

    return (
        <Navbar bg="light" data-bs-theme="light" id="main-nav-title">
        <Container>
          <h4 className="logo">SnipRepo</h4>
        </Container>
      </Navbar>

        
    )
}

export default NavbarMain;