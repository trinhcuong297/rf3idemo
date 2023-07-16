import React, { useEffect, useState } from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import { useAppSelector } from '../../Redux/hooks';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `${process.env.RF3i_API}/rf3i-api/home/news/all?page=1&size=10`
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
export const getStaticProps: GetStaticProps = (context: any) => {
  const { id } = context.params;
  return {
    props: { id },
  };
};

export default function NewsDetail(id: any) {
  // const { data } = result.result;
  interface Data {
    html_content?: string | null;
    created_time?: String | undefined;
    created_user?: String | undefined;
    id?: String | null | undefined;
    title?: String | undefined;
    image_title_url?: string | undefined;
    image_title_name?: string | undefined;
  }
  const [data, setData] = useState<Data>({});
  const langSet = useAppSelector((state) => state.language.lang);
  useEffect(() => {
    fetch(
      `${process.env.RF3i_API}/rf3i-api/home/news/detail?news_id=${id.id}&lang=${langSet}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, [langSet]);
  return (
    <>
      <Head>
        <title>News - {data?.title ? data.title : ''}</title>
      </Head>
      <div className="p-5 mx-auto sm:p-10 md:p-16">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={data?.image_title_url ? data.image_title_url : ''}
            alt={data?.image_title_name ? data.image_title_name : ''}
            className="w-full h-60 sm:h-96"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-100 shadow-lg">
            <div className="space-y-2">
              <p className="inline-block text-2xl text-gray-900 font-semibold sm:text-3xl">
                {data?.title ? data.title : ''}
              </p>
              <p className="text-xs">
                By {data?.created_user ? data.created_user : ''} -{' '}
                {data?.created_time ? data.created_time : ''}
              </p>
            </div>
            <span className="text-gray-900">
              <html
                className="text-justify"
                dangerouslySetInnerHTML={{
                  __html: data?.html_content ? data?.html_content : '',
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
