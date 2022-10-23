import React from 'react';

import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const RFteam = (data: Data) => {
  return (
    <>
      <Head>
        <title>RF3i - Radio Frequency Team</title>
      </Head>
      <div className="mt-5 flex flex-wrap justify-center">
        {data.data.map((tex: any) => {
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
