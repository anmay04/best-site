import { animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Counter({ end, suffix = '', delay = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, end, {
      duration: 2,
      delay,
      ease: 'easeOut',
      onUpdate: (val) => setCount(Math.floor(val)),
    });
    return () => controls.stop();
  }, [inView, end, delay]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
