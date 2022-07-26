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
            <img src="https://s3-ap-southeast-1.amazonaws.com/moladin.assets/blog/wp-content/uploads/2021/10/19135936/Logo-Moladin-Terbaru-001.png" alt="" className="img-logo"/>
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
