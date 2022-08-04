import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './carlist.css'

const CarList = (props) => {
    const {data, formatRupiah} = props
  return (
    <Container className='container-list-mobil'>
        <Row>
            {!!data.length > 0 ? data.map((cars) => (
            <Col md={4}>
                <div className="card-list-mobil">
                <div class="img-card">
                    <img src={cars.image} alt="img-mobil"/>
                </div>      
                <div class="content-card">
                    <div>
                        <small>{cars.name}</small>
                        <h1>{formatRupiah(cars.price)} / hari</h1>
                        <small>{cars.category}</small>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, nulla?</p>
                    </div>
                    <div>
                    <Link to={`/detailmobil/${cars.id}`}>
                    <button className='button'>Pilih Mobil</button>
                    </Link>
                    </div>
                </div>
                </div>
            </Col>
            )): 
            <div class="text-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            }
        </Row>
    </Container>
  )
}

export default CarList
