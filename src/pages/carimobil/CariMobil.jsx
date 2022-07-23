import React from 'react'
import Header from '../../component/header/Header'
import Banner from '../../component/banner/Banner'
import Footer from '../../component/footer/Footer'
import './carimobil.css';
import Listmobil from '../listmobil/Listmobil'
import Pencarian from '../../component/pencarian/Pencarian';
import { navList } from '../../component/dataStatic/dataStatic';



export const CariMobil = () => {

  const props = {
    navList
  }

  return (
    <div>
      <Header {...props}/>
      <Pencarian/>
      <Banner />
      <Listmobil/>
      <div className='footer-cm'>
          <Footer/>
      </div>
    </div>
  )
}
