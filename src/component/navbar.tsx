import { useState } from 'react';

import Link from 'next/link';
// import smoothscroll from 'smoothscroll-polyfill';

import { Logo } from '../Home/Logo';

export default function Navbar() {
  // const [show, setShow] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  // useEffect(() => {
  //   smoothscroll.polyfill();
  //   const handleWindowScroll = () => {
  //     if (window.scrollY > 50) setShow(true);
  //     else setShow(false);
  //   };

  //   window.addEventListener('scroll', handleWindowScroll);
  //   return () => window.removeEventListener('scroll', handleWindowScroll);
  // }, []);

  return (
    <>
      <nav
        id="header"
        className={`${
          true ? 'bg-gray-100' : ''
        } fixed w-full z-30 top-0 text-white`}
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
          <div className="pl-4 flex items-center">
            <Link href={'/'}>
              <p className="flex justify-center items-center">
                <Logo xl />
              </p>
            </Link>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              onClick={() => {
                setToggleNav(!toggleNav);
              }}
              id="nav-toggle"
              className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`${
              toggleNav ? '' : 'hidden'
            } w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20`}
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <Link href={'/'}>
                  <p
                    className={`cursor-pointer inline-block py-2 px-4 text-md text-gray-700 hover:text-black font-medium no-underline hover:underline underline-offset-8`}
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li className="mr-3">
                <Link href={'/AboutUs'}>
                  <p
                    className={`cursor-pointer inline-block py-2 px-4 text-md text-gray-700 hover:text-black font-medium no-underline hover:underline underline-offset-8`}
                  >
                    About us
                  </p>
                </Link>
              </li>
              <li className="mr-3">
                <Link href={'/ESteam/index'}>
                  <p
                    className={`cursor-pointer inline-block py-2 px-4 text-md text-gray-700 hover:text-black font-medium no-underline hover:underline underline-offset-8`}
                  >
                    Publication
                  </p>
                </Link>
              </li>
              <li className="mr-3">
                <Link href={'/ESteam/product'}>
                  <p
                    className={`cursor-pointer inline-block py-2 px-4 text-md text-gray-700 hover:text-black font-medium no-underline hover:underline underline-offset-8`}
                  >
                    Product
                  </p>
                </Link>
              </li>
              <li className="mr-3">
                <Link href="/Contact">
                  <p
                    className={`${
                      true
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-100'
                        : ' bg-white text-black'
                    } mx-auto cursor-pointer lg:mx-0 text-md font-bold rounded-full mt-4 lg:mt-0 py-2 px-4 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}
                  >
                    Contact us
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <hr className="border-b border-gray-100 opacity-25 my-0 py-0 drop-shadow-md" /> */}
      </nav>
    </>
  );
}
