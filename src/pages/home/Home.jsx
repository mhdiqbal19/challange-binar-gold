import React from 'react'
import Header from '../../component/header/Header'
import Banner from "../../component/banner/Banner";
import Faq from "../../component/faq/Faq";
import Footer from "../../component/footer/Footer";
import Ourservices from "../../component/ourservices/Ourservices";
import Testimonial from "../../component/testimonial/Testimonial";
import Whyuse from "../../component/whyuse/Whyuse";
import { navList, dataTestimoni, strList } from '../../component/dataStatic/dataStatic';


export const Home = () => {

  const props = {
    navList,
    dataTestimoni,
    strList,
  }

  return (
    <div>
      <Header {...props}/>
      <Banner />
      <Ourservices {...props}/>
      <Whyuse/>
      <Testimonial {...props}/>
      <Faq/>
      <Footer/>
    </div>
  )
}
