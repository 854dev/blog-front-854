import React, { PropsWithChildren } from 'react';
import ToggleDarkMode from '../components/ToggleDarkMode';

function MainLayout(props: PropsWithChildren) {
  return (
    <>
      <div className='main-wrap'>
        <main>
          <nav className='nav'>
            <div className='nav-left'>
              <a className='brand' href='#'>
                Brand
              </a>
              <a>Link 1</a>
              <a className='active'>Link 2</a>
            </div>
            <div className='nav-right'>
              <ToggleDarkMode></ToggleDarkMode>
            </div>
          </nav>

          <section className='container'>{props.children}</section>
        </main>
      </div>
    </>
  );
}

export default MainLayout;
