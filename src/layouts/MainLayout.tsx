import React, { PropsWithChildren } from 'react';
import ToggleDarkMode from '../components/ToggleDarkMode';

function MainLayout(props: PropsWithChildren) {
  return (
    <div className='main-wrap'>
      <main>
        <ToggleDarkMode></ToggleDarkMode>
        <section className='container'>{props.children}</section>
      </main>
    </div>
  );
}

export default MainLayout;
