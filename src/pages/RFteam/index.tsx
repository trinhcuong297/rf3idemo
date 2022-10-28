import React, { useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const RFteam = (data: Data) => {
  const show = 4;
  const dataLength = data.data.length;
  const numberPage = Math.ceil(dataLength / show);
  const arrayGoto = Array(numberPage).fill(0);
  const [page, setPage] = useState(1);
  function nextPage() {
    if (page < dataLength) setPage(() => page + show);
  }
  function prevPage() {
    if (page - show > 0) setPage(() => page - show);
  }
  // function gotoPage (go:number) {
  //   setPage(()=>(go-1)*show+1)
  // }
  return (
    <>
      <Head>
        <title>RF3i - Radio Frequency Team</title>
      </Head>
      <div className="mt-5 justify-center mx-20">
        {data.data.map((tex: any) => {
          if (tex.id < page || tex.id > page - 1 + show) {
            return <div key={tex.id}></div>;
          }
          return (
            <div key={tex.id} className="m-5 cursor-pointer">
              <Link href={`/RFteam/${tex.id}`}>
                <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>

                  <div className="ml-4">
                    <h2 className="font-semibold mt-2 text-sm text-gray-500">
                      {tex.id}
                    </h2>
                    <p className="mt-2 text-sm">{tex.name}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 bg-gray-100 px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={prevPage}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{page}</span> to{' '}
              <span className="font-medium">{page + show - 1}</span> of{' '}
              <span className="font-medium">{dataLength}</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                onClick={prevPage}
                className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}

              {arrayGoto.map((item, index) => {
                return (
                  <button
                    // onClick={gotoPage}
                    key={index + item}
                    className="relative z-10 inline-flex items-center z-10 border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                  >
                    {index + 1}
                  </button>
                );
              })}
              {/* <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                ...
              </span> */}
              <button
                onClick={nextPage}
                className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default RFteam;

interface Data {
  data: String[];
}

// interface getData {}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await res.json();
  const data: Data = result;
  return {
    props: {
      data,
    },
  };
};
