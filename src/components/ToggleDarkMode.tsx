import React from 'react';
import { toggleDarkMode } from '../util/util';

function ToggleDarkMode() {
  return <button onClick={toggleDarkMode}>ToggleDarkMode</button>;
}

export default ToggleDarkMode;
