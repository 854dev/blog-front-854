import React from 'react';
import { toggleDarkMode } from '../util/util';

function ToggleDarkMode() {
  return (
    <button className='button outline' onClick={toggleDarkMode}>
      D
    </button>
  );
}

export default ToggleDarkMode;
