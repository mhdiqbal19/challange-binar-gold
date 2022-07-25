import React from 'react'
import Header from '../../component/header/Header'
import Banner from '../../component/banner/Banner'
import Footer from '../../component/footer/Footer'
import Pencarian from '../../component/pencarian/Pencarian';
import './carimobil.css';
import { navList } from '../../component/dataStatic/dataStatic';

import {useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'

import axios from 'axios'



export const CariMobil = () => {

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

  const detailMobilku = (id) => {
    console.log(id);
  }

  const props = {
    navList
  }

  return (
    <div>
      <Header {...props}/>
      <Pencarian/>
      <Banner />
      <Container className='container-list-mobil'>
        <Row>
          {car && car.map((cars) => (
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
                          <button className='button' onClick={()=> detailMobilku(cars.id)}>Pilih Mobil</button>
                        </div>
                    </div>
                </div>
              </div>
          ))}
        </Row>
      </Container>
      <div className='footer-cm'>
          <Footer/>
      </div>
    </div>
  )
}

