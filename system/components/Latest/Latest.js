import { useDuetTheme } from '../../provider';

export function Latest({ children }) {
  const theme = useDuetTheme();

  return (
    <aside>
      <h3 className="uppercase text-sm pb-4" style={{ color: theme.palette.brandAccent }}>Latest Posts</h3>
      <ul>{ children }</ul>
    </aside>
  );
}
