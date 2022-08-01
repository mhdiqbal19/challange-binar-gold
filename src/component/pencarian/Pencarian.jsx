import'./pencarian.css'
import { Container, Col, Form, Row } from 'react-bootstrap'


const Pencarian = (props) => {

 const { handleChangeName, handleSearch } = props

  return (
    <Container>
        <Row className='container-pencarian'>
            <Col sm>
                <Form.Group className='form__group'>
                    <Form.Label>Nama Mobil</Form.Label>
                    <Form.Control type="text" placeholder="Ketik nama/tipe mobil" className='searchInput' onChange={(e)=>handleChangeName(e)}/>
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Group className='form__group'>
                    <Form.Label>Kategori</Form.Label>
                    <Form.Select defaultValue="Choose..."  className='searchInput' disabled>
                        <option>Masukan Kapasitas Mobil</option>
                        <option>2 - 4 orang</option>
                        <option>4 - 6 orang</option>
                        <option>6 - 8 orang</option>
                    </Form.Select>
                </Form.Group>
            </Col >
            <Col sm>
                <Form.Group className='form__group'>
                    <Form.Label>Harga</Form.Label>
                    <Form.Select defaultValue="Choose..."  className='searchInput' disabled>
                        <option>Masukan Harga Sewa per Hari</option>
                        <option> Rp.400.000,- </option>
                        <option> Rp.500.000,- </option>
                        <option> Rp.600.000,- </option>
                    </Form.Select>
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Group className='form__group'>
                    <Form.Label>Status</Form.Label>
                    <Form.Select defaultValue="Choose..." className='searchInput' disabled>
                        <option>Tersedia</option>
                        <option>Disewa</option>
                    </Form.Select>
                </Form.Group>
            </Col>
            <Col sm className='btn__cari__mobil'>
                <button className="btnCari" onClick={handleSearch}>Cari Mobil</button>
            </Col>
        </Row>
    </Container>
  )
}

export default Pencarian
