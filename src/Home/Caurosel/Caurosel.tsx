import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Caurosel() {
  return (
    <>
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-screen w-full bg-cover bg-center bg-[url('https://news.diemthi.edu.vn/wp-content/uploads/2018/07/BKHN1-1.jpg')]"></div>
        </SwiperSlide>
      </Swiper> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://news.diemthi.edu.vn/wp-content/uploads/2018/07/BKHN1-1.jpg")`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl flex flex-col justify-center items-center">
            <p className="text-white text-5xl uppercase font-bold w-full inline min-w-screen">
              Welcome to our Laboratory
            </p>
            <p className="w-40 h-1 bg-white my-4"></p>
            <p className="mb-5 text-3xl font-semibold font-Alka">
              Let's start a JOURNEY
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
