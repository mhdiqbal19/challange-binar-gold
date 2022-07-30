import React from 'react'
import Header from '../../component/header/Header'
import Banner from '../../component/banner/Banner'
import Footer from '../../component/footer/Footer'
import Pencarian from '../../component/pencarian/Pencarian';
import './carimobil.css';
import { navList } from '../../component/dataStatic/dataStatic';
import {useState, useEffect} from 'react'
import axios from 'axios'
import CarList from '../../component/carlist/CarList';



export const CariMobil = () => {


  //consium api list mobil
  const [data, setData] = useState([])
  const [fdata, setFdata] = useState([])
  const [name, setName] = useState("")
  const [notFound, setNotFound ] = useState(false)
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
    if (!e.target.value.length) {
      setFdata([])
      setNotFound(false)
    }
  } 

  const handleSearch = () => {
    const newArr = data.filter((e) => e.name === name)
    if (!newArr.length) {
      setNotFound(true)
    }
      setFdata(newArr)    
  }

  console.log("ini data", data);
  console.log("ini fdata", fdata);
  
  const props = {
    navList,
    handleChangeName,
    handleSearch,
    formatRupiah,
  }

  return (
    <div>
      <Header {...props}/>
      <Pencarian {...props}/>
      <Banner />
      {!!notFound && <h4 className='dataNotFound'>Data is not available!</h4>}
      <CarList data = {!fdata.length ? data : fdata} {...props}/>
      <div className='footer-cm'>
      <Footer/>
      </div>
    </div>
  )
}

