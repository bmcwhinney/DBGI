type IconProps = { className?: string };

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}

export function StoreIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 9l1-5h14l1 5" />
      <path d="M4 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0" />
      <path d="M5 9v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
      <line x1="10" y1="19" x2="10" y2="14" />
      <line x1="14" y1="19" x2="14" y2="14" />
    </svg>
  );
}

export function BulbIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M9.5 18h5" />
      <path d="M8 14a5 5 0 1 1 8 0c-.8.9-1.5 1.6-1.7 2.5H9.7c-.2-.9-.9-1.6-1.7-2.5z" />
      <line x1="10" y1="21" x2="14" y2="21" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 20c9 0 14-5 14-14 0 0-9 0-13 4S5 20 5 20z" />
      <path d="M5 20c0-5 3-9 7-11" />
    </svg>
  );
}

export function RocketIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 2c3 1 5.5 4 5.5 8.5 0 3-1.5 5.5-2.5 6.5l-3 3-3-3c-1-1-2.5-3.5-2.5-6.5C6.5 6 9 3 12 2z" />
      <circle cx="12" cy="10" r="2" />
      <path d="M9 16l-2 5 5-2" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <polygon points="6 4 20 12 6 20" />
    </svg>
  );
}
