import React from 'react';

function Navbar() {
  return (
    <nav className='nav'>
      <div className='nav-left'>
        <a className='brand' href='#'>
          Brand
        </a>
        <a>Link 1</a>
        <a className='active'>Link 2</a>
      </div>
    </nav>
  );
}

export default Navbar;
