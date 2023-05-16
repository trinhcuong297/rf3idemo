import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRouter } from 'next/router';

export default function Caurosel() {
  const router = useRouter();
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundAttachment: 'fixed',
        }}
      >
        <video autoPlay muted loop className="w-full h-screen object-cover">
          <source src={`${router.basePath}/assets/lab.mp4`} type="video/mp4" />
        </video>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl flex flex-col justify-center items-center">
            <p className="text-white text-5xl uppercase font-bold w-full inline min-w-screen">
              Welcome to our Laboratory
            </p>
            <p className="w-40 h-1 bg-white my-4"></p>
            <p className="mb-5 text-3xl font-semibold font-Alka">
              Let`s start a JOURNEY
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
