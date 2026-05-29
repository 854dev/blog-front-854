'use client';

import React, { useEffect, useState } from 'react';
import { toggleDarkMode } from '../common/util';

function ToggleDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (preferDark) {
      toggleDarkMode();
      setIsDark(true);
    }
  }, []);

  return (
    <button
      type='button'
      className='button clear p-1 is-vertical-align'
      aria-label='Toggle dark mode'
      onClick={() => {
        toggleDarkMode();
        setIsDark(!isDark);
      }}
    >
      {isDark ? 'Dark' : 'Light'}
    </button>
  );
}

export default ToggleDarkMode;
