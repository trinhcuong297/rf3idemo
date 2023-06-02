import { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

export default function Product() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setLoading] = useState(false);

  interface Data {
    id?: String | null | undefined;
    product_image_url?: String | null | undefined;
    product_name?: String | null | undefined;
    product_type?: String | null | undefined;
    product_description?: String | null | undefined;
  }

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.RF3i_API}/rf3i-api/product/all`)
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
      <div className="bg-gray-200 lg:pt-12">
        <div className="mx-auto px-4 md:px-12 lg:px-24 py-12">
          <div className="grid grid-cols-3 gap-4 justify-items-center min-w-full">
            {data.map((data, index) => {
              return (
                <div
                  className="relative flex w-full h-fit max-w-[30rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
                  key={index}
                >
                  <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                      src={`${data.product_image_url}`}
                      alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex flex-col items-center justify-between">
                      <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {data.product_name}
                      </h5>
                      <p className="items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <div className="badge badge-neutral mx-1">
                          <p>{data.product_type}</p>
                        </div>
                      </p>
                    </div>
                    <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                      {data.product_description}
                    </p>
                  </div>
                  <div className="p-6 pt-3">
                    <Link href={`/Product/${data.id}`}>
                      <button
                        className="block w-full select-none rounded-lg bg-blue-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                      >
                        More details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
