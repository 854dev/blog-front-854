import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.css';
import MainLayout from '../layouts/MainLayout';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // prefers-color-scheme 확인
  // useEffect(() => {
  //   if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     document.body.classList.add('dark');
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>NextJS TailwindCSS TypeScript Starter</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
