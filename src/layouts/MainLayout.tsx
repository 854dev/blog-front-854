import React, { PropsWithChildren } from 'react';
import Navbar from '../components/Navbar';
import { ContentType } from '../types/common';

interface Props extends PropsWithChildren {
  contentTypeList: ContentType[];
}

function MainLayout(props: Props) {
  return (
    <div className='layout-wrap'>
      <div className='row is-full-width is-marginless'>
        <div className='is-full-width is-center'>
          <div className='main-wrap'>
            <Navbar contentTypeList={props.contentTypeList} />
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
