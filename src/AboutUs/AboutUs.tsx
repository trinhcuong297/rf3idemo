import React, { useEffect, useState } from 'react';

const ActiveMember = () => {
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
    type?: String | null | undefined;
  }

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.RF3i_API}/rf3i-api/about-us/active-member?page=${show}&size=6`
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalPage(data.data.totalPage);
        setData(data.data.data);
        setLoading(false);
      });
  }, [show]);

  if (isLoading)
    return (
      <section id="ourMember" className=" bg-gray-200 rounded-2xl p-4 m-4">
        <div className="flex items-center justify-center mt-6">
          <h2 className="text-4xl font-extrabold pt-4 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-blue-400">
            Our Member
          </h2>
        </div>
        {!data ? (
          <p className="w-full flex justify-center items-center">
            <div className="relative w-20 h-20 animate-pulse rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gray-200 rounded-full border-2 border-white">
                <img src="https://img.icons8.com/clouds/2x/group.png" alt="" />
              </div>
            </div>
          </p>
        ) : (
          <div className="container flex items-center justify-between px-4 mx-auto sm:px-10 animate-pulse">
            <button
              className="btn btn-circle btn-outline btn-neutral hover:bg-blue-100 text-gray-700"
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
            <div className="flex flex-row flex-wrap-reverse justify-center">
              {data.map((param, index) => {
                return (
                  <div
                    className="flex flex-col justify-center m-8 text-center"
                    key={index}
                  >
                    <img
                      alt=""
                      className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full"
                      src={`${
                        param.avatar_url
                          ? param.avatar_url
                          : 'https://img.icons8.com/clouds/2x/test-account.png'
                      }`}
                    />
                    <p className="text-xl font-semibold leading-tight">
                      {param.full_name}
                    </p>
                    <p className="text-gray-600">
                      {param.class}-K{param.course_number}
                    </p>
                  </div>
                );
              })}
            </div>
            <button
              className={`${
                show < totalPage ? '' : 'disable'
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
        )}
      </section>
    );
  if (!data)
    return (
      <section id="ourMember" className=" bg-gray-200 rounded-2xl p-4 m-4">
        <div className="flex items-center justify-center mt-6">
          <h2 className="text-4xl font-extrabold pt-4 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-blue-400">
            Our Member
          </h2>
        </div>
      </section>
    );

  return (
    <>
      <section id="ourMember" className=" bg-gray-200 rounded-2xl p-4 m-4">
        <div className="flex items-center justify-center mt-6">
          <h2 className="text-4xl font-extrabold pt-4 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-blue-400">
            Our Member
          </h2>
        </div>
        <div className="container flex items-center justify-between px-4 mx-auto sm:px-10 ">
          <button
            className="btn btn-circle btn-outline btn-neutral hover:bg-blue-100 text-gray-700"
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
          <div className="flex flex-row flex-wrap-reverse justify-center">
            {data.map((param, index) => {
              return (
                <div
                  className="flex flex-col justify-center m-8 text-center"
                  key={index}
                >
                  <img
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full"
                    src={`${
                      param.avatar_url
                        ? param.avatar_url
                        : 'https://img.icons8.com/clouds/2x/test-account.png'
                    }`}
                  />
                  <p className="text-xl font-semibold leading-tight">
                    {param.full_name}
                  </p>
                  <p className="text-gray-600">
                    {param.class}-K{param.course_number}
                  </p>
                </div>
              );
            })}
          </div>
          <button
            className={`${
              show < totalPage ? '' : 'disable'
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
      </section>
    </>
  );
};

export default ActiveMember;
