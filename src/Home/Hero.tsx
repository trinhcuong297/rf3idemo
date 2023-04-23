import React from 'react';

import Link from 'next/link';

import Caurosel from './Caurosel/Caurosel';

function Hero() {
  return (
    <>
      <Caurosel />
      <section className="h-screen flex flex-col-reverse justify-center items-center">
        <div className="h-[3.5rem] w-full"></div>
        <div className="mx-auto max-w-screen-xl px-4 py-4 md:py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Hero Image"
                src="https://lh4.googleusercontent.com/aTg6fHxb8fkrqOWqU3h9GWjVfqtPepJcwDXzVVJUXsaHOyNRCYQMJmD63WXADVkbb20UFkCF5HVSQ0kbETu50XvggFPk6L-e88GrSuEmpq8G6QWUyenGgnAaLxQ8PcvsQ4s-E9gv"
                className="absolute inset-0 h-full w-full object-cover mask-hexagon mask"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r to-cyan-500 from-blue-600">
                RF3i Lab
              </h2>

              <p className="mt-4 text-gray-600" style={{textAlign: "justify"}}>
                RF3i stands for Radio Frequency Instrumentation and Industrial Informatics. Lab RF3i belongs to the Department of Instrumentation Engineering and Industrial Informatics - Institute of Electricity. Lab was established in 2014, by Dr. Le Minh Thuy is in charge of management and guidance.
                <br />
              </p>
              <h3 className="flex items-center my-6">
                <span
                  aria-hidden="true"
                  className="flex-grow bg-blue-200 rounded h-0.5"
                ></span>
                <span className="inline-block px-4 py-1 text-sm font-medium text-center text-gray-600  rounded-full">
                  Main Research Direction
                </span>
                <span
                  aria-hidden="true"
                  className="flex-grow bg-blue-200 rounded h-0.5"
                ></span>
              </h3>

              <div className="grid grid-cols-2 w-full">
                <p className="flex px-4 py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mx-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                    />
                  </svg>
                  Antenna Design
                </p>
                <p className="flex px-4 py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mx-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                    />
                  </svg>
                  RF Energy Harvesting
                </p>
                <p className="flex px-4 py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mx-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                    />
                  </svg>
                  Wireless Sensor Network
                </p>
                <p className="flex px-4 py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mx-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                    />
                  </svg>
                  Embedded & IOT System
                </p>
              </div>
              <h3 className="flex items-center my-6">
                <span
                  aria-hidden="true"
                  className="flex-grow bg-blue-200 rounded h-0.5"
                ></span>
              </h3>

              <div className="w-full">
                <div className="sm:max-w-5xl pt-2 rounded-xl mx-4 sm:mx-8 md:mx-auto">
                  <div className="sm:py-6 px-8 sm:24 flex flex-wrap items-center">
                    <div className="w-1/3 sm:w-1/3 flex justify-center items-center inset-0 transform cursor-pointer hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl ">
                      <Link href={'https://www.facebook.com/rf3ilab.hust'}>
                        <img
                          className="focus:outline-none w-8 sm:w-8"
                          src="https://cdn-icons-png.flaticon.com/512/1400/1400477.png"
                          alt="Facebook"
                          role="img"
                        />
                      </Link>
                    </div>
                    <div className="w-1/3 sm:w-1/3 flex justify-center  items-center inset-0 transform cursor-pointer hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
                      <Link href={'https://youtube.com'}>
                        <img
                          className="focus:outline-none w-8 sm:w-8"
                          src="https://cdn-icons-png.flaticon.com/512/3820/3820291.png"
                          alt="Youtube"
                          role="img"
                        />
                      </Link>
                    </div>
                    <div className="w-1/3 sm:w-1/3 flex justify-center  items-center inset-0 transform cursor-pointer hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
                      <Link href={'/Contact'}>
                        <img
                          className="focus:outline-none w-8 sm:w-8"
                          src="https://cdn-icons-png.flaticon.com/512/545/545844.png"
                          alt="Phone"
                          role="img"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <a
          href="#"
          className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          <span className="text-sm font-medium"> Get Started </span>

          <svg
            className="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* <div className="h-screen bg-gray-200">
        <div
          className="hero min-h-screen absolute top-0"
          style={{
            backgroundImage: `url("${router.basePath}/assets/images/bg-cover.png")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-[6rem] text-inline underline decoration-sky-500 font-bold">
                RF3I Group
              </h1>
              <p className="mb-5">
                Radio Frequency Instrumentation and Industrial Informatics
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        <div className="mx-auto container relative z-0 px-4 xl:px-0 hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 pb-4">
              <h1 className="text-4xl lg:text-6xl xl:text-8xl font-black text-indigo-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">
                RF3I
              </h1>
              <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">
                {' '}
                Research for Radio Frequency, Embedded System,...{' '}
              </h2>
              <div className="w-full flex justify-center md:block">
                <button className="hover:opacity-90 bg-indigo-700 py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p">Learn More</button>
              </div>
            </div>
            <div className="w-fit h-max md:h-auto m-auto items-center overflow-hidden flex ">
              <img className="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"/>
              <img className="md:absolute md:w-1/2 md:-ml-28" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Device - Macbook Pro.png" />
              <div className="carousel carousel-center w-full h-[25rem] lg:h-[30rem] space-x-4 rounded-[4rem] bg-gray-100 rounded-box flex items-center">
                <div className="carousel-item">
                  <img
                    src="https://placeimg.com/640/480/tech"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://placeimg.com/640/480/tech"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://placeimg.com/640/480/tech"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://placeimg.com/640/480/tech"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://placeimg.com/640/480/tech"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://placeimg.com/640/480/tech"
                    className="rounded-box"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://placeimg.com/640/480/tech"
                    className="rounded-box"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Hero;
