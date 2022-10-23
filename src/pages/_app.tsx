import { AppProps } from 'next/app';

import Navbar from '../component/navbar';
import '../styles/global.css';
import { Footer } from '../templates/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <div className="w-screen fixed top-0 lg:min-h-24 z-10">
      <Navbar />
    </div>
    <div className="mt-28">
      <Component {...pageProps} />
    </div>
    <Footer />
  </>
);

export default MyApp;
