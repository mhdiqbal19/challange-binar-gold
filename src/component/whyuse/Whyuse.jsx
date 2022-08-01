import React from 'react'
import './whyuse.css';
import {Container, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function Whyuse(props) {
  
  const { dataWhyUse } = props;

  return (
    <section id="whyuse">
      <Container className='container-whyuse'>
        <Row className="row-whyuse">
          <div className='judul-whyus mb-4'>
              <h5>Why Use?</h5>
              <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
          {dataWhyUse.map(({ icon, title, content}, index) => {
            return (
              <div className="col-md-3 col-whyus">
                  <Card>
                      <Card.Body>
                      <div className='card-icon'>
                          <img src={icon} alt="" />                           
                      </div>
                      <h6>{title}</h6>
                      <p>{content}</p>
                      </Card.Body>
                  </Card>
              </div>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Whyuse