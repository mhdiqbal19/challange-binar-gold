import React from 'react'
import Header from '../../component/header/Header'
import Banner from "../../component/banner/Banner";
import Faq from "../../component/faq/Faq";
import Footer from "../../component/footer/Footer";
import Ourservices from "../../component/ourservices/Ourservices";
import Testimonial from "../../component/testimonial/Testimonial";
import Whyuse from "../../component/whyuse/Whyuse";


export const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Ourservices />
      <Whyuse/>
      <Testimonial/>
      <Faq/>
      <Footer/>
    </div>
  )
}
