import React from 'react';

import Head from 'next/head';

import ContactForm from '../../ContactUs/Form';

const ContactUs: React.FC = () => (
  <>
    <Head>
      <title>RF3i - Contact Us</title>
    </Head>
    {/* <Container className="bg-gray-100 flex justify-center h-max py-[4rem]">
      <Content className="w-max">
        <ContactForm />
        <ContactInformation />
      </Content>
    </Container> */}

    <div>
      <section className="relative z-[0] overflow-hidden bg-white py-20 lg:py-[120px]">
        <div className="container mx-auto">
          <div className="mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="text-gray-700 mb-4 block text-base font-semibold">
                  Contact Us
                </span>
                <h2 className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="text-gray-700 mb-9 text-base leading-relaxed">
                  <h3 className="flex items-center my-2">
                    <span
                      aria-hidden="true"
                      className="flex-grow bg-blue-200 rounded h-0.5"
                    ></span>
                  </h3>
                </p>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="bg-primary text-gray-700 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                    <img src="https://img.icons8.com/clouds/2x/map-pin.png" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-gray-800 mb-1 text-xl font-bold">
                      Our Location
                    </h4>
                    <p className="text-gray-700 text-base">
                      Room 328 - Building C1
                      <br />
                      Hanoi University of Science and Technology
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="bg-primary text-gray-700 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                    <img src="https://img.icons8.com/clouds/2x/phone.png" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-gray-800 mb-1 text-xl font-bold">
                      Phone Number
                    </h4>
                    <p className="text-gray-700 text-base">024 3869 6233</p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="bg-primary text-gray-700 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                    <img src="https://img.icons8.com/clouds/2x/new-post.png" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-gray-800 mb-1 text-xl font-bold">
                      Email Address
                    </h4>
                    <p className="text-gray-700 text-base">labrf3i@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-gray-100 p-8 shadow-xl sm:p-12">
                <ContactForm />

                <div>
                  <span className="absolute -top-20 -right-20 z-[1]">
                    <img
                      src="https://img.icons8.com/clouds/2x/paper-plane.png"
                      className="w-40 h-40"
                    />
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    <svg
                      width="34"
                      height="134"
                      viewBox="0 0 34 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="31.9993"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 31.9993 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 31.9993 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 31.9993 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 31.9993 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 31.9993 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 31.9993 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 31.9993 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 31.9993 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 31.9993 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 31.9993 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 17.3333 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 17.3333 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 17.3333 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 17.3333 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 17.3333 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 17.3333 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 17.3333 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 17.3333 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 17.3333 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 17.3333 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 2.66536 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 2.66536 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 2.66536 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 2.66536 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 2.66536 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 2.66536 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 2.66536 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 2.66536 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 2.66536 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 2.66536 1.66665)"
                        fill="#13C296"
                      />
                    </svg>
                  </span>
                  <span className="absolute -left-7 -bottom-7 z-[-1]">
                    <svg
                      width="107"
                      height="134"
                      viewBox="0 0 107 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="104.999"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 104.999 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 104.999 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 104.999 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 104.999 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 104.999 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 104.999 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 104.999 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 104.999 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 104.999 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="104.999"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 104.999 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 90.3333 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 90.3333 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 90.3333 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 90.3333 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 90.3333 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 90.3333 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 90.3333 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 90.3333 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 90.3333 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="90.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 90.3333 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 75.6654 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 31.9993 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 75.6654 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 31.9993 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 75.6654 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 31.9993 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 75.6654 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 31.9993 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 75.6654 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 31.9993 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 75.6654 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 31.9993 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 75.6654 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 31.9993 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 75.6654 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 31.9993 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 75.6654 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 31.9993 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="75.6654"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 75.6654 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="31.9993"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 31.9993 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 60.9993 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 17.3333 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 60.9993 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 17.3333 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 60.9993 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 17.3333 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 60.9993 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 17.3333 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 60.9993 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 17.3333 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 60.9993 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 17.3333 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 60.9993 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 17.3333 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 60.9993 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 17.3333 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 60.9993 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 17.3333 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="60.9993"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 60.9993 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="17.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 17.3333 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 46.3333 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="132"
                        r="1.66667"
                        transform="rotate(180 2.66536 132)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 46.3333 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="117.333"
                        r="1.66667"
                        transform="rotate(180 2.66536 117.333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 46.3333 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="102.667"
                        r="1.66667"
                        transform="rotate(180 2.66536 102.667)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 46.3333 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="88"
                        r="1.66667"
                        transform="rotate(180 2.66536 88)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 46.3333 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="73.3333"
                        r="1.66667"
                        transform="rotate(180 2.66536 73.3333)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 46.3333 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="45"
                        r="1.66667"
                        transform="rotate(180 2.66536 45)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 46.3333 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="16"
                        r="1.66667"
                        transform="rotate(180 2.66536 16)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 46.3333 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="59"
                        r="1.66667"
                        transform="rotate(180 2.66536 59)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 46.3333 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="30.6666"
                        r="1.66667"
                        transform="rotate(180 2.66536 30.6666)"
                        fill="#13C296"
                      />
                      <circle
                        cx="46.3333"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 46.3333 1.66665)"
                        fill="#13C296"
                      />
                      <circle
                        cx="2.66536"
                        cy="1.66665"
                        r="1.66667"
                        transform="rotate(180 2.66536 1.66665)"
                        fill="#13C296"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default ContactUs;
