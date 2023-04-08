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
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl flex flex-col justify-center items-center">
            <p className="text-white text-5xl uppercase font-bold w-full inline min-w-screen">
              welcome to our website
            </p>
            <p className="w-40 h-2 bg-white my-4"></p>
            <p className="mb-5 text-3xl font-semibold">
              Radio Frequency - 3i Lab
            </p>
            <p className="mb-5 text-3xl font-semibold font-Alka">
              {' '}
              Asoc. Prof. Le Minh Thuy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
