import React from 'react'
import './testimonial.css';
import avt1 from './../../../src/assets/default.png';
import {Container, Row} from 'react-bootstrap';

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: avt1,
        name: 'Yusaq',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum.'
    },
    {
        avatar: avt1,
        name: 'Ikhlasul',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum.'
    },
    {
        avatar: avt1,
        name: 'Tri Bagus',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum.'
    },
    {
        avatar: avt1,
        name: 'Dwi Pamungkas',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nostrum.'
    }
];

function Testimonial() {
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
                    modules={[Pagination, Navigation]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    {
                        data.map(({ avatar, name, review }, index) => {
                            return (
                                <SwiperSlide className='testimonial'>
                                    <div className='client_avatar'>
                                        <img src={avatar} alt="Avatar One" />
                                    </div>
                                    <h5 className='client__name'>{name}</h5>
                                    <small className='client__review'>{review}</small>
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