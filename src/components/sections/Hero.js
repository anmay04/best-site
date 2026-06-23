import { motion, useScroll, useTransform } from 'framer-motion';
import FloatingHearts from '../global/FloatingHearts';

const shimmerStyle = {
  backgroundImage: 'linear-gradient(90deg, var(--rose), var(--rose-gold), var(--lavender), var(--rose))',
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ background: 'var(--gradient-hero)', y }} />
      <motion.div
        className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-50"
        style={{ background: 'radial-gradient(circle, var(--rose), transparent 60%)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-50"
        style={{ background: 'radial-gradient(circle, var(--lavender), transparent 60%)' }}
        animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
      />
      <FloatingHearts count={28} />

      <motion.div className="relative z-10 text-center px-6 max-w-5xl" style={{ opacity }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold leading-[1.05] text-gradient-romantic animate-shimmer"
          style={shimmerStyle}
        >
          Happy 3 Months,
          <br />
          <span className="italic">My Love</span>{' '}
          <span className="inline-block animate-heartbeat">❤</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Three beautiful months of memories, laughter, and love.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 flex items-center justify-center"
        >
          <a
            href="#journey"
            className="btn-glow inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium text-primary-foreground"
            style={{ background: 'linear-gradient(135deg, var(--rose), var(--rose-gold))' }}
          >
            Our Journey <span className="text-xl">→</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-primary to-transparent origin-top"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>
    </section>
  );
}
