import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.css';
import MainLayout from '../layouts/MainLayout';
import api from '../api/api';
import { ContentType } from '../types/common';
import MetaHead from '../components/MetaHead';

interface Props extends AppProps {
  contentTypeList: ContentType[];
}

function MyApp({ Component, pageProps, contentTypeList }: Props) {
  return (
    <>
      <MainLayout contentTypeList={contentTypeList}>
        <MetaHead />

        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

MyApp.getInitialProps = async () => {
  const res = await api.content.getContentTypeList({
    page: 1,
    limit: 50,
  });
  return { contentTypeList: res.data.data };
};

export default MyApp;
