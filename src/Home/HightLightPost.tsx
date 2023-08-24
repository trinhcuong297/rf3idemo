import { useState, useEffect } from 'react';

import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { useAppSelector } from '../Redux/hooks';
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic';

export default function HightlightNews() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setLoading] = useState(false);
  const langSet = useAppSelector((state) => state.language.lang);

  interface Data {
    id?: String | null | undefined;
    image_title_url?: String | null | undefined;
    title?: String | null | undefined;
    sub_title?: String | null | undefined;
    created_time?: String | null | undefined;
  }

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.RF3i_API}/rf3i-api/home/news/main?limit=4&lang=${langSet}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, [langSet]);

  if (isLoading)
    return (
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <h3 className="flex items-center my-2">
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
          <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
            {langSet === 'VN' ? 'Tin tức' : 'News'}
          </span>
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
        </h3>
        <p className="w-full flex justify-center items-center">
          <div className="relative w-20 h-20 animate-pulse rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gray-200 rounded-full border-2 border-white">
              <img src="https://img.icons8.com/clouds/512/news.png" alt="" />
            </div>
          </div>
        </p>
      </div>
    );
  if (!data)
    return (
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <h3 className="flex items-center my-2">
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
          <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
            {langSet === 'VN' ? 'Tin tức' : 'News'}
          </span>
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
        </h3>
      </div>
    );
  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <div className="mx-auto max-w-2xl py-6 sm:py-12 lg:max-w-none lg:py-8">
          <h3 className="flex items-center my-2">
            <span
              aria-hidden="true"
              className="flex-grow bg-blue-200 rounded h-0.5"
            ></span>
            <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
              {langSet === 'VN' ? 'Tin tức' : 'News'}
            </span>
            <span
              aria-hidden="true"
              className="flex-grow bg-blue-200 rounded h-0.5"
            ></span>
          </h3>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mx-8 sm:mx-4 xl:mx-auto justify-center mt-8">
            <div className="flex flex-col px-2 pt-2 bg-gray-100 rounded-xl shadow-xl w-full md:max-w-xl overflow-hidden h-fit">
              <div className="flex-1 items-center mx-auto mt-2">
                <img
                  src={`${data[0] ? data[0].image_title_url : ''}`}
                  alt="Photo by charlesdeluvio on Unsplash"
                  className="rounded-xl"
                />
              </div>
              <div className="flex-1 px-4 sm:px-4 pt-3">
                <div className="flex flex-col sm:flex-row justify-between ">
                  <small className="text-sm text-gray-500 text-justify">
                    {`${data[0] ? data[0].created_time : ''}`}
                  </small>
                </div>
                <Link href={`/News/${data[0] ? data[0].id : ''}`}>
                  <h3 className="cursor-pointer text-black font-bold mt-2 text-justify">{`${
                    data[0] ? data[0].title : ''
                  }`}</h3>
                </Link>
                <p className="mt-5 text-gray-700 text-justify">{`${
                  data[0]?.sub_title ? data[0]?.sub_title : ''
                }`}</p>
                <div className="flex pt-6 items-center justify-end -mr-12 -mb-5">
                  <Link href={`/News/${data[0] ? data[0].id : ''}`}>
                    <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                      {langSet === 'VN' ? 'Xem thêm' : 'Read more'} &rarr;{' '}
                      <br />.
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-2 w-full md:max-w-xl">
              <div className="px-4 sm:px-8 pt-2 rounded-2xl w-full md:max-w-xl overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between ">
                  <small className="text-sm text-gray-600 text-justify">
                    {`${data[1]?.created_time || ''}`}
                  </small>
                </div>
                <Link href={`/News/${data[1] ? data[1].id : ''}`}>
                  <h3 className="cursor-pointer text-black font-bold mt-2 text-justify">
                    {data[1]?.title || ''}
                  </h3>
                </Link>
                <p className="mt-2 text-gray-700 text-justify">
                  {data[1]?.sub_title ? data[1]?.sub_title : ''}
                </p>
                <div className="flex items-center justify-end -mr-12 -mb-5">
                  <Link href={`/News/${data[1] ? data[1].id : ''}`}>
                    <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                      {langSet === 'VN' ? 'Xem thêm' : 'Read more'} &rarr;{' '}
                      <br />.
                    </button>
                  </Link>
                </div>
                <h3 className="flex items-center my-2">
                  <span
                    aria-hidden="true"
                    className="flex-grow bg-blue-200 rounded h-0.5"
                  ></span>
                </h3>
              </div>
              <div className="px-4 sm:px-8 pt-2 rounded-2xl w-full md:max-w-xl overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between ">
                  <small className="text-sm text-gray-600 text-justify">
                    {`${data[2]?.created_time || ''}`}
                  </small>
                </div>
                <Link href={`/News/${data[2] ? data[2].id : ''}`}>
                  <h3 className="cursor-pointer text-black font-bold mt-2 text-justify">
                    {data[2]?.title || ''}
                  </h3>
                </Link>
                <p className="mt-2 text-gray-700 text-justify">
                  {data[2]?.sub_title ? data[2]?.sub_title : ''}
                </p>
                <div className="flex items-center justify-end -mr-12 -mb-5">
                  <Link href={`/News/${data[2]?.id || ''}`}>
                    <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                      {langSet === 'VN' ? 'Xem thêm' : 'Read more'} &rarr;{' '}
                      <br />.
                    </button>
                  </Link>
                </div>
                <h3 className="flex items-center my-2">
                  <span
                    aria-hidden="true"
                    className="flex-grow bg-blue-200 rounded h-0.5"
                  ></span>
                </h3>
              </div>
              <div className="px-4 sm:px-8 pt-2 rounded-2xl w-full md:max-w-xl overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between ">
                  <small className="text-sm text-gray-600 text-justify">
                    {`${data[3]?.created_time || ''}`}
                  </small>
                </div>
                <Link href={`/News/${data[3] ? data[3].id : ''}`}>
                  <h3 className="cursor-pointer text-black font-bold mt-2 text-justify">
                    {data[3]?.title || ''}
                  </h3>
                </Link>
                <p className="mt-2 text-gray-700 text-justify">
                  {data[3]?.sub_title ? data[3]?.sub_title : ''}
                </p>
                <div className="flex items-center justify-end -mr-12 -mb-5">
                  <Link href={`/News/${data[3]?.id || ''}`}>
                    <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                      {langSet === 'VN' ? 'Xem thêm' : 'Read more'} &rarr;{' '}
                      <br />.
                    </button>
                  </Link>
                </div>
                <h3 className="flex items-center my-2">
                  <span
                    aria-hidden="true"
                    className="flex-grow bg-blue-200 rounded h-0.5"
                  ></span>
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row-reverse text-gray-600 hover:text-gray-700 font-bold items-center">
            <ArrowLongRightIcon
              className="mx-4 h-6 w-6 text-gray-600"
              aria-hidden="true"
            />
            <Link href="/News">
              {langSet === 'VN' ? 'Xem tất cả' : 'Show all'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AllNews() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setLoading] = useState(false);
  const langSet = useAppSelector((state) => state.language.lang);
  const loginSet = useAppSelector((state) => state.loginState.login);
  const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]
  const [post, setPost] = useState({
    title: '',
    date: '',
    createby: '',
    content: '',
  });
  interface Data {
    id?: String | null | undefined;
    image_title_url?: String | null | undefined;
    title?: String | null | undefined;
    sub_title?: String | null | undefined;
    created_time?: String | null | undefined;
  }

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.RF3i_API}/rf3i-api/home/news/all?page=1&size=5&lang=${langSet}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, [langSet]);

  if (isLoading)
    return (
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <h3 className="flex items-center my-2">
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
          <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
            {langSet === 'VN' ? 'Tin tức' : 'News'}
          </span>
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
        </h3>

        <p className="w-full flex justify-center items-center">
          <div className="relative w-20 h-20 animate-pulse rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gray-200 rounded-full border-2 border-white">
              <img src="https://img.icons8.com/clouds/512/news.png" alt="" />
            </div>
          </div>
        </p>
      </div>
    );
  if (!data)
    return (
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <h3 className="flex items-center my-2">
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
          <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
            {langSet === 'VN' ? 'Tin tức' : 'News'}
          </span>
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
        </h3>
      </div>
    );
  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16">
          <h3 className="flex items-center my-2">
            <span
              aria-hidden="true"
              className="flex-grow bg-blue-200 rounded h-0.5"
            ></span>
            <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
              {langSet === 'VN' ? 'Tin tức' : 'News'}
            </span>
            <span
              aria-hidden="true"
              className="flex-grow bg-blue-200 rounded h-0.5"
            ></span>
          </h3>
          <div>
            {loginSet ? <>
              <div className="">
                <textarea
                  required={true}
                  value={post.title}
                  rows={1}
                  placeholder={"Post title"}
                  onChange={(e) => {
                    setPost({ ...post, title: e.target.value });
                  }}
                  className="text-gray-700 input input-bordered bg-gray-100/0 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                ></textarea>
              </div>
              <div className="">
                <textarea
                  required={true}
                  value={post.date}
                  rows={1}
                  placeholder={"Created time: DD-MM-YYYY"}
                  onChange={(e) => {
                    setPost({ ...post, date: e.target.value });
                  }}
                  className="text-gray-700 input input-bordered bg-gray-100/0 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                ></textarea>
              </div>
              <div className="">
                <textarea
                  required={true}
                  value={post.createby}
                  rows={1}
                  placeholder={"Author"}
                  onChange={(e) => {
                    setPost({ ...post, createby: e.target.value });
                  }}
                  className="text-gray-700 input input-bordered bg-gray-100/0 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                ></textarea>
              </div>
              <QuillNoSSRWrapper modules={modules} placeholder='copy/paste here' value={post.content} onChange={(e) => setPost({ ...post, content: e })} formats={formats} theme="snow" />
              <button className="btn btn-outline btn-success w-full mt-2">Post</button>
            </>:<></>}
      </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mx-8 sm:mx-4 xl:mx-auto justify-center mt-8">
            <div className="flex flex-col px-2 pt-2 bg-gray-100 rounded-xl shadow-xl w-full md:max-w-xl overflow-hidden h-fit">
              <div className="flex-1 items-center mx-auto mt-2">
                <img
                  src={`${data[0]?.image_title_url || ''}`}
                  alt="Photo by charlesdeluvio on Unsplash"
                  className="rounded-xl"
                />
              </div>
              <div className="flex-1 px-4 sm:px-4 pt-3">
                <div className="flex flex-col sm:flex-row justify-between ">
                  <small className="text-sm text-gray-500 text-justify">
                    {`${data[0]?.created_time || ''}`}
                  </small>
                  
                  {loginSet ? 
                    <>
                      <button className="badge badge-secondary badge-outline">Delete</button>
                    </> : <></>}
                </div>
                <Link href={`/News/${data[0] ? data[0].id : ''}`}>
                  <h3 className="cursor-pointer text-black font-bold mt-2 text-justify">{`${
                    data[0]?.title || ''
                  }`}</h3>
                </Link>
                <p className="mt-5 text-gray-700 text-justify">{`${
                  data[0]?.sub_title ? data[0]?.sub_title : ''
                }`}</p>
                <div className="flex pt-6 items-center justify-end -mr-12 -mb-2">
                  <Link href={`/News/${data[0]?.id || ''}`}>
                    <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                      {langSet === 'VN' ? 'Xem thêm' : 'Read more'} &rarr;{' '}
                      <br />.
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-2 w-full md:max-w-xl space-y-4">
              <div className="px-4 sm:px-8 pt-1 rounded-2xl w-full md:max-w-xl overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between ">
                  <small className="text-sm text-gray-600 text-justify">
                    {`${data[1]?.created_time || ''}`}
                  </small>
                  {loginSet ? 
                    <>
                      <button className="badge badge-secondary badge-outline">Delete</button>
                    </> : <></>}
                </div>
                <Link href={`/News/${data[1]?.id || ''}`}>
                  <h3 className="cursor-pointer text-black font-bold mt-2 text-justify">
                    {data[1]?.title || ''}
                  </h3>
                </Link>
                <p className="mt-2 text-gray-700 text-justify">
                  {data[1]?.sub_title ? data[1]?.sub_title : ''}
                </p>
                <div className="flex items-center justify-end -mr-12 -mb-2">
                  <Link href={`/News/${data[1]?.id || ''}`}>
                    <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                      {langSet === 'VN' ? 'Xem thêm' : 'Read more'} &rarr;{' '}
                      <br />.
                    </button>
                  </Link>
                </div>
                <h3 className="flex items-center my-2">
                  <span
                    aria-hidden="true"
                    className="flex-grow bg-blue-200 rounded h-0.5"
                  ></span>
                </h3>
              </div>
              <div className="px-4 sm:px-8 pt-1 rounded-2xl w-full md:max-w-xl overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between ">
                  <small className="text-sm text-gray-600 text-justify">
                    {`${data[2]?.created_time || ''}`}
                  </small>
                  {loginSet ? 
                    <>
                      <button className="badge badge-secondary badge-outline">Delete</button>
                    </> : <></>}
                </div>
                <Link href={`/News/${data[2]?.id || ''}`}>
                  <h3 className="cursor-pointer text-black font-bold mt-2 text-justify">
                    {data[2]?.title || ''}
                  </h3>
                </Link>
                <p className="mt-2 text-gray-700 text-justify">
                  {data[2]?.sub_title ? data[2]?.sub_title : ''}
                </p>
                <div className="flex items-center justify-end -mr-12 -mb-2">
                  <Link href={`/News/${data[2]?.id || ''}`}>
                    <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                      {langSet === 'VN' ? 'Xem thêm' : 'Read more'} &rarr;{' '}
                      <br />.
                    </button>
                  </Link>
                </div>
                <h3 className="flex items-center my-2">
                  <span
                    aria-hidden="true"
                    className="flex-grow bg-blue-200 rounded h-0.5"
                  ></span>
                </h3>
              </div>
              <div className="px-4 sm:px-8 pt-1 rounded-2xl w-full md:max-w-xl overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between ">
                  <small className="text-sm text-gray-600 text-justify">
                    {`${data[3]?.created_time || ''}`}
                  </small>
                  {loginSet ? 
                    <>
                      <button className="badge badge-secondary badge-outline">Delete</button>
                    </> : <></>}
                </div>
                <Link href={`/News/${data[3]?.id || ''}`}>
                  <h3 className="cursor-pointer text-black font-bold mt-2 text-justify">
                    {data[3]?.title || ''}
                  </h3>
                </Link>
                <p className="mt-2 text-gray-700 text-justify">
                  {data[3]?.sub_title ? data[3]?.sub_title : ''}
                </p>
                <div className="flex items-center justify-end -mr-12 -mb-5">
                  <Link href={`/News/${data[3]?.id || ''}`}>
                    <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                      {langSet === 'VN' ? 'Xem thêm' : 'Read more'} &rarr;{' '}
                      <br />.
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded w-full py-7 px-5">
            <h3 className="flex items-center my-2">
              <span
                aria-hidden="true"
                className="flex-grow bg-blue-200 rounded h-0.5"
              ></span>
            </h3>
            {data.slice(4).map((param, index) => {
              return (
                <Link href={`/News/${param?.id}`} key={index}>
                  <div className="grid grid-cols-6">
                    <div className="col-span-2 p-4">
                      <img
                        src={`${param?.image_title_url}`}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="col-span-4 px-4 flex items-center">
                      <div className="w-full">
                        <p className=" flex text-sm text-gray-600 pb-2 text-justify">
                          {`${param?.created_time || ''}`}
                          {loginSet ? 
                    <>
                      <button className="badge badge-secondary badge-outline mx-5">Delete</button>
                    </> : <></>}
                        </p>
                        <p className="text-gray-700 font-bold text-justify">
                          {param?.title}
                        </p>
                        <p className="text-gray-500 mt-4 text-justify">
                          {param?.sub_title ? param?.sub_title : ''}
                        </p>
                        <div className="flex pt-6 items-center justify-end">
                          <Link href={`/News/${param?.id || ''}`}>
                            <button className="text-sm pr-10 pl-4 py-2 text-gray-600 hover:text-gray-700 rounded-tl-xl font-semibold">
                              {langSet === 'VN' ? 'Xem thêm' : 'Read more'}{' '}
                              &rarr; <br />.
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <h3 className="flex items-center my-2 w-full col-span-6">
                      <span
                        aria-hidden="true"
                        className="flex-grow bg-blue-200 rounded h-0.5"
                      ></span>
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
