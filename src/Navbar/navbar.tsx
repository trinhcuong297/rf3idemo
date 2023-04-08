import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Logo } from '../Home/Logo';

export default function Navbar() {
  const [show, setShow] = useState(false);
  const router = useRouter().asPath;
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true);
      else setShow(false);
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <>
      <nav
        id="header"
        className={`${
          !show ? '' : 'bg-gray-100 drop-shadow-sm'
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
              className="flex items-center p-1 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
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
            <ul className="lg:flex justify-end w-full items-center">
              <div
                className="search-form flex items-center w-max mx-auto
                transform duration-500 transition-all"
              >
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="input w-full input-bordered bg-transparent outline-0 border-blue-200 focus:outline-none focus:border-gray-200 focus:shadow-md focus:bg-white w-full"
                  />
                </div>
              </div>
              <li className="mr-3">
                <Link href={'/'}>
                  <p
                    className={`${
                      router === '/' ? 'underline' : ''
                    } cursor-pointer inline-block py-2 px-4 text-md underline-offset-4 duration-300 hover:underline-offset-8 hover:text-black font-medium hover:underline`}
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li className="mr-3">
                <Link href={'/News'}>
                  <p
                    className={`${
                      router === '/News' ? 'underline' : ''
                    } cursor-pointer inline-block py-2 px-4 text-md underline-offset-4 duration-300 hover:underline-offset-8 hover:text-black font-medium hover:underline`}
                  >
                    News
                  </p>
                </Link>
              </li>
              <li className="mr-3">
                <Link href={'/AboutUs'}>
                  <p
                    className={`${
                      router === '/AboutUs' ? 'underline' : ''
                    } cursor-pointer inline-block py-2 px-4 text-md underline-offset-4 duration-300 hover:underline-offset-8 hover:text-black font-medium hover:underline`}
                  >
                    About us
                  </p>
                </Link>
              </li>
              <li className="mr-3">
                <Link href={'/Publication'}>
                  <p
                    className={`${
                      router === '/Publication' ? 'underline' : ''
                    } cursor-pointer inline-block py-2 px-4 text-md underline-offset-4 duration-300 hover:underline-offset-8 hover:text-black font-medium hover:underline`}
                  >
                    Publication
                  </p>
                </Link>
              </li>
              <li className="mr-3">
                <Link href={'/Product'}>
                  <p
                    className={`${
                      router === '/Product' ? 'underline' : ''
                    } cursor-pointer inline-block py-2 px-4 text-md underline-offset-4 duration-300 hover:underline-offset-8 hover:text-black font-medium hover:underline `}
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
      </nav>
    </>
  );
}
