import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CarouselProduto.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function CarouselProduto() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide><img src="https://i.imgur.com/9agWvOC.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/9agWvOC.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/9agWvOC.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/9agWvOC.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/9agWvOC.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/9agWvOC.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/9agWvOC.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/9agWvOC.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/9agWvOC.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/9agWvOC.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/9agWvOC.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/9agWvOC.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/9agWvOC.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/9agWvOC.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/9agWvOC.png" alt="" /></SwiperSlide>

      </Swiper>
    </>
  );
}

export default CarouselProduto;