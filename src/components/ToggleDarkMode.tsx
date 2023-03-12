import React, { useEffect, useState } from 'react';
import { toggleDarkMode } from '../common/util';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ToggleDarkMode() {
  const [isDark, setIsDark] = useState(false);

  return (
    <span
      className={`p-1 is-vertical-align`}
      onClick={() => {
        toggleDarkMode();
        setIsDark(!isDark);
      }}
    >
      <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
    </span>
  );
}

export default ToggleDarkMode;
