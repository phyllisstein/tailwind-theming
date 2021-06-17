import { useDuetTheme } from '../../provider';

export function Latest({ children, label = "Latest Posts", style }) {
  const theme = useDuetTheme();

  return (
    <aside>
      <h3 id="latest-label" style={{ ...style, color: theme.palette.brandAccent }}>{ label }</h3>
      <nav aria-labelledby="latest-label">
        <ul>{ children }</ul>
      </nav>
    </aside>
  );
}
