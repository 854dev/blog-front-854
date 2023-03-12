import React, { PropsWithChildren } from 'react';
import Navbar from '../components/Navbar';

function MainLayout(props: PropsWithChildren) {
  return (
    <>
      <div className='row is-full-width is-marginless'>
        <div className='is-full-width is-center'>
          <div className='main-wrap'>
            <Navbar></Navbar>
            <main>
              <section className='container'>{props.children}</section>
            </main>
            <footer className='footer'></footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
