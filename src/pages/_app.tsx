import { AppProps } from 'next/app';

import Navbar from '../component/navbar';
import '../styles/global.css';
import { Footer } from '../templates/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
