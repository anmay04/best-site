import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    setIsTouch(touchDevice);
    if (touchDevice) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const hide = () => setVisible(false);
    const show = () => setVisible(true);

    window.addEventListener('mousemove', move);
    document.body.addEventListener('mouseleave', hide);
    document.body.addEventListener('mouseenter', show);

    return () => {
      window.removeEventListener('mousemove', move);
      document.body.removeEventListener('mouseleave', hide);
      document.body.removeEventListener('mouseenter', show);
    };
  }, [x, y]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="cursor-glow"
        style={{ left: x, top: y, opacity: visible ? 1 : 0 }}
      />
      <motion.div
        className="cursor-dot"
        style={{ left: x, top: y, opacity: visible ? 1 : 0 }}
      />
    </>
  );
}
