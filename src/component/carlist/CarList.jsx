import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './carlist.css'

const CarList = (props) => {
    const {data, formatRupiah} = props
  return (
    <Container className='container-list-mobil'>
        <Row>
            {!!data.length > 0 ? data.map((cars) => (
                <div className="col-md-4">
                    <div class="card-list-mobil">
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
                </div>
            )): <p>Loading...</p>}
        </Row>
    </Container>
  )
}

export default CarList
