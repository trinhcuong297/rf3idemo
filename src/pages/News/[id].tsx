import React from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${process.env.RF3i_API}/rf3i-api/home/news/all?page=1&size=5`
  );
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
    `${process.env.RF3i_API}/rf3i-api/home/news/detail?news_id=${id}`
  );
  const result = await res.json();
  return {
    props: { result },
  };
};

export default function NewsDetail(result: any) {
  const { data } = result.result;
  return (
    <>
      <Head>
        <title>News - {data.title}</title>
      </Head>
      <div className="p-5 mx-auto sm:p-10 md:p-16">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={data.image_title_url}
            alt={data.image_title_name}
            className="w-full h-60 sm:h-96"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-100 shadow-lg">
            <div className="space-y-2">
              <p className="inline-block text-2xl text-gray-900 font-semibold sm:text-3xl">
                {data.title}
              </p>
              <p className="text-xs">
                By {data.created_user} - {data.created_time}
              </p>
            </div>
            <span className="text-gray-900">{data.html_content}</span>
          </div>
        </div>
      </div>
    </>
  );
}
