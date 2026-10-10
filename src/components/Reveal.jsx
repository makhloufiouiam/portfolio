import { useReveal } from './useReveal'

// Fades its content up once it scrolls into view
function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`${className} ${visible ? 'motion-safe:animate-fade-up' : 'opacity-0'}`}
    >
      {children}
    </Tag>
  )
}

export default Reveal
