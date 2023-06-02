import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.RF3i_API}/rf3i-api/product/all`);
  const resdev = await res.json();
  const result: String[] = resdev.data;
  const paths = result.map((tex: any) => {
    return {
      params: {
        id: tex.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context: any) => {
  const { id } = context.params;
  const res = await fetch(
    `${process.env.RF3i_API}/rf3i-api/product/detail?product_id=${id}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
};

export default function ProductDetail(context: any) {
  const { data } = context.data;
  console.log(data);
  return (
    <>
      <Head>
        <title>Product - {data.product_name}</title>
      </Head>
      <div className="px-5 mx-auto sm:px-10 md:px-16">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="grid gap-4 sm:gap-6 lg:gap-8">
            <img
              src={data.product_image_urls[0]}
              alt=""
              className="rounded-lg bg-gray-100 shadow-lg"
            />
          </div>
          <div>
            <div className="badge">{data.product_type}</div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data.product_name}
            </h2>
            <i>{data.project_member}</i>
            <p className="mt-4 text-gray-500">{data.product_description}</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Parameter</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {data.product_parameters.map((e: any) => (
                    <p key={e}>{e}</p>
                  ))}
                </dd>
              </div>
            </dl>
            <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:gap-y-8 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Main components</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {data.main_components.map((e: any) => (
                    <p key={e}>{e}</p>
                  ))}
                </dd>
              </div>
            </dl>
            <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:gap-y-8 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Contribution</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {data.product_contribution.map((e: any) => (
                    <p key={e}>{e}</p>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
