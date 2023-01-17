import React, { useState } from 'react';

import Link from 'next/link';

const ResearchLeader = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  // const [data, setData] = useState<Data>();
  // const [isLoading, setLoading] = useState(false);

  // interface Data {
  //   author?: {
  //     name?:  String | null | undefined;
  //     affiliations?:  String | null | undefined;
  //     email?:  String | null | undefined;
  //     website?:  String | null | undefined;
  //     thumbnail?:  String | null | undefined;
  //     interests?:  String[] | null | undefined;
  //   }
  //   articles?: String[] | null | undefined;
  // }

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://serpapi.com/search.json?engine=google_scholar_author&author_id=OLa0HuIAAAAJ&api_key=5ccdaa2cc629eedad306e95c2242821233c2f611e83a57b84879f167c65f9124")
  //     .then(response => response.json())
  //     .then((data) => {
  //       let authorData: Data = {
  //         author: data.author,
  //         articles: data.articles,
  //       }
  //       setData(authorData);
  //       setLoading(false);
  //     });
  // }, []);

  // if (isLoading)
  //   return (
  //     <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
  //       <h3 className="flex items-center my-2">
  //         <span
  //           aria-hidden="true"
  //           className="flex-grow bg-blue-200 rounded h-0.5"
  //         ></span>
  //         <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
  //           Research Leader
  //         </span>
  //         <span
  //           aria-hidden="true"
  //           className="flex-grow bg-blue-200 rounded h-0.5"
  //         ></span>
  //       </h3>
  //       <p className="w-full flex justify-center items-center">
  //         <div className="relative w-20 h-20 animate-pulse rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
  //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gray-200 rounded-full border-2 border-white">
  //             <img src="https://img.icons8.com/clouds/2x/classroom.png" alt="" />
  //           </div>
  //         </div>
  //       </p>
  //     </div>
  //   );
  // if (!data)
  //   return (
  //     <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
  //       <h3 className="flex items-center my-2">
  //         <span
  //           aria-hidden="true"
  //           className="flex-grow bg-blue-200 rounded h-0.5"
  //         ></span>
  //         <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
  //           Research Leader
  //         </span>
  //         <span
  //           aria-hidden="true"
  //           className="flex-grow bg-blue-200 rounded h-0.5"
  //         ></span>
  //       </h3>
  //     </div>
  //   );

  return (
    <>
      <h3 className="flex items-center my-2">
        <span
          aria-hidden="true"
          className="flex-grow bg-blue-200 rounded h-0.5"
        ></span>
        <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
          Research Leader
        </span>
        <span
          aria-hidden="true"
          className="flex-grow bg-blue-200 rounded h-0.5"
        ></span>
      </h3>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <div className="flex flex-col max-w-md p-6 text-gray-800">
            <img
              src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=OLa0HuIAAAAJ&citpid=5"
              alt=""
              className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 aspect-square mask mask-hexagon rounded-lg mb-4"
            />
            <div>
              <h2 className="text-xl font-semibold">
                Assoc. Prof. Le Minh Thuy
              </h2>
              <span className="block pb-2 text-sm text-gray-700">
                Hanoi University of Science and Technology (HUST)
              </span>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <img
            className="w-full rounded-lg"
            alt="img of a girl posing"
            src="https://i.ibb.co/QMdWfzX/component-image-one.png"
          />
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600">Assoc. Prof.</p>
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
              Le Minh Thuy
            </h1>
          </div>
          <Link
            href={
              'https://scholar.google.com/citations?hl=vi&user=OLa0HuIAAAAJ'
            }
          >
            <button className="text-base flex items-center justify-center leading-none text-gray-800 rounded-lg border-blue-500 border-2 bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 w-full py-4">
              <img
                src="https://img.icons8.com/material-outlined/2x/google-scholar.png"
                className="w-8"
              />
              Check in Google Schoolar
            </button>
          </Link>
          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              Interests:
            </p>
            <div className="mx-1 p-3 my-1 badge badge-outline badge-accent">
              antenna
            </div>
            <div className="mx-1 p-3 my-1 badge badge-outline badge-accent">
              antenna array
            </div>
            <div className="mx-1 p-3 my-1 badge badge-outline badge-accent">
              RF energy harvesting
            </div>
            <div className="mx-1 p-3 my-1 badge badge-outline badge-accent">
              wireless power transfer
            </div>
            <div className="mx-1 p-3 my-1 badge badge-outline badge-accent">
              wireless sensor
            </div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              Citations: 398
            </p>
          </div>
          <div>
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div
                onClick={() => setShow(!show)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">Publication</p>
                <button
                  className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                  aria-label="show or hide"
                >
                  <svg
                    className={`transform ${show ? 'rotate-180' : 'rotate-0'}`}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 ${
                  show ? 'block' : 'hidden'
                }`}
                id="sect"
              >
                You will be responsible for paying for your own shipping costs
                for returning your item. Shipping costs are nonrefundable
              </div>
            </div>
          </div>
          <div>
            <div className="border-b py-4 border-gray-200">
              <div
                onClick={() => setShow2(!show2)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">
                  Graph citations
                </p>
                <button
                  className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                  aria-label="show or hide"
                >
                  <svg
                    className={`transform ${show2 ? 'rotate-180' : 'rotate-0'}`}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 ${
                  show2 ? 'block' : 'hidden'
                }`}
                id="sect"
              >
                If you have any questions on how to return your item to us,
                contact us.
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="flex items-center my-2">
        <span
          aria-hidden="true"
          className="flex-grow bg-blue-200 rounded h-0.5"
        ></span>
      </h3>
    </>
  );
};

export default ResearchLeader;
