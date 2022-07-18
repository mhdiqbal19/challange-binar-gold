import React from "react";
import './ourservice.css';
import {Container, Row} from 'react-bootstrap';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import imgSrv from "./../../assets/img_service.png";



function Ourservices() {
  return (
    <section id="ourservices">
      <Container>
        <Row className="row-service">
          <div className="col-md-6 col-left-service">
            <img src={imgSrv} alt="" />
          </div>
          <div className="col-md-6 col-right-service">
            <h4>Best Car Rental for any kind of trip in Yogyakarta.</h4>
            <p>Sewa mobil di Yogyakarta bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <ul>   
              <li><BsFillCheckCircleFill/> Sewa Mobil Dengan Supir di Bali 12 Jam</li>
              <li><BsFillCheckCircleFill/> Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
              <li><BsFillCheckCircleFill/> Sewa Mobil Jangka Panjang Bulanan</li>
              <li><BsFillCheckCircleFill/> Gratis Antar - Jemput Mobil di Bandara</li>
              <li><BsFillCheckCircleFill/> Layanan Airport Transfer / Drop In Out</li>
            </ul>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Ourservices;
