import React from 'react'
import './testimonial.css';
import {Container, Row} from 'react-bootstrap';

import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsFillStarFill, BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



function Testimonial(props) {
  const {dataTestimoni} = props;
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section id='testimonial'>
        <Container>
            <Row>
                <div className="header-testimonial">
                    <h5>Testimonial</h5>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>
                <Swiper className="container testimonials__container" 
                    // install Swiper modules
                    breakpoints={{
                        576: {
                        width: 576,
                        slidesPerView: 1,
                        },
                        768: {
                        width: 350,
                        slidesPerView: 1,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={45}
                    slidesPerView={1}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    
                >

                    {
                        dataTestimoni.map(({ avatar, name, review, umur, alamat}, index) => {
                            return (
                                <SwiperSlide className='testimonial mr-4'>
                                    <div className='client_avatar'>
                                        <img src={avatar} alt="Avatar One" />
                                    </div>
                                    <div className='client__content'>
                                        <div className="star">
                                        <BsFillStarFill/><BsFillStarFill/>
                                        <BsFillStarFill/><BsFillStarFill/>
                                        <BsFillStarFill/>
                                        </div>                 
                                    <h6 className='client__review'>"{review}"</h6>
                                    <small className='client__name'>{name} {umur}, {alamat}</small>
                                    </div>
                                </SwiperSlide>
                                
                            )
                        })
                    }
                    <div className='prev-next'>
                        <div ref={prevRef} className="prev"> <BsFillArrowLeftCircleFill size={25} /></div>
                        <div ref={nextRef} className="next"> <BsFillArrowRightCircleFill size={25} /></div>
                    </div>
                </Swiper>
            </Row>
        </Container>
    </section>
  )
}

export default Testimonial