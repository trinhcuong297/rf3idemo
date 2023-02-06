import { useState, useEffect } from 'react';

import Head from 'next/head';

export default function Alumni() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [show, setShow] = useState(6);
  const disp = 6;

  interface Data {
    id?: String | null | undefined;
    full_name?: String | null | undefined;
    course_number?: String | null | undefined;
    class?: String | null | undefined;
    avatar_url?: String | null | undefined;
    current_job?: String | null | undefined;
    company?: String | null | undefined;
  }

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.RF3i_API}/rf3i-api/about-us/alumni?page=1&size=9`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data.data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <section id="ourMember" className=" bg-gray-200 rounded-2xl p-4 m-4">
        <div className="flex items-center justify-center mt-6">
          <h2 className="text-4xl font-extrabold pt-4 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-blue-400">
            RF3i Alumni
          </h2>
        </div>
        <p className="w-full flex justify-center items-center">
          <div className="relative w-20 h-20 animate-pulse rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gray-200 rounded-full border-2 border-white">
              <img src="https://img.icons8.com/clouds/2x/group.png" alt="" />
            </div>
          </div>
        </p>
      </section>
    );
  if (!data)
    return (
      <section id="ourMember" className=" bg-gray-200 rounded-2xl p-4 m-4">
        <div className="flex items-center justify-center mt-6">
          <h2 className="text-4xl font-extrabold pt-4 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-blue-400">
            RF3i Alumni
          </h2>
        </div>
      </section>
    );
  return (
    <>
      <Head>
        <title>RF3i - Alumni</title>
      </Head>
      <div className="space-y-12 text-gray-800 px-4 md:px-20 scroll-smooth">
        <div className="px-12 mx-auto bg-gray-100">
          <section className="py-12 px-4 text-center">
            <div className="w-full max-w-2xl text-left">
              <h1 className="text-5xl leading-tight font-bold bg-gradient-to-r from-blue-600 to-cyan-300 text-transparent bg-clip-text">
                RF3i Alumni
              </h1>
            </div>
          </section>
          <hr className="border border-blue-300" />
          <section className="py-8 px-4">
            <div className="flex flex-wrap">
              {data.map((param, index) => {
                return index < show ? (
                  <div
                    className="max-w-screen-md px-10 py-6 mx-4 mt-20 md:mx-auto border-1 lg:w-1/3 px-4 mb-6"
                    key={index}
                  >
                    <div className="flex flex-col items-start justify-center w-full m-auto sm:flex-row">
                      <div className="flex mx-auto sm:m-0">
                        <div className="items-center justify-center w-20 h-20 m-auto sm:w-32 sm:h-32">
                          <img
                            alt="profil"
                            src={`${
                              param.avatar_url
                                ? param.avatar_url
                                : 'https://img.icons8.com/clouds/2x/test-account.png'
                            }`}
                            className="object-cover w-20 h-20 mx-auto rounded-full sm:w-32 sm:h-32"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full pt-5 flex flex-col justify-center items-center">
                      <h1 className="text-lg font-semibold text-gray-800 sm:text-xl">
                        {param.full_name}
                      </h1>
                      <p className="text-sm text-gray-800 md:text-base">
                        {param.class} - Course {param.course_number}
                      </p>
                      <p className="text-sm text-gray-800 md:text-base">
                        {param.current_job} at {param.company}
                      </p>
                    </div>
                  </div>
                ) : (
                  <></>
                );
              })}
            </div>
          </section>
          <div className="w-full flex justify-center pb-4">
            <button
              className="flex flex-col items-center"
              onClick={() => {
                setShow(show + disp > data.length ? data.length : show + disp);
              }}
            >
              <p>Load more</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="my-2 animate-bounce w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
