import { AppProps } from 'next/app';

import Navbar from '../component/navbar';
import '../styles/global.css';
import { Footer } from '../Home/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <div className="bg-gray-100">
      <div className="z-10 fixed w-screen top-0">
        <Navbar />
      </div>
      {/* <div className="fixed left-0 hidden md:block z-10">
        <Sidebar />
      </div> */}
      <div className="bg-gray-100 pt-[4rem]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  </>
);

export default MyApp;
