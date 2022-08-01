import React from 'react'
import {Col, Container, Row} from 'react-bootstrap';
import './footer.css';
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";

function Footer() {
  return (
    <section id="footer">
      <Container className="container-footer">
        <Row className="row-footer">
          <Col md={3}>
              <div className='content-footer-col-1'>        
                  <h6>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h6>
                  <h6>binarcarrental@gmail.com</h6>
                  <h6>081-233-334-808</h6>
              </div>
          </Col>
          <Col md={3}>
              <div className='content-footer-col-2'> 
                  <a href="#ourservices"><p>Our Services</p></a>
                  <a href="#whyuse"><p>Why Use</p></a>
                  <a href="#testimonial"><p>Testimonial</p></a>
                  <a href="#faq"><p>FAQ</p></a>
              </div>
          </Col>        
          <Col md={3}>
              <div className='content-footer-connect'>
                  <h6>Connect with us</h6>
                  <p><BsFacebook/> &nbsp;&nbsp;<BsTwitter/>&nbsp;&nbsp; <BsInstagram/> &nbsp;&nbsp;<BsEnvelopeFill/> &nbsp;&nbsp;<BsMessenger/> </p>
              </div>
          </Col>        
          <Col md={3}>
              <div className='footer-copyright'>
                  <h6>&copy; Copyright Binar 2022</h6>
              </div>
          </Col>
        </Row>
      </Container>
  </section>
  )
}

export default Footer