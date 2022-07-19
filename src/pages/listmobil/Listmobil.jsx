import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './listmobil.css'
import CarInova from './../../assets/image 1.png'

const Listmobil = () => {
  return (
    <Container className='container-list-mobil'>
      <Row>
        <div className="col-md-4">
          <div class="card-list-mobil">
              <div class="img-card">
                  <img src={CarInova} alt="img-mobil"/>
              </div>
              <div class="content-card">
                  <div>
                      <small>Innova</small>
                      <h1>Rp.500.000 / hari</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia.</p>
                  </div>
                  <div>
                    <button className='button'>Pilih Mobil</button>
                  </div>
              </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card-list-mobil">
              <div class="img-card">
                  <img src={CarInova} alt="img-mobil"/>
              </div>
              <div class="content-card">
                  <div>
                      <small>Innova</small>
                      <h1>Rp.500.000 / hari</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia.</p>
                  </div>
                  <div>
                    <button className='button'>Pilih Mobil</button>
                  </div>
              </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card-list-mobil">
              <div class="img-card">
                  <img src={CarInova} alt="img-mobil"/>
              </div>
              <div class="content-card">
                  <div>
                      <small>Innova</small>
                      <h1>Rp.500.000 / hari</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, officia.</p>
                  </div>
                  <div>
                    <button className='button'>Pilih Mobil</button>
                  </div>
              </div>
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default Listmobil
