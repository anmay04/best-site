import { motion } from 'framer-motion';
import { useEffect } from 'react';
import HeartSvg from '../ui/HeartSvg';

const shimmerStyle = {
  backgroundImage: 'linear-gradient(90deg, var(--rose), var(--rose-gold), var(--lavender), var(--rose))',
};

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{ background: 'var(--gradient-hero)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="animate-heartbeat"
      >
        <HeartSvg className="w-24 h-24" gradientId="loadHeart" />
      </motion.div>

      <motion.p
        className="mt-6 font-script text-2xl text-gradient-romantic animate-shimmer"
        style={shimmerStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Loading our story…
      </motion.p>
    </motion.div>
  );
}
