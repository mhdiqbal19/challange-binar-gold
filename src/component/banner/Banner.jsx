import React from "react";
import "./banner.css";
import {Container, Row} from 'react-bootstrap';
import imgCar from "./../../assets/img_car.png"
import { Link } from "react-router-dom";

function banner() {
  return (
    <section id="banner">
      <Container fluid className="container-banner">
          <Row className="Row">
            <div className="col-md-6">
              <div className="col-left">
                    <h1>Sewa & Rental Mobil Terbaik di kawasan Yogyakarta</h1>
                    <p>
                      Selamat datang di Binar Car Rental. Kami menyediakan mobil
                      kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                      kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                    
                    <Link to={"/carimobil"}> 
                      <button>Mulai Sewa Mobil</button>
                    </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-right">
                <img src={imgCar} alt="" />
              </div>
            </div>
          </Row>
      </Container>
    </section>
  );
}

export default banner;
