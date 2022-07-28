import React from 'react'
import Header from '../../component/header/Header'
import Banner from '../../component/banner/Banner'
import Footer from '../../component/footer/Footer'
import Pencarian from '../../component/pencarian/Pencarian';
import './carimobil.css';
import { navList } from '../../component/dataStatic/dataStatic';
import {Link} from 'react-router-dom';
import { Container, Row } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import axios from 'axios'



export const CariMobil = () => {


  //consium api list mobil
  const [data, setData] = useState([])
  const [name, setName] = useState("")
  console.log('ini adalah', name);
  
  useEffect(() => {
    axios
      .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])

  // useEffect(() => {
  //     retriveCar()
  // }, [])
   
  // const retriveCar = async () => {
  //   try {
  //     const { data } = await axios.get('https://bootcamp-rent-car.herokuapp.com/admin/car')
  //     setData(data)
  //   } catch (error) {
  //     console.log(error, '<== error get car')
  //   }
  
  // }


  //formating indonesia rupiah
  const formatRupiah = (money) => {
    return new Intl.NumberFormat('id-ID',
      { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
    ).format(money);
  }

  const handleChangeName = (e) =>{
    setName(e.target.value);
  } 

  const handleSearch = () => {
    const newArr = data.filter(item => item.name === name)
    setData(newArr)
  }

  
  const props = {
    navList,
    handleChangeName,
    handleSearch
  }

  return (
    <div>
      <Header {...props}/>
      <Pencarian {...props}/>
      <Banner />
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
      <div className='footer-cm'>
          <Footer/>
      </div>
    </div>
  )
}

