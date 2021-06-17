import { useDuetTheme } from '../../provider';

export function Hed({ children, letterSpacing }) {
  const theme = useDuetTheme();
  letterSpacing ??= theme.typography.components.hed.letterSpacing;

  return (
    <h1 style={{ ...theme.typography.components.hed, letterSpacing }}>
      { children }
    </h1>
  )
}
