type NavItem = {
  label: string
  active?: boolean
}

type Props = {
  items: NavItem[]
}

export function BottomNav({ items }: Props) {
  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <button
          type="button"
          key={item.label}
          className={`bottom-nav__item ${item.active ? 'bottom-nav__item--active' : ''}`}
          aria-pressed={item.active ?? false}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
