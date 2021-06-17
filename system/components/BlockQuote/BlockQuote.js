export function BlockQuote({ children }) {
  return (
    <blockquote style={{ fontStyle: 'italic', margin: '1rem auto', width: '75%' }}>
      { children }
    </blockquote>
  )
}
