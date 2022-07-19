import React from "react";
import "./banner.css";
import {Container, Row} from 'react-bootstrap';
import imgCar from "./../../assets/img_car.png"

function banner() {
  return (
    <section id="banner">
      <Container fluid className="container-banner">
          <Row className="Row">
            <div className="col-md-6 col-left">
                  <h1>Sewa & Rental Mobil Terbaik di kawasan Yogyakarta</h1>
                  <p>
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil
                    kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                    kebutuhanmu untuk sewa mobil selama 24 jam.
                  </p>
                  <a href="/carimobil"> <button>Mulai Sewa Mobil</button></a>
            </div>
            <div className="col-md-6 col-right">
              <img src={imgCar} alt="" />
            </div>
          </Row>
      </Container>
    </section>
  );
}

export default banner;
