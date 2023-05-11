import React, { PropsWithChildren, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import api from '../api/api';
import { ContentType } from '../types/common';

interface Props extends PropsWithChildren {
  contentTypeList: ContentType[];
}

function MainLayout(props: Props) {
  const [contentTypeList, setContentTypeList] = useState<ContentType[]>([]);

  const getContentTypeList = async () => {
    try {
      const res = await api.content.getContentTypeList({
        page: 1,
        limit: 50,
      });

      const data = res.data.data as ContentType[];

      setContentTypeList(data);
    } catch (e) {}
  };

  useEffect(() => {
    getContentTypeList();
  }, []);

  return (
    <div className='layout-wrap'>
      <div className='row is-full-width is-marginless'>
        <div className='is-full-width is-center'>
          <div className='main-wrap'>
            <Navbar contentTypeList={contentTypeList}></Navbar>
            <main>
              <section className='container'>{props.children}</section>
            </main>
            <footer className='footer'></footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
