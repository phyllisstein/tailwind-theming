import { useContext } from 'react';
import { DuetThemeContext } from './DuetThemeProvider';

export const useDuetTheme = () => useContext(DuetThemeContext);
