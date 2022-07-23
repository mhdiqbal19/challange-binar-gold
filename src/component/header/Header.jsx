import React from "react";
import "./header.css";
import { Nav, Navbar, Container } from 'react-bootstrap';

function Header(props) {
  
  const { navList } = props;

  return (
    <section id="navbar">
      <Navbar collapseOnSelect expand="lg" variant="light" className="navbar-header">
        <Container> 
          <Navbar.Brand href="#header">
            <img src="https://storage.googleapis.com/danacita-website-v3-prd/website_v3/images/Biaya_bootcamp_binar_academy_6.original.png" alt="" className="img-logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              {navList.map((item)=> (
                <Nav.Link href={item.link}>{item.judul}</Nav.Link>
              ))}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default Header;
