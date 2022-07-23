import React from 'react'
import './testimonial.css';
import {Container, Row} from 'react-bootstrap';

import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



function Testimonial(props) {
  const {dataTestimoni} = props;
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
                    autoplay={{ delay: 2500 }}
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={40}
 //                   slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    {
                        dataTestimoni.map(({ avatar, name, review }, index) => {
                            return (
                                <SwiperSlide className='testimonial'>
                                    <div className='client_avatar'>
                                        <img src={avatar} alt="Avatar One" />
                                    </div>
                                    <div className='client__content'>
                                    <h5 className='client__name'>{name}</h5>
                                    <small className='client__review'>{review}</small>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </Row>
        </Container>
    </section>
  )
}

export default Testimonial