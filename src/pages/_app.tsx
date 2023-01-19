import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import { Footer } from '../Home/Footer';
import Navbar from '../Navbar/navbar';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <NextNProgress options={{ showSpinner: false }} />
    <div className="bg-gray-100">
      <div className="z-10 fixed w-screen top-0">
        <Navbar />
      </div>
      {/* <div className="fixed left-0 hidden md:block z-10">
        <Sidebar />
      </div> */}
      <div className="bg-gray-100 pt-[3.5rem]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  </>
);

export default MyApp;
