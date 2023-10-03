import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavExample() {
  return (
    <Navbar expand="md" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">MyStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/masculino">Masculino</Nav.Link>
            <Nav.Link href="/feminino">Feminino</Nav.Link>
            <Nav.Link href="/casual">Casual</Nav.Link>
            <Nav.Link href="/outlet">Outlet</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/carrinho">Carrinho</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavExample;