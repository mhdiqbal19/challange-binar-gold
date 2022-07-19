import React from 'react'
import {Container, Row} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './faq.css';

function Faq() {
  return (
  <section id="faq">
    <Container className="container-faq">
      <Row className="row-faq">
          <div className="content-faq">
            <h3>Sewa Mobil di Yogyakarta Sekarang</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi corrupti pariatur impedit omnis accusantium sequi modi neque voluptatem, corporis porro?</p>
            <a href="/carimobil"><button>Mulai Sewa Mobil</button></a>
          </div>
         <div className="col-md-5">
              <div className='content-faq-left'> 
                <h5>Frequently Asked Question</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
          </div>   
          <div className="col-md-7">
              <div className='content-faq-right'> 
              <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                    <Accordion.Body>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatum sint aliquam quas odio nihil dignissimos numquam expedita sapiente doloribus!
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat optio ab nisi enim hic numquam, cum ex laboriosam culpa eligendi?
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                    <Accordion.Body>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatum sint aliquam quas odio nihil dignissimos numquam expedita sapiente doloribus!
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat optio ab nisi enim hic numquam, cum ex laboriosam culpa eligendi?
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Bagaimana jika terjadi kecelakaan</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat optio ab nisi enim hic numquam, cum ex laboriosam culpa eligendi?
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
          </div>    
      </Row>
    </Container>
  </section>
  )
}

export default Faq
