import { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

export default function Publication() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setLoading] = useState(false);

  interface Data {
    title?: String | null | undefined;
    authors?: String | null | undefined;
    publisher?: String | null | undefined;
    published_in?: String | null | undefined;
    published_date?: String | null | undefined;
    url?: String | null | undefined;
  }

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.RF3i_API}/rf3i-api/publication/all-publication?page=1&size=8`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <section id="ourMember" className=" bg-gray-200 rounded-2xl p-4 m-4">
        <div className="flex items-center justify-center mt-6">
          <h2 className="text-4xl font-extrabold pt-4 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-blue-400">
            RF3i Publication
          </h2>
        </div>
        <p className="w-full flex justify-center items-center">
          <div className="relative w-20 h-20 animate-pulse rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gray-200 rounded-full border-2 border-white">
              <img src="https://img.icons8.com/clouds/2x/group.png" alt="" />
            </div>
          </div>
        </p>
      </section>
    );
  if (!data)
    return (
      <section id="ourMember" className=" bg-gray-200 rounded-2xl p-4 m-4">
        <div className="flex items-center justify-center mt-6">
          <h2 className="text-4xl font-extrabold pt-4 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-blue-400">
            RF3i Publication
          </h2>
        </div>
      </section>
    );
  return (
    <>
      <Head>
        <title>RF3i - Publication</title>
      </Head>
      <div className="min-h-screen">
        <div className="items-center w-full px-4 py-4 mx-auto my-10 bg-white rounded-lg shadow-lg sm:w-2/3">
          <div className="container mx-auto">
            <div className="flex items-center justify-between w-full px-4 py-2">
              <div className="text-2xl font-bold text-blue-500">
                Publication
              </div>
              <div className="px-2 py-2 text-white rounded-md">
                <img
                  src="https://img.icons8.com/clouds/2x/filled-star.png"
                  className="w-12 h-12"
                ></img>
              </div>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border border-collapse table-auto">
                <thead className="">
                  <tr className="text-base font-bold text-left bg-gray-50 grid grid-cols-12">
                    <th className="text-gray-700 px-4 py-3 border-b-2 border-blue-500 col-span-4">
                      Title
                    </th>
                    <th className="text-gray-700 px-4 py-3 text-center border-b-2 border-sky-500 sm:text-left col-span-3">
                      Author
                    </th>
                    <th className="text-gray-700 px-4 py-3 text-center border-b-2 border-cyan-500 sm:text-left col-span-2">
                      Published in
                    </th>
                    <th className="text-gray-700 px-4 py-3 text-center border-b-2 border-cyan-500 sm:text-left col-span-2">
                      Published Date
                    </th>
                    <th className="text-gray-700 px-4 py-3 text-center border-b-2 border-cyan-500 sm:text-left col-span-1">
                      Download
                    </th>
                  </tr>
                </thead>

                {data.map((param, key) => {
                  return (
                    <tbody
                      className="text-sm font-normal text-gray-700"
                      key={key}
                    >
                      <tr className="py-1 border-b border-gray-200 hover:bg-gray-100 grid grid-cols-12">
                        <td className="flex flex-row items-center px-4 py-2 col-span-4">
                          <p className="font-medium">{param.title}</p>
                        </td>
                        <td className="flex flex-row items-center sm:text-left px-4 col-span-3">
                          <div className="flex-1 sm:text-left">
                            <div className="">{param.authors}</div>
                          </div>
                        </td>
                        <td className="flex flex-row items-center px-4 text-center sm:text-left col-span-2">
                          {param.published_in}
                        </td>
                        <td className="flex flex-row items-center px-4 text-center sm:text-left col-span-2">
                          {param.published_date}
                        </td>
                        <td className="flex items-center px-4 text-center sm:text-left col-span-1">
                          <Link href={`${param.url}`}>
                            <a target="_blank" rel="noopener noreferrer">
                              <img
                                src="https://img.icons8.com/clouds/2x/external-link.png"
                                className="w-10 h-10 cursor-pointer"
                              />
                            </a>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
            <div className="flex flex-col items-center w-full px-4 py-2 space-y-2 text-sm text-gray-500 sm:justify-between sm:space-y-0 sm:flex-row">
              {/* <p className="flex">
                Showing&nbsp;<span className="font-bold"> 1 to 4 </span>&nbsp;of
                8 entries
              </p> */}
              {/* <div className="flex items-center justify-between space-x-2">
      <a href="#" className="hover:text-gray-600">Previous</a>
      <div className="flex flex-row space-x-1">
        <div className="flex px-2 py-px text-white bg-blue-400 border border-blue-400 rounded-md">1</div>
        <div className="flex px-2 py-px border border-blue-400 hover:bg-blue-400 hover:text-white rounded-md">2</div>
      </div>
      <a href="#" className="hover:text-gray-600">Next</a>
    </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
