import React from 'react'
import Header from '../../component/header/Header'
import Banner from '../../component/banner/Banner'
import Footer from '../../component/footer/Footer'
import './carimobil.css';
import Listmobil from '../listmobil/Listmobil'
import Pencarian from '../../component/pencarian/Pencarian';
import Detailmobil from '../detailmobil/Detailmobil';

export const CariMobil = () => {
  return (
    <div>
      <Header/>
      <Pencarian/>
      <Banner />
      {/* <Listmobil/> */}
      <Detailmobil/>
      <div className='footer-cm'>
          <Footer/>
      </div>
    </div>
  )
}
