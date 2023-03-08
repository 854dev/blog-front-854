import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className='nav'>
      <div className='nav-left'>
        <Link href='/'>854</Link>
        <Link href='/posts'>posts</Link>
        <Link href='/study'>study</Link>
      </div>
    </nav>
  );
}

export default Navbar;
