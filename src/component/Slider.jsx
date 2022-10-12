import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./slider.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination]);

const Slider = () => {
    return (
        <div className="container">

      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          // Without Perspective design value
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true
          
          // with Perspective design
          // rotate: 50,
          // stretch: 0,
          // depth: 100,
          // modifier: 1,
        }}
        pagination={{
          clickable: true
        }}
      >
        <SwiperSlide className=".swiper-slide">
          <img src="images/1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="images/2.jpg" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="images/3.jpg" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="images/4.jpg" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="images/5.jpg" />
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          <img src="images/6.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
    )
}

export default Slider
