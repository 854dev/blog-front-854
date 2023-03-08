import React from 'react';
import { toggleDarkMode } from '../common/util';

function ToggleDarkMode() {
  return (
    <button className='outline' onClick={toggleDarkMode}>
      toggleDarkMode
    </button>
  );
}

export default ToggleDarkMode;
