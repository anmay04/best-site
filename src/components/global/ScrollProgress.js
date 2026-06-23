import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100] pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, var(--rose), var(--rose-gold), var(--lavender))',
      }}
    />
  );
}
