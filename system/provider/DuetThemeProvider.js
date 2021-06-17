import React, { useContext } from 'react';
import baseTheme from '../theme'
import merge from 'lodash.merge';

export const DuetThemeContext = React.createContext();

export function DuetThemeProvider({ children, theme }) {
  const mergedTheme = merge(baseTheme, theme);

  return (
    <DuetThemeContext.Provider value={ mergedTheme }>
      { children }
    </DuetThemeContext.Provider>
  );
}
