import { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const AboutUsList = [
    ['Introduction', '/link'],
    ['Researcher Leader', '/link'],
    ['Our Member', '/member'],
    ['Alumi', '/alumi'],
  ];
  const PublicationList = [
    ['RF Team', '/rf'],
    ['ES Team', '/es'],
  ];
  const ProductList = [
    ['RF Team', '/rf'],
    ['ES Team', '/es'],
  ];
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-8">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li className="inline-flex w-full justify-center items-center">
            <Link href="/">
              <a className="text-gray-800 text-lg">Home</a>
            </Link>
          </li>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="aboutus inline-flex inline w-max text-gray-800 text-lg justify-center items-center rounded-md px-4 py-2 font-medium hover:bg-gray-50 ">
                About us
                <ChevronDownIcon
                  className="mr-1 ml-1 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-50"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {AboutUsList.map((item, index) => {
                    return (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <a
                            href={item[1]}
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {item[0]}
                          </a>
                        )}
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex inline w-max text-gray-800 text-lg justify-center items-center rounded-md px-4 py-2 font-medium hover:bg-gray-50 ">
                Publication
                <ChevronDownIcon
                  className="mr-1 ml-1 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {PublicationList.map((item, index) => {
                    return (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <a
                            href={item[1]}
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {item[0]}
                          </a>
                        )}
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex inline w-max text-gray-800 text-lg justify-center items-center rounded-md px-4 py-2 font-medium hover:bg-gray-50 ">
                Product
                <ChevronDownIcon
                  className="mr-1 ml-1 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {ProductList.map((item, index) => {
                    return (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <a
                            href={item[1]}
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {item[0]}
                          </a>
                        )}
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <li className="inline-flex w-full justify-center items-center">
            <Link href="/">
              <a className="text-gray-800 text-lg inline w-max">Contact Us</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>
    </Background>
  );
}
