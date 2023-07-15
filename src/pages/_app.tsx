import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';

import { Footer } from '../Home/Footer';
import Navbar from '../Navbar/navbar';
import '../styles/global.css';
import store from '../Redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNProgress options={{ showSpinner: false }} />
      <Provider store={store}>
        <div className="bg-gray-100">
          <div className="z-10 fixed w-screen top-0">
            <Navbar />
          </div>
          <div className="bg-gray-100">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </Provider>
    </>
  );
};

export default MyApp;
