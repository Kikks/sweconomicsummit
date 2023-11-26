import '../styles/index.css';

import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import { toastOptions } from '../utils/toastConfig';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster position="top-right" toastOptions={toastOptions} />
    </>
  );
}
