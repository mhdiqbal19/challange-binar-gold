import React from 'react'
import { Container} from 'react-bootstrap'
import './detailmobil.css';
import CarInova from './../../assets/image 1.png'


const Detailmobil = () => {
  return (
  <Container className='container-detail-mobil'>
    <div class="container-card">
        <div class="card-detail-mobil-left">
            <div class="content-card">
                <div>
                    <h1>Tentang Paket</h1>
                    <h3>Include</h3>
                    <ul>
                      <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                      <li>Sudah termasuk bensin selama 12 jam</li>
                      <li>Sudah termasuk Tiket Wisata</li>
                      <li>Sudah termasuk pajak</li>
                    </ul>
                    <h3>Exclude</h3>
                    <ul>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                    <h3>Refund, Reschedule, Overtime</h3>
                    <ul>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>                 
                </div>
            </div>
        </div>
        <div class="card-detail-mobil-right">
            <div class="img-card">
                <img src={CarInova} alt="img-mobil"/>
            </div>
            <div class="content-card">
                <div>
                    <h3>Innova</h3>
                    <small>6 - 8 orang</small>
                    <div className='totalBayar'>
                    <h1>Total : Rp500.000</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </Container>
  )
}

export default Detailmobil
