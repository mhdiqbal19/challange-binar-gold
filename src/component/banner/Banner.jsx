import "./banner.css";
import {Col, Container, Row} from 'react-bootstrap';
import imgCar from "./../../assets/img_car.png"
import { Link } from "react-router-dom";

const Banner = (props) => {
  const {btnShow, setBtnShow} = props

  return (
    <section id="banner">
      <Container fluid className="container-banner">
          <Row className="Row">
            <Col md={6}>
              <div className="col-left">
                <h1>Sewa & Rental Mobil Terbaik di kawasan Yogyakarta</h1>
                <p>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>                 
                <Link to={"/carimobil"}> 
                  {!btnShow && <button onClick={() => setBtnShow(!btnShow)} className="toggleShow">Mulai Sewa Mobil</button>}        
                </Link>
              </div>
            </Col>
            <Col md={6}>
              <div className="col-right">
                <img src={imgCar} alt="" />
              </div>
            </Col>
          </Row>
      </Container>
    </section>
  )
}

export default Banner

