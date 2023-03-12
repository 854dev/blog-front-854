import React, { useEffect, useState } from 'react';
import { toggleDarkMode } from '../common/util';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ToggleDarkMode() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      className='outline'
      onClick={() => {
        toggleDarkMode();
        setIsDark(!isDark);
      }}
    >
      <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
    </button>
  );
}

export default ToggleDarkMode;
