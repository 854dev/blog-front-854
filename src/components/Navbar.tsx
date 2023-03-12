import React from 'react';
import Link from 'next/link';
import ToggleDarkMode from '../components/ToggleDarkMode';

function Navbar() {
  return (
    <nav className='nav'>
      <div className='nav-left'>
        <Link href='/'>
          <h1 className='text-primary'>854</h1>
        </Link>
        <Link href='/posts'>posts</Link>
        <ToggleDarkMode></ToggleDarkMode>
      </div>
    </nav>
  );
}

export default Navbar;
