import { useState, useEffect } from 'react';

import Head from 'next/head';

export default function Alumni() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [show, setShow] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
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
    fetch(
      `${process.env.RF3i_API}/rf3i-api/about-us/alumni?page=${show}&size=6`
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalPage(data.data.totalPage);
        setData(data.data.data);
        setLoading(false);
      });
  }, [show]);

  // if (isLoading)
  //   return (
  //     <section id="ourMember" className=" bg-gray-200 rounded-2xl p-4 m-4">
  //       <div className="flex items-center justify-center mt-6">
  //         <h2 className="text-4xl font-extrabold pt-4 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-blue-400">
  //           RF3i Alumni
  //         </h2>
  //       </div>
  //       <p className="w-full flex justify-center items-center">
  //         <div className="relative w-20 h-20 animate-pulse rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
  //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gray-200 rounded-full border-2 border-white">
  //             <img src="https://img.icons8.com/clouds/2x/group.png" alt="" />
  //           </div>
  //         </div>
  //       </p>
  //     </section>
  //   );
  if (isLoading)
    return (
      <div className="space-y-12 text-gray-800 px-4 md:px-20 scroll-smooth">
        <div className="px-12 mx-auto bg-gray-100">
          <section className="py-4 px-4 text-center">
            <div className="w-full max-w-2xl text-left">
              <h1 className="text-5xl leading-tight font-bold bg-gradient-to-r from-blue-600 to-cyan-300 text-transparent bg-clip-text">
                RF3i Alumni
              </h1>
            </div>
          </section>
          <hr className="border border-blue-300" />

          <div className="w-full flex items-center justify-between">
            <button
              className={`${
                show > 1 ? '' : 'btn-disabled'
              } btn btn-circle btn-outline btn-neutral hover:bg-blue-100 text-gray-700`}
              onClick={() => {
                setShow(show > 1 ? show - 1 : show);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <section className="py-8 px-4">
              {!data ? (
                <div className="relative w-20 h-20 animate-pulse rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gray-200 rounded-full border-2 border-white">
                    <img
                      src="https://img.icons8.com/clouds/2x/group.png"
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap animate-pulse">
                  {data.map((param, index) => {
                    return (
                      <div
                        className="max-w-screen-md px-10 py-6 mx-4 mt-20 md:mx-auto border-1 px-4 mb-6"
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
                    );
                  })}
                </div>
              )}
            </section>
            <button
              className={`${
                show < totalPage ? '' : 'btn-disabled'
              } btn btn-circle btn-outline btn-neutral hover:bg-blue-100 text-gray-700`}
              onClick={() => {
                setShow(show < totalPage ? show + 1 : show);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );

  // if (!data)
  //   return (
  //     <section id="ourMember" className=" bg-gray-200 rounded-2xl p-4 m-4">
  //       <div className="flex items-center justify-center mt-6">
  //         <h2 className="text-4xl font-extrabold pt-4 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-blue-400">
  //           RF3i Alumni
  //         </h2>
  //       </div>
  //     </section>
  //   );
  return (
    <>
      <Head>
        <title>RF3i - Alumni</title>
      </Head>
      <div className="space-y-12 text-gray-800 px-4 md:px-20 scroll-smooth">
        <div className="px-12 mx-auto bg-gray-100">
          <section className="py-4 px-4 text-center">
            <div className="w-full max-w-2xl text-left">
              <h1 className="text-5xl leading-tight font-bold bg-gradient-to-r from-blue-600 to-cyan-300 text-transparent bg-clip-text">
                RF3i Alumni
              </h1>
            </div>
          </section>
          <hr className="border border-blue-300" />

          <div className="w-full flex items-center justify-between">
            <button
              className={`${
                show > 1 ? '' : 'btn-disabled'
              } btn btn-circle btn-outline btn-neutral hover:bg-blue-100 text-gray-700`}
              onClick={() => {
                setShow(show > 1 ? show - 1 : show);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <section className="py-8 px-4">
              <div className="flex flex-wrap">
                {data.map((param, index) => {
                  return (
                    <div
                      className="max-w-screen-md px-10 py-6 mx-4 mt-20 md:mx-auto border-1 px-4 mb-6"
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
                  );
                })}
              </div>
            </section>
            <button
              className={`${
                show < totalPage ? '' : 'btn-disabled'
              } btn btn-circle btn-outline btn-neutral hover:bg-blue-100 text-gray-700`}
              onClick={() => {
                setShow(show < totalPage ? show + 1 : show);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
