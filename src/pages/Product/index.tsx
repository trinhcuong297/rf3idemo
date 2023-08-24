import { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAppSelector } from '../../Redux/hooks';

export default function Product() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setLoading] = useState(false);
  const langSet = useAppSelector((state) => state.language.lang);
  const loginSet = useAppSelector((state) => state.loginState.login);
  const router = useRouter();

  interface Data {
    id?: String | null | undefined;
    product_image_url?: String | null | undefined;
    product_name?: String | null | undefined;
    product_type?: String | null | undefined;
    product_description?: String | null | undefined;
  }

  const [post, setPost] = useState({
    product_name:"",
    title:"",
    product_type:"",
    project_member:"",
    product_description:"",
    product_parameters:"",
    main_components:"",
    product_contribution:"",
    product_image_urls:"",
  });

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.RF3i_API}/rf3i-api/product/all?lang=${langSet}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, [langSet]);

  if (isLoading)
    return (
      <div className="mx-auto max-w-2xl px-6 lg:px-16 py-8 sm:py-12 lg:max-w-none lg:py-16 mx-auto max-w-7xl px-4 md:px-12 lg:px-24">
        <h3 className="flex items-center my-2">
          <span
            aria-hidden="true"
            className="flex-grow bg-blue-200 rounded h-0.5"
          ></span>
          <span className="inline-block px-4 py-1 text-5xl font-bold text-center text-blue-500  rounded-full">
            {langSet === 'VN' ? 'Sản phẩm' : 'Product'}
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
        <title>RF3i - {langSet === 'VN' ? 'Sản phẩm' : 'Product'}</title>
      </Head>
      {loginSet ? <div className='mx-5 md:mx-12 lg:mt-24'>
        <h1>Add Product</h1>
        <div className="">
          <textarea
            required={true}
            value={post.product_name}
            rows={1}
            placeholder={"product_name"}
            onChange={(e) => {
              setPost({ ...post, product_name: e.target.value });
            }}
            className="text-gray-700 input input-bordered bg-gray-100 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          ></textarea>
        </div>
        <div className="">
          <textarea
            required={true}
            value={post.title}
            rows={1}
            placeholder={"title"}
            onChange={(e) => {
              setPost({ ...post, title: e.target.value });
            }}
            className="text-gray-700 input input-bordered bg-gray-100 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          ></textarea>
        </div>
        <div className="">
          <textarea
            required={true}
            value={post.product_type}
            rows={1}
            placeholder={"product_type"}
            onChange={(e) => {
              setPost({ ...post, product_type: e.target.value });
            }}
            className="text-gray-700 input input-bordered bg-gray-100 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          ></textarea>
        </div>
        <div className="">
          <textarea
            required={true}
            value={post.project_member}
            rows={1}
            placeholder={"Author"}
            onChange={(e) => {
              setPost({ ...post, project_member: e.target.value });
            }}
            className="text-gray-700 input input-bordered bg-gray-100 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          ></textarea>
        </div>
        <div className="">
          <textarea
            required={true}
            value={post.product_description}
            rows={1}
            placeholder={"product_description"}
            onChange={(e) => {
              setPost({ ...post, product_description: e.target.value });
            }}
            className="text-gray-700 input input-bordered bg-gray-100 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          ></textarea>
        </div>
        <div className="">
          <textarea
            required={true}
            value={post.product_parameters}
            rows={1}
            placeholder={"product_parameters"}
            onChange={(e) => {
              setPost({ ...post, product_parameters: e.target.value });
            }}
            className="text-gray-700 input input-bordered bg-gray-100 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          ></textarea>
        </div>
        <div className="">
          <textarea
            required={true}
            value={post.main_components}
            rows={1}
            placeholder={"main_components"}
            onChange={(e) => {
              setPost({ ...post, main_components: e.target.value });
            }}
            className="text-gray-700 input input-bordered bg-gray-100 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          ></textarea>
        </div>
        <div className="">
          <textarea
            required={true}
            value={post.product_contribution}
            rows={1}
            placeholder={"product_contribution"}
            onChange={(e) => {
              setPost({ ...post, product_contribution: e.target.value });
            }}
            className="text-gray-700 input input-bordered bg-gray-100 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          ></textarea>
        </div>
        <div className="">
          <textarea
            required={true}
            value={post.product_image_urls}
            rows={1}
            placeholder={"product_image_urls"}
            onChange={(e) => {
              setPost({ ...post, product_image_urls: e.target.value });
            }}
            className="text-gray-700 input input-bordered bg-gray-100 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
          ></textarea>
        </div>
        <button className="btn btn-outline btn-success w-full mt-2 mb-4">Post</button>
      </div> : <></>}
      <div className="bg-gray-200 lg:pt-12">
        <div className="mx-auto px-4 md:px-12 lg:px-24 py-12">
          <div className="grid md:grid-cols-3 gap-4 justify-items-center min-w-full">
            {data.map((data, index) => {
              return (
                <div
                  className="relative flex w-full h-full justify-between max-w-[30rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
                  key={index}
                >
                  <div className="h-96 flex items-center relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                      src={`${
                        data.product_image_url
                          ? data.product_image_url
                          : `${router.basePath}/favicon.ico`
                      }`}
                      alt="ui/ux review check"
                      className="h-fit"
                    />
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
                    <p className="truncate block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
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
                        {langSet === 'VN' ? 'Xem chi tiết' : 'More detail'}
                      </button>
                    </Link>
                  </div>
                  {loginSet ? <div className="p-6 pt-3">
                    <Link href={`/Product/${data.id}`}>
                      <button
                        className="block w-full select-none rounded-lg bg-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                      >
                        Delete
                      </button>
                    </Link>
                  </div> : <></>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
