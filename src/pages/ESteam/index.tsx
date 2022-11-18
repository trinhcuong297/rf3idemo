import React from 'react';

import { SparklesIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';

const ESteam = () => {
  return (
    <>
      <Head>
        <title>RF3i - Embedded System team</title>
      </Head>
      <div className="flex items-center justify-center">
        <SparklesIcon
          className="text-red-400 mx-4 h-10 w-10"
          aria-hidden="true"
        />
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-red-400 to-blue-600">
          Our publication
        </h2>
        <SparklesIcon
          className="text-indigo-600 mx-4 h-10 w-10"
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-wrap justify-center mt-5">
        <div className="overflow-x-auto h-screen w-full flex justify-center">
          <table className="table table-zebra w-9/12 my-8 overflow-y-auto">
            <thead>
              <tr>
                <th>
                  <label>
                    {/* <input type="checkbox" className="checkbox" /> */}
                  </label>
                  Time
                </th>
                <th>Name</th>
                <th>Paper</th>
                <th>Team</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="overflow-y-auto h-96">
              <tr>
                <th>
                  {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
                  <p className="font-thin font-sans italic text-xs">
                    18/11/2020
                  </p>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://placeimg.com/192/192/people"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    details &rarr;
                  </button>
                </th>
              </tr>

              <tr>
                <th>
                  {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
                  <p className="font-thin font-sans italic text-xs">
                    18/11/2020
                  </p>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://placeimg.com/192/192/people"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </td>
                <td>
                  Carroll Group
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Tax Accountant
                  </span>
                </td>
                <td>Red</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    details &rarr;
                  </button>
                </th>
              </tr>

              <tr>
                <th>
                  {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
                  <p className="font-thin font-sans italic text-xs">
                    18/11/2020
                  </p>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://placeimg.com/192/192/people"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                      <div className="text-sm opacity-50">Russia</div>
                    </div>
                  </div>
                </td>
                <td>
                  Rowe-Schoen
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Office Assistant I
                  </span>
                </td>
                <td>Crimson</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    details &rarr;
                  </button>
                </th>
              </tr>

              <tr>
                <th>
                  {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
                  <p className="font-thin font-sans italic text-xs">
                    18/11/2020
                  </p>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://placeimg.com/192/192/people"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                  Wyman-Ledner
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Community Outreach Specialist
                  </span>
                </td>
                <td>Indigo</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    details &rarr;
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        {/* {data.data.map((tex: any) => {
          return (
            <div key={tex.id}>
              <div className="flex justify-center items-center m-4">
                <div className="stack h-56 w-72 relative ">
                  <div className="cursor-pointer w-full h-full bg-rose-400 rounded-lg shadow-[0_0_8px_-4px_rgba(0,0,0,1)] z-30">
                    <div className="flex w-full h-full bg-gray-100 py-2 justify-center">
                      <div className="flex flex-col justify-center gap-1">
                        <div className="flex flex-row justify-center">
                          <h1 className="text-gray-600 text-lg text-center font-bold">
                            {tex.setup}
                          </h1>
                        </div>
                        <div className="flex flex-row justify-center">
                          <h1 className="text-sky-600 text-lg text-center font-bold">
                            {tex.punchline}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </>
  );
};

export default ESteam;

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch('https://official-joke-api.appspot.com/jokes/ten');
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };
