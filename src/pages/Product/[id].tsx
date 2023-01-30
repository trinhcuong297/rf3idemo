import React from 'react';

import Head from 'next/head';

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(
//     `${process.env.RF3i_API}/rf3i-api/home/product/all?page=1&size=5`
//   );
//   const resdev = await res.json();
//   const result: String[] = resdev.data;
//   const paths = result.map((tex: any) => {
//     return {
//       params: {
//         id: tex.id.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };
// export const getStaticProps: GetStaticProps = async (context: any) => {
//   const { id } = context.params;
//   const res = await fetch(
//     `${process.env.RF3i_API}/rf3i-api/home/product/detail?product_id=${id}`
//   );
//   const result = await res.json();
//   return {
//     props: { result },
//   };
// };

export default function ProductDetail() {
  // const { Data } = result.result;
  const data = {
    title: 'Prod',
    description: 'sadfasdfadfasdasdf',
    title_iamge_url:
      'https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg',
    feature: [
      { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
      {
        name: 'Material',
        description:
          'Solid walnut base with rare earth magnets and powder coated steel card cover',
      },
      { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
      {
        name: 'Finish',
        description: 'Hand sanded and finished with natural oil',
      },
      { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
      {
        name: 'Considerations',
        description:
          'Made from natural materials. Grain and color vary with each item.',
      },
    ],
  };
  return (
    <>
      <Head>
        <title>Product - {data.title}</title>
      </Head>
      <div className="px-5 mx-auto sm:px-10 md:px-16">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="grid gap-4 sm:gap-6 lg:gap-8">
            <img
              src={data.title_iamge_url}
              alt=""
              className="rounded-lg bg-gray-100 shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data.title}
            </h2>
            <p className="mt-4 text-gray-500">{data.description}</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {data.feature.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
