import React from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';

import { Button } from '../../button/Button';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await res.json();
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
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const result = await res.json();
  return {
    props: { result },
  };
};

const Detail = (result: any) => {
  return (
    <>
      <div className="p-10 bg-gray-100 h-max">
        <h1 className="text-xl">Name: {result.result.name}</h1>
        <h2>Email: {result.result.email}</h2>
        <Link href={'/RFteam'}>
          <div className="cursor-pointer w-fit">
            <Button xl={true}>Go back</Button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Detail;
