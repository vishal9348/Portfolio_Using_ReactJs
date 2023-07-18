import React from 'react'
import './testimonials.css'
import IMG1 from '../../asset/ramcharan.jpg'
import IMG2 from '../../asset/sushant.jpg'
import IMG3 from '../../asset/kajal.jpg'
import IMG4 from '../../asset/spider.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className="client__avtar">
            <img src={IMG1} alt="" />
          </div>
          <h5 className="client__name">Ram Charan</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, 
              adipisicing elit. Necessitatibus a voluptas minus 
              itaque tempora. Ex doloribus adipisci excepturi deleniti nisi?
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avtar">
            <img src={IMG2} alt="" />
          </div>
          <h5 className="client__name">Shushant Singh</h5>
          <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, 
              adipisicing elit. Necessitatibus a voluptas minus 
              itaque tempora. Ex doloribus adipisci excepturi deleniti nisi?
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avtar">
            <img src={IMG3} alt="" />
          </div>
          <h5 className="client__name">Kajal</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, 
              adipisicing elit. Necessitatibus a voluptas minus 
              itaque tempora. Ex doloribus adipisci excepturi deleniti nisi?
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avtar">
            <img src={IMG4} alt="" />
          </div>
          <h5 className="client__name">Spider Man</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, 
              adipisicing elit. Necessitatibus a voluptas minus 
              itaque tempora. Ex doloribus adipisci excepturi deleniti nisi?
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials