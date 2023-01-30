import { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

export default function Product() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setLoading] = useState(false);

  interface Data {
    id?: String | null | undefined;
    image_title_url?: String | null | undefined;
    title?: String | null | undefined;
    sub_title?: String | null | undefined;
    created_time?: String | null | undefined;
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
      <div className="mx-auto max-w-2xl px-6 lg:px-16 py-8 sm:py-12 lg:max-w-none lg:py-16 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <h3 className="flex items-center my-2">
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
          <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
            Product
          </span>
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
        </h3>
        <p className="w-full flex justify-center items-center">
          <div className="relative w-20 h-20 animate-pulse rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gray-200 rounded-full border-2 border-white">
              <img src="https://img.icons8.com/clouds/2x/product.png" alt="" />
            </div>
          </div>
        </p>
      </div>
    );
  return (
    <>
      <Head>
        <title>RF3i - Product</title>
      </Head>
      <div className="bg-gray-200">
        <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
          <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16">
            <h3 className="flex items-center my-2">
              <span
                aria-hidden="true"
                className="flex-grow bg-blue-200 rounded h-0.5"
              ></span>
              <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
                Product
              </span>
              <span
                aria-hidden="true"
                className="flex-grow bg-blue-200 rounded h-0.5"
              ></span>
            </h3>

            <div className="w-full py-7 px-5">
              {data.map((param, index) => {
                return (
                  <div
                    className="w-full flex flex-col md:flex-row mb-8"
                    key={index}
                  >
                    <div className="flex flex-col md:flex-row px-2 py-2 bg-gray-100 rounded-xl shadow-xl w-full overflow-hidden h-fit">
                      <div className="flex-1 items-center mx-auto my-2">
                        <img
                          src={`${param ? param.image_title_url : ''}`}
                          alt="Photo by charlesdeluvio on Unsplash"
                          className="rounded-xl"
                        />
                      </div>
                      <div className="flex-1 px-4 sm:px-4 pt-3 md:flex flex-col justify-center">
                        <div className="flex flex-col sm:flex-row justify-between ">
                          <small className="text-sm text-gray-500 text-justify">
                            {`${param ? param.created_time : ''}`}
                          </small>
                        </div>
                        <Link href={`/Product/${param ? param.id : ''}`}>
                          <h3 className="cursor-pointer text-black text-xl sm:text-2xl font-bold mt-2">{`${
                            param ? param.title : ''
                          }`}</h3>
                        </Link>
                        <p className="mt-6 text-gray-700 text-justify">{`${
                          param ? param.sub_title : ''
                        }`}</p>
                        <div className="flex pt-6 items-center justify-end -mr-12 -mb-5">
                          <Link href={`/Product/${param ? param.id : ''}`}>
                            <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                              Read more&rarr; <br />.
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
