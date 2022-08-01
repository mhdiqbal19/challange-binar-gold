import './ourservice.css';
import {Container, Row, Col} from 'react-bootstrap';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import imgSrv from "./../../assets/img_service.png";



function Ourservices(props) {
  const {strList} = props;
  return (
    <section id="ourservices">
      <Container>
        <Row className="row-service">
          <Col md={6} className="col-left-service">
            <img src={imgSrv} alt=""/>
          </Col>
          <Col md={6} className="col-right-service">
            <h4>Best Car Rental for any kind of trip in Yogyakarta.</h4>
            <p>Sewa mobil di Yogyakarta bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <ul> 
              {strList.map((item)=> (
                <li><BsFillCheckCircleFill className="icon-ourService"/> {item}</li>
              ))}  
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Ourservices;
