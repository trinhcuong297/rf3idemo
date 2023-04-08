import React, { useEffect, useState } from 'react';

import Link from 'next/link';

const ResearchLeader = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [data, setData] = useState<Data>();
  const [isLoading, setLoading] = useState(false);

  interface Data {
    search_metadata?: {
      google_scholar_author_url?: string | undefined;
    };
    author?: {
      name?: string | undefined;
      affiliations?: string | undefined;
      email?: string | undefined;
      website?: string | undefined;
      thumbnail?: string | undefined;
      research_leader_avatar_url?: string | undefined;
      interests?: [
        {
          title?: string | undefined;
          link?: string | undefined;
        }
      ];
    };
    articles?: String[] | undefined;
    cited_by?: {
      table: [
        {
          citations: {
            all?: string | undefined;
            since_2018?: string | undefined;
          };
        },
        {
          h_index: {
            all?: string | undefined;
            since_2018?: string | undefined;
          };
        },
        {
          i10_index: {
            all?: string | undefined;
            since_2018?: string | undefined;
          };
        }
      ];
    };
  }

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.RF3i_API}/rf3i-api/about-us/research-leader-infor`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="mx-auto max-w-2xl py-8 lg:max-w-none lg:py-16 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <h3 className="flex items-center my-2 px-48">
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
        <p className="w-full flex justify-center items-center">
          <div className="relative w-20 h-20 animate-pulse rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gray-200 rounded-full border-2 border-white">
              <img
                src="https://img.icons8.com/clouds/2x/classroom.png"
                alt=""
              />
            </div>
          </div>
        </p>
      </div>
    );
  if (!data)
    return (
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <h3 className="flex items-center my-2 px-48">
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
      </div>
    );

  return (
    <>
      <h3 className="flex items-center my-2 px-48">
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
      <div className="md:flex items-start justify-center py-8 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <div className="flex flex-col max-w-md p-6 text-gray-800">
            <img
              src={data.author ? data.author.research_leader_avatar_url : ''}
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
            src={data.author ? data.author.thumbnail : ''}
          />
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="pb-6">
            <p className="text-sm leading-none text-gray-600">Assoc. Prof.</p>
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
              Le Minh Thuy
            </h1>
          </div>
          <div className="flex w-full">
            <div className="grid flex-grow card p-4 place-items-center">
              <Link href={`https://seee.hust.edu.vn/lmthuy`}>
                <a target="_blank" rel="noopener noreferrer">
                  <button className="text-base flex items-center justify-center rounded-lg border-2 bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 w-full py-4">
                    <img
                      src="https://img.icons8.com/ios-glyphs/2x/university-campus.png"
                      className="w-8"
                    />
                    Check in SEEE HUST
                  </button>
                </a>
              </Link>
            </div>
            <div className="grid flex-grow card place-items-center">
              <Link href={`${data.search_metadata?.google_scholar_author_url}`}>
                <a target="_blank" rel="noopener noreferrer">
                  <button className="text-base flex items-center justify-center rounded-lg border-2 bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 w-full py-4">
                    <img
                      src="https://img.icons8.com/material-outlined/2x/google-scholar.png"
                      className="w-8"
                    />
                    Check in Google Schoolar
                  </button>
                </a>
              </Link>
            </div>
          </div>

          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              Interests:
            </p>
            {data.author?.interests?.map((param, index) => {
              return (
                <Link href={`${param?.link}`} key={index}>
                  <div className="mx-1 p-3 my-1 badge badge-outline badge-accent cursor-pointer">
                    {param.title}
                  </div>
                </Link>
              );
            })}
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max pt-6">
              <div className="flex flex-col">
                <span className="countdown font-mono text-4xl text-gray-700">
                  {data.cited_by?.table[0].citations.all}
                </span>
                citations
              </div>
              <div className="divider lg:divider-horizontal w-2"></div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-4xl text-gray-700">
                  {data.cited_by?.table[1].h_index.all}
                </span>
                h_index
              </div>
              <div className="divider lg:divider-horizontal w-2"></div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-4xl text-gray-700">
                  {data.cited_by?.table[2].i10_index.all}
                </span>
                i10_index
              </div>
            </div>
          </div>
          <div>
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div
                onClick={() => setShow(!show)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">
                  Introduction
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
                Dr. Le Minh Thuy is a lecture at department of Instrumentation
                and Industrial Informatics, School of Electrical Engineering,
                Hanoi University of Science and Technology. Her interesting
                research fields are Intergrated Antenna & Antenna array; SIW,
                mmWave and Metalmaterials; RF Energy harvesting & Wireless power
                transfer; RF embedded system: RFID and DSRC, RF based
                localization; Autonomous Wireless sensors, Wireless sensor
                networks and IoT.
                <br />
                Dr. Le Minh Thuy is a reviewer for International Confrences and
                Journal: IEEE International Conference on Communications and
                Electronics (ICCE), IEEE Transaction on Antenna and Propagation,
                IEEE Transaction on Vehicule Communications. She is the track
                chair and session chair of IEEE Conference on Advanced
                Technologies for Communications (ATC), IEEE International
                Symposium on Antennas and Propagation (ISAP), IEEE International
                Conference on Telecommunications (ICT).
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
                  More infomation
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
                <Link href={`https://seee.hust.edu.vn/lmthuy`}>
                  LE MINH THUY in SEEE HUST
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchLeader;
