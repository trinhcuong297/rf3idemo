import { useState, useEffect } from 'react';

import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Activ() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setLoading] = useState(false);

  interface Data {
    id?: String | null | undefined;
    image_url?: String | null | undefined;
    activity_name?: String | null | undefined;
  }

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.RF3i_API}/rf3i-api/home/activity/main?limit=5`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <h3 className="flex items-center my-2">
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
          <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
            Activity
          </span>
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
        </h3>
        <p className="w-full flex justify-center items-center">
          <div className="relative w-20 h-20 animate-pulse rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gray-200 rounded-full border-2 border-white">
              <img src="https://img.icons8.com/clouds/512/medal2.png" alt="" />
            </div>
          </div>
        </p>
      </div>
    );
  if (!data)
    return (
      <div className="mx-auto max-w-2xl py-2 sm:py-4 lg:max-w-none lg:py-8 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <h3 className="flex items-center my-2">
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
          <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
            Activity
          </span>
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
        </h3>
      </div>
    );
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-24 py-8 sm:py-12 lg:py-16">
      <h3 className="flex items-center my-6 w-full">
        <span
          aria-hidden="true"
          className="flex-grow bg-blue-200 rounded h-0.5"
        ></span>
        <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
          Activity
        </span>
        <span
          aria-hidden="true"
          className="flex-grow bg-blue-200 rounded h-0.5"
        ></span>
      </h3>
      <section className="py-2 bg-gray-100 text-gray-50">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="container grid gap-4 p-4 mx-auto grid-cols-4">
            {data.map((param, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                  <img
                    src={`${param ? param.image_url : ''}`}
                    alt="Photo by RF3i"
                    className={`w-full rounded shadow-xl hover:shadow-2xl ${
                      index % 5 === 0 ? '' : ''
                    }`}
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    <div className="flex-row text-center">
                      <h1 className="text-gray-50 font-bold text-lg">
                        {param ? param.activity_name : ''}
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
        <div className="w-full flex flex-row-reverse text-indigo-600 items-center">
          <ArrowLongRightIcon
            className="mx-4 h-6 w-6 text-blue-600"
            aria-hidden="true"
          />
          <Link href="/News">Show all</Link>
        </div>
      </section>
    </div>
  );
}
