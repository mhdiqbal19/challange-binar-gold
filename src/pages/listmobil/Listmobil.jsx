import {useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import './listmobil.css'
import CarInova from './../../assets/image 1.png'
import axios from 'axios'

const Listmobil = () => {

  const [car, setCars] = useState()

  useEffect(() => {
      retriveCar()
  }, [])
   

  const retriveCar = async () => {
    try {
      const { data } = await axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car')
      setCars(data)
    } catch (error) {
      console.log(error, '<== error get car')
    }
  
  }

  const formatRupiah = (money) => {
    return new Intl.NumberFormat('id-ID',
      { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
    ).format(money);
  }



  return (
    <Container className='container-list-mobil'>
      <Row>
      {car && car.map((cars) => (
          <div className="col-md-4">
            <div class="card-list-mobil">
                <div class="img-card">
                    <img src={CarInova} alt="img-mobil"/>
                </div>      
                <div class="content-card">
                    <div>
                        <small>{cars.name}</small>
                        <h1>{formatRupiah(cars.price)} / hari</h1>
                        <small>{cars.category}</small>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, nulla?</p>
                    </div>
                    <div>
                      <button className='button'>Pilih Mobil</button>
                    </div>
                </div>
            </div>
          </div>
      ))}

      
      </Row>
    </Container>
  )
}

export default Listmobil
