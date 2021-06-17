import { useDuetTheme } from '../../provider';

export function Latest({ children, style }) {
  const theme = useDuetTheme();

  return (
    <aside>
      <h3 style={{ ...style, color: theme.palette.brandAccent, fontSize: '2rem', textTransform: 'uppercase' }}>Latest Posts</h3>
      <ul>{ children }</ul>
    </aside>
  );
}
