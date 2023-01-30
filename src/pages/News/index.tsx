import Head from 'next/head';

import { AllNews } from '../../Home/HightLightPost';

const News = () => {
  return (
    <>
      <Head>
        <title>RF3i - News</title>
      </Head>
      <AllNews />
    </>
  );
};

export default News;
