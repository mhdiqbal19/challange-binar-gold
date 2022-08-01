import './whyuse.css';
import {Col, Container, Row, Card} from 'react-bootstrap';


function Whyuse(props) {
  
  const { dataWhyUse } = props;

  return (
    <section id="whyuse">
      <Container className='container-whyuse'>
        <Row className="row-whyuse">
          <div className='judul-whyus'>
              <h5>Why Use?</h5>
              <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
          {dataWhyUse.map(({ icon, title, content}, index) => {
            return (
              <Col md={3}>
                  <Card>
                      <Card.Body>
                      <div className='card-icon'>
                          <img src={icon} alt="" />                           
                      </div>
                      <h6>{title}</h6>
                      <p>{content}</p>
                      </Card.Body>
                  </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Whyuse