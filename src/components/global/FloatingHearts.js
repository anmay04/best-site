import { useMemo } from 'react';
import HeartSvg from '../ui/HeartSvg';

export default function FloatingHearts({ count = 24 }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 10,
        size: 10 + Math.random() * 22,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          style={{
            position: 'absolute',
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            opacity: h.opacity,
            animation: `float-up ${h.duration}s linear ${h.delay}s infinite`,
            filter: 'drop-shadow(0 0 6px oklch(0.78 0.18 15 / 0.6))',
          }}
        >
          <HeartSvg className="w-full h-full" gradientId={`float-${h.id}`} />
        </div>
      ))}
    </div>
  );
}
