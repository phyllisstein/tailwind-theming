import { useDuetTheme } from '../../provider';

export function Latest({ children, label = "Latest Posts", style }) {
  const theme = useDuetTheme();

  return (
    <aside>
      <h3 id="latest-label" style={{ ...style, color: theme.palette.brandAccent, fontSize: '2rem', textTransform: 'uppercase' }}>{ label }</h3>
      <nav aria-labelledby="latest-label">
        <ul>{ children }</ul>
      </nav>
    </aside>
  );
}
