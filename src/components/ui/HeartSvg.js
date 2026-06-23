export default function HeartSvg({ className = 'w-6 h-6', gradientId = 'heartGrad' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.18 15)" />
          <stop offset="100%" stopColor="oklch(0.8 0.1 320)" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M16 28s-11-7.2-11-15a6 6 0 0 1 11-3 6 6 0 0 1 11 3c0 7.8-11 15-11 15z"
      />
    </svg>
  );
}
