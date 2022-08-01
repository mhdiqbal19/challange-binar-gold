import Header from '../../component/header/Header'
import Banner from "../../component/banner/Banner";
import Faq from "../../component/faq/Faq";
import Footer from "../../component/footer/Footer";
import Ourservices from "../../component/ourservices/Ourservices";
import Testimonial from "../../component/testimonial/Testimonial";
import Whyuse from "../../component/whyuse/Whyuse";
import { navList, dataTestimoni, strList, dataWhyUse } from '../../component/dataStatic/dataStatic';


export const Home = () => {

  const props = {
    navList,
    dataTestimoni,
    strList,
    dataWhyUse,
  }

  return (
    <div>
      <Header {...props}/>
      <Banner />
      <Ourservices {...props}/>
      <Whyuse {...props}/>
      <Testimonial {...props}/>
      <Faq/>
      <Footer/>
    </div>
  )
}
