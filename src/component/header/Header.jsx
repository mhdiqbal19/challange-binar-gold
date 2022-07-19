import React from "react";
import "./header.css";
import { Nav, Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <section id="navbar">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" >
        <Container> 
          <Navbar.Brand href="#header">
            <img src="https://storage.googleapis.com/danacita-website-v3-prd/website_v3/images/Biaya_bootcamp_binar_academy_6.original.png" alt="" className="img-logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="#ourservices">Our Services</Nav.Link>
              <Nav.Link href="#whyuse">Why Use</Nav.Link>
              <Nav.Link href="#testimonial">Testimonial</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default Header;
