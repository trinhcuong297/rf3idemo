import React from 'react';

import { SparklesIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import Link from 'next/link';

export default function RFProduct() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Head>
        <title>ES Team - Product</title>
      </Head>
      <div className="flex items-center justify-center">
        <SparklesIcon
          className="text-red-400 mx-4 h-10 w-10"
          aria-hidden="true"
        />
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-red-400 to-blue-600">
          Our product
        </h2>
        <SparklesIcon
          className="text-indigo-600 mx-4 h-10 w-10"
          aria-hidden="true"
        />
      </div>
      <div className="px-4 md:px-16 flex flex-wrap">
        {data.map((res) => {
          return (
            <div key={res} className="w-full md:w-1/2">
              <Link href="/">
                <div className="card bg-base-100 shadow-xl m-2 md:m-4 hover:bg-blue-100 transition hover:scale-[1.01] hover:pointer">
                  <figure className="">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <a className="card-title">
                      Shoes!
                      <div className="badge badge-secondary">NEW</div>
                    </a>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Fashion</div>
                      <div className="badge badge-outline">Products</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
