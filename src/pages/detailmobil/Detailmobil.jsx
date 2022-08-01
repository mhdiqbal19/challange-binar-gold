import { Container, Row} from 'react-bootstrap'
import './detailmobil.css';
import Header from '../../component/header/Header'
import Banner from '../../component/banner/Banner'
import Footer from '../../component/footer/Footer';
import { navList } from '../../component/dataStatic/dataStatic';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Detailmobil = () => {
  const [car, setCar] = useState({})

  const {id} = useParams();
//  const id = param.id;

  useEffect(() => {
    axios
    .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
    .then((res) => setCar(res.data))
    .catch((err) => console.log(err))
  },[])
  
  const props = {
    navList,
  }

   //formating indonesia rupiah
   const formatRupiah = (money) => {
    return new Intl.NumberFormat('id-ID',
      { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
    ).format(money);
  }


  return (
  <div>
  <Header {...props}/>
  <Banner/>
    <Container className='container-detail-mobil'>
      <Row class="container-card">
        <div className='col-md-7'>
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
        </div>       
        <div className='col-md-5'>
          <div class="card-detail-mobil-right">
              <div class="img-card">
                  <img src={car.image} alt="img-mobil"/>
              </div>
              <div class="content-card">
                  <div>
                      <h3>{car.name}</h3>
                      <small>{car.category}</small>
                      <div className='totalBayar'>
                      <h1>Total : {formatRupiah(car.price)}</h1>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </Row>
    </Container>
  <Footer/>
  </div>
  )
}

export default Detailmobil
