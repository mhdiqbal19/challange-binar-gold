import React from 'react'
import Header from '../../component/header/Header'
import Banner from '../../component/banner/Banner'
import Footer from '../../component/footer/Footer'
import { Container } from 'react-bootstrap'
import './carimobil.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const CariMobil = () => {
  return (
    <div>
      <Header/>
        <Container>
            <div className='container-search'>
              <div className="headerSearch">
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Nama Mobil</Form.Label>
                  <Form.Control type="text" placeholder="Ketik nama/tipe mobil" className='searchInput' />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Kategori</Form.Label>
                  <Form.Select defaultValue="Choose..."  className='searchInput'>
                    <option>Masukan Kapasitas Mobil</option>
                    <option>2 - 4 orang</option>
                    <option>4 - 6 orang</option>
                    <option>6 - 8 orang</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Harga</Form.Label>
                  <Form.Select defaultValue="Choose..."  className='searchInput'>
                    <option>Masukan Harga Sewa per Hari</option>
                    <option> Rp.400.000,- </option>
                    <option> Rp.500.000,- </option>
                    <option> Rp.600.000,- </option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Status</Form.Label>
                  <Form.Select defaultValue="Choose..." className='searchInput'>
                    <option>Disewa</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                  <button  className="btnCari">Cari Mobil</button>
                </Form.Group>


              </Row>
              </div>              
            </div>
        </Container>
      <Banner />
      <div className='footer-cm'>
          <Footer/>
      </div>
    </div>
  )
}
