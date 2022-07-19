import React from 'react'
import './whyuse.css';
import {Container, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { BsAlarmFill } from 'react-icons/bs'
import { BsTagFill } from 'react-icons/bs'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import { BsBookmarkStarFill } from 'react-icons/bs'


function Whyuse() {
  return (
    <section id="whyuse">
    <Container className='container-whyuse'>
      <Row className="row-whyuse">
        <div className='judul-whyus mb-4'>
            <h5>Why Use?</h5>
            <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="col-md-3 col-whyus">
            <Card>
                <Card.Body>
                <div className='card-icon'><BsFillHandThumbsUpFill/></div>
                <h6>Mobil Lengkap</h6>
                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </Card.Body>
            </Card>
        </div>
        <div className="col-md-3 col-whyus">
            <Card>
                <Card.Body>
                    <div className='card-icon'><BsTagFill/></div>
                    <h6>Harga Murah</h6>
                    <p>
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                    </p>
                </Card.Body>
            </Card>
        </div>        
        <div className="col-md-3 col-whyus">
            <Card>
                <Card.Body>
                    <div className='card-icon'><BsAlarmFill/></div>
                    <h6>Layanan 24 Jam</h6>
                    <p>
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                    </p>
                </Card.Body>
            </Card>
        </div>        
        <div className="col-md-3 col-whyus">
            <Card>
                <Card.Body>
                    <div className='card-icon'><BsBookmarkStarFill/></div>
                    <h6>Sopir Profesional</h6>
                    <p>
                    Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                    </p>
                </Card.Body>
            </Card>
        </div>
      </Row>
    </Container>
    </section>
  )
}

export default Whyuse