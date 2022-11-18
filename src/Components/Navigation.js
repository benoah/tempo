import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import tempo from "./tempo2.jpg"


export default function navigation() {
  return (
    <>
    <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Brand href="#home">
    <img src={tempo} 
      className=" brandlogo d-inline-block align-top"
      alt="React Bootstrap logo"
    />
  </Navbar.Brand> . 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Football</Nav.Link>
          <Nav.Link href="#link">Esports</Nav.Link>
          <Nav.Link href="#link">Our Team</Nav.Link>
          <Nav.Link href="#link">Career</Nav.Link>
w        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
  )
}
