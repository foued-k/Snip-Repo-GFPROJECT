import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NavbarSnippets() {
    const navigate = useNavigate()

    const logout = async() => {
      await axios.get("http://localhost:3020/logout")
      navigate("/login")
    }
    return (
        <Navbar bg="light" data-bs-theme="light" className="justify-content">
            <Container>
                <Navbar.Brand className="text-center nav-brand col-4"><Link to={'/dashboard'} className="links">Dashboard</Link></Navbar.Brand>
                <h4 className="logo">SnipRepo</h4>
                <Button className="logout-btn" onClick={logout}>Logout</Button>
            </Container>
        </Navbar>
    )
}

export default NavbarSnippets;