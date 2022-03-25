import React from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="flex justify-center">
      <label className="flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          id="toggle-example"
          className="sr-only"
          checked={theme === 'dark'}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <div className="w-11 h-6 bg-neutrals/3 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-neutrals/8">
          Dark mode
        </span>
      </label>
    </div>
  );
};

export default Toggle;
