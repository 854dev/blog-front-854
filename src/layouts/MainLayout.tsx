import React, { PropsWithChildren } from 'react';
import Navbar from '../components/Navbar';
import ToggleDarkMode from '../components/ToggleDarkMode';

function MainLayout(props: PropsWithChildren) {
  return (
    <>
      <div className='row'>
        <div className='col-3 bg-primary hide-xs hide-sm hide-md'>.col</div>
        <div className='main-wrap col'>
          <Navbar></Navbar>
          <main>
            <ToggleDarkMode></ToggleDarkMode>
            <section className='container '>{props.children}</section>
          </main>
          <footer className='footer'></footer>
        </div>
        <div className='col-3 bg-primary hide-xs hide-sm hide-md'>.col</div>
      </div>
    </>
  );
}

export default MainLayout;
