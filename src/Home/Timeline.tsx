import { useState, useEffect } from 'react';

import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

import { useAppSelector } from '../Redux/hooks';

export default function Timeline() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setLoading] = useState(false);
  const langSet = useAppSelector((state) => state.language.lang);

  interface Data {
    id?: String | null | undefined;
    title?: String | null | undefined;
    event_time?: String | null | undefined;
    html_content?: String | null | undefined;
  }

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.RF3i_API}/rf3i-api/home/event/main?limit=10&lang=${langSet}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, [langSet]);

  if (isLoading)
    return (
      <div className="mx-auto max-w-2xl py-4 sm:py-6 lg:max-w-none lg:py-8 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <h3 className="flex items-center my-2">
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
          <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
            {langSet === 'VN' ? 'Sự kiện' : 'Events'}
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
                src="https://img.icons8.com/clouds/512/confetti.png"
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
        <h3 className="flex items-center my-6">
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
          <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
            {langSet === 'VN' ? 'Sự kiện' : 'Events'}
          </span>
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
        </h3>
      </div>
    );
  return (
    <div className="bg-gray-200 pt-4 h-min-screen">
      <div className="flex items-center justify-center mt-2">
        <h3 className="flex items-center my-2 w-full mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
          <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
            {langSet === 'VN' ? 'Sự kiện' : 'Events'}
          </span>
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
        </h3>
      </div>
      <section className="text-gray-700">
        <div className="container max-w-5xl px-4 py-8 mx-auto">
          <div className="grid gap-4 mx-4 grid-cols-12">
            <div className="col-span-12 hidden md:flex md:pl-8 md:col-span-3">
              <div className="text-center text-left mb-14 before:block before:w-24 before:h-1 before:mb-5 before:rounded-md before:mx-auto before:mx-0 before:bg-blue-300">
                <h3 className="text-6xl font-semibold">RF3i</h3>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 md:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 col-span-8 space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-blue-300">
                {data.map((param, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:mask before:mask-star before:left-[-35px] before:z-[1] before:bg-blue-500"
                    >
                      <h3 className="text-xl font-semibold tracking-wide text-justify">
                        {param.title}{' '}
                      </h3>
                      <time className="text-xs tracking-wide uppercase text-gray-800">
                        {param.event_time}
                      </time>
                      <p className="mt-3 text-justify">{param.html_content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full pt-4 px-8 flex flex-row-reverse text-indigo-600 items-center">
            <ArrowLongRightIcon
              className="mx-4 h-6 w-6 text-blue-600"
              aria-hidden="true"
            />
            {/* <Link href="/Timeline">Show all</Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}
