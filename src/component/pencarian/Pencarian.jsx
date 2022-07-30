import React from 'react'
import'./pencarian.css'
import { Container, Col, Form, Row } from 'react-bootstrap'

const Pencarian = (props) => {

 const { handleChangeName, handleSearch } = props

  return (
    <Container>
        <Row className='container-pencarian'>
            <div className='goup-search'>
                <Row>
                    <Form.Group as={Col} className="form-group">
                    <Form.Label>Nama Mobil</Form.Label>
                    <Form.Control type="text" placeholder="Ketik nama/tipe mobil" className='searchInput' onChange={(e)=>handleChangeName(e)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <Form.Label>Kategori</Form.Label>
                    <Form.Select defaultValue="Choose..."  className='searchInput' disabled>
                        <option>Masukan Kapasitas Mobil</option>
                        <option>2 - 4 orang</option>
                        <option>4 - 6 orang</option>
                        <option>6 - 8 orang</option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <Form.Label>Harga</Form.Label>
                    <Form.Select defaultValue="Choose..."  className='searchInput' disabled>
                        <option>Masukan Harga Sewa per Hari</option>
                        <option> Rp.400.000,- </option>
                        <option> Rp.500.000,- </option>
                        <option> Rp.600.000,- </option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <Form.Label>Status</Form.Label>
                    <Form.Select defaultValue="Choose..." className='searchInput'>
                        <option>Tersedia</option>
                        <option>Disewa</option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <button className="btnCari" onClick={handleSearch}>Cari Mobil</button>
                    </Form.Group>
                </Row>           
            </div>
        </Row>
    </Container>
  )
}

export default Pencarian
