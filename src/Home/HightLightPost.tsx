import { useState, useEffect } from 'react';

import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function HightlightNews() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setLoading] = useState(false);

  interface Data {
    id?: String | null | undefined;
    image_title_url?: String | null | undefined;
    title?: String | null | undefined;
    sub_title?: String | null | undefined;
  }

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.RF3i_API}/rf3i-api/home/news/main?limit=3`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <h3 className="flex items-center my-6">
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
          <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
            News
          </span>
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
        </h3>
        <p className="w-full flex justify-center items-center">
          <div className="relative w-20 h-20 animate-pulse rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gray-200 rounded-full border-2 border-white">
              <img src="https://img.icons8.com/clouds/512/news.png" alt="" />
            </div>
          </div>
        </p>
      </div>
    );
  if (!data)
    return (
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <h3 className="flex items-center my-6">
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
          <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
            News
          </span>
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
        </h3>
      </div>
    );
  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16">
          <h3 className="flex items-center my-6">
            <span
              aria-hidden="true"
              className="flex-grow bg-blue-200 rounded h-0.5"
            ></span>
            <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
              News
            </span>
            <span
              aria-hidden="true"
              className="flex-grow bg-blue-200 rounded h-0.5"
            ></span>
          </h3>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mx-8 sm:mx-4 xl:mx-auto justify-center mt-8">
            <div className="flex flex-col px-2 pt-2 bg-gray-100 rounded-xl shadow-xl w-full md:max-w-xl overflow-hidden">
              <div className="flex-1 items-center mx-auto mt-2">
                <img
                  src={`${data[0] ? data[0].image_title_url : ''}`}
                  alt="Photo by charlesdeluvio on Unsplash"
                  className="rounded-xl"
                />
              </div>
              <div className="flex-1 px-4 sm:px-4 pt-3">
                <div className="flex flex-col sm:flex-row justify-between ">
                  <small className="text-sm text-gray-500 text-justify">
                    Monday Feb 23, 2022
                  </small>
                </div>
                <Link href={`/News/${data[0] ? data[0].id : ''}`}>
                  <h3 className=" text-black text-xl sm:text-2xl font-bold mt-2">{`${
                    data[0] ? data[0].title : ''
                  }`}</h3>
                </Link>
                <p className="mt-6 text-gray-700 text-justify">{`${
                  data[0] ? data[0].sub_title : ''
                }`}</p>
                <div className="flex pt-6 items-center justify-end -mr-12 -mb-5">
                  <Link href={`/News/${data[0] ? data[0].id : ''}`}>
                    <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                      Read more&rarr; <br />.
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-2 w-full md:max-w-xl space-y-4">
              <div className="px-4 sm:px-8 pt-6 rounded-2xl w-full md:max-w-xl overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between ">
                  <small className="text-sm text-gray-600 text-justify">
                    Monday Feb 23, 2022
                  </small>
                </div>
                <Link href={`/News/${data[1] ? data[1].id : ''}`}>
                  <h3 className=" text-black text-xl sm:text-2xl font-bold mt-2">
                    {data[1] ? data[1].title : ''}
                  </h3>
                </Link>
                <p className="mt-6 text-gray-700 text-justify">
                  {data[1] ? data[1].sub_title : ''}
                </p>
                <div className="flex items-center justify-end -mr-12 -mb-5">
                  <Link href={`/News/${data[1] ? data[1].id : ''}`}>
                    <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                      Read more&rarr; <br />.
                    </button>
                  </Link>
                </div>
                <h3 className="flex items-center my-6">
                  <span
                    aria-hidden="true"
                    className="flex-grow bg-blue-200 rounded h-0.5"
                  ></span>
                </h3>
              </div>
              <div className="px-4 sm:px-8 pt-6 rounded-2xl w-full md:max-w-xl overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between ">
                  <small className="text-sm text-gray-600 text-justify">
                    Monday Feb 23, 2022
                  </small>
                </div>
                <Link href={`/News/${data[2] ? data[2].id : ''}`}>
                  <h3 className=" text-black text-xl sm:text-2xl font-bold mt-2">
                    {data[2] ? data[2].title : ''}
                  </h3>
                </Link>
                <p className="mt-6 text-gray-700 text-justify">
                  {data[2] ? data[2].sub_title : ''}
                </p>
                <div className="flex items-center justify-end -mr-12 -mb-5">
                  <Link href={`/News/${data[2] ? data[2].id : ''}`}>
                    <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                      Read more&rarr; <br />.
                    </button>
                  </Link>
                </div>
                <h3 className="flex items-center my-6">
                  <span
                    aria-hidden="true"
                    className="flex-grow bg-blue-200 rounded h-0.5"
                  ></span>
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row-reverse text-gray-600 hover:text-gray-700 font-bold items-center">
            <ArrowLongRightIcon
              className="mx-4 h-6 w-6 text-gray-600"
              aria-hidden="true"
            />
            <Link href="/News">Show all</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AllNews() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setLoading] = useState(false);

  interface Data {
    id?: String | null | undefined;
    image_title_url?: String | null | undefined;
    title?: String | null | undefined;
    sub_title?: String | null | undefined;
  }

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.RF3i_API}/rf3i-api/home/news/all?page=1&size=5`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <h3 className="flex items-center my-6">
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
          <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
            News
          </span>
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
        </h3>
        <p className="w-full flex justify-center items-center">
          <div className="relative w-20 h-20 animate-pulse rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gray-200 rounded-full border-2 border-white">
              <img src="https://img.icons8.com/clouds/512/news.png" alt="" />
            </div>
          </div>
        </p>
      </div>
    );
  if (!data)
    return (
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <h3 className="flex items-center my-6">
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
          <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
            News
          </span>
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
        </h3>
      </div>
    );
  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16">
          <h3 className="flex items-center my-6">
            <span
              aria-hidden="true"
              className="flex-grow bg-blue-200 rounded h-0.5"
            ></span>
            <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
              News
            </span>
            <span
              aria-hidden="true"
              className="flex-grow bg-blue-200 rounded h-0.5"
            ></span>
          </h3>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mx-8 sm:mx-4 xl:mx-auto justify-center mt-8">
            <div className="flex flex-col px-2 pt-2 bg-gray-100 rounded-xl shadow-xl w-full md:max-w-xl overflow-hidden">
              <div className="flex-1 items-center mx-auto mt-2">
                <img
                  src={`${data[0] ? data[0].image_title_url : ''}`}
                  alt="Photo by charlesdeluvio on Unsplash"
                  className="rounded-xl"
                />
              </div>
              <div className="flex-1 px-4 sm:px-4 pt-3">
                <div className="flex flex-col sm:flex-row justify-between ">
                  <small className="text-sm text-gray-500 text-justify">
                    Monday Feb 23, 2022
                  </small>
                </div>
                <Link href={`/News/${data[0] ? data[0].id : ''}`}>
                  <h3 className=" text-black text-xl sm:text-2xl font-bold mt-2">{`${
                    data[0] ? data[0].title : ''
                  }`}</h3>
                </Link>
                <p className="mt-6 text-gray-700 text-justify">{`${
                  data[0] ? data[0].sub_title : ''
                }`}</p>
                <div className="flex pt-6 items-center justify-end -mr-12 -mb-5">
                  <Link href={`/News/${data[0] ? data[0].id : ''}`}>
                    <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                      Read more&rarr; <br />.
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-2 w-full md:max-w-xl space-y-4">
              <div className="px-4 sm:px-8 pt-6 rounded-2xl w-full md:max-w-xl overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between ">
                  <small className="text-sm text-gray-600 text-justify">
                    Monday Feb 23, 2022
                  </small>
                </div>
                <Link href={`/News/${data[1] ? data[1].id : ''}`}>
                  <h3 className=" text-black text-xl sm:text-2xl font-bold mt-2">
                    {data[1] ? data[1].title : ''}
                  </h3>
                </Link>
                <p className="mt-6 text-gray-700 text-justify">
                  {data[1] ? data[1].sub_title : ''}
                </p>
                <div className="flex items-center justify-end -mr-12 -mb-5">
                  <Link href={`/News/${data[1] ? data[1].id : ''}`}>
                    <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                      Read more&rarr; <br />.
                    </button>
                  </Link>
                </div>
                <h3 className="flex items-center my-6">
                  <span
                    aria-hidden="true"
                    className="flex-grow bg-blue-200 rounded h-0.5"
                  ></span>
                </h3>
              </div>
              <div className="px-4 sm:px-8 pt-6 rounded-2xl w-full md:max-w-xl overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between ">
                  <small className="text-sm text-gray-600 text-justify">
                    Monday Feb 23, 2022
                  </small>
                </div>
                <Link href={`/News/${data[2] ? data[2].id : ''}`}>
                  <h3 className=" text-black text-xl sm:text-2xl font-bold mt-2">
                    {data[2] ? data[2].title : ''}
                  </h3>
                </Link>
                <p className="mt-6 text-gray-700 text-justify">
                  {data[2] ? data[2].sub_title : ''}
                </p>
                <div className="flex items-center justify-end -mr-12 -mb-5">
                  <Link href={`/News/${data[2] ? data[2].id : ''}`}>
                    <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                      Read more&rarr; <br />.
                    </button>
                  </Link>
                </div>
                <h3 className="flex items-center my-6">
                  <span
                    aria-hidden="true"
                    className="flex-grow bg-blue-200 rounded h-0.5"
                  ></span>
                </h3>
              </div>
            </div>
          </div>
          <div className="rounded w-full py-7 px-5">
            <h3 className="flex items-center my-2">
              <span
                aria-hidden="true"
                className="flex-grow bg-blue-200 rounded h-0.5"
              ></span>
            </h3>
            {data.map((param, index) => {
              return (
                <Link href={`/News/${param?.id}`} key={index}>
                  <div className="grid grid-cols-6">
                    <div className="col-span-2 p-4">
                      <img
                        src={`${param?.image_title_url}`}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="col-span-4 p-4 flex items-center">
                      <div>
                        <p className="text-gray-700 font-bold">
                          {param?.title}
                        </p>
                        <p className="text-gray-500 mt-4">{param?.sub_title}</p>
                      </div>
                    </div>
                    <h3 className="flex items-center my-2 w-full col-span-6">
                      <span
                        aria-hidden="true"
                        className="flex-grow bg-blue-200 rounded h-0.5"
                      ></span>
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
