import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import FloatingHearts from '../global/FloatingHearts';
import StarField from '../ui/StarField';

export default function FinalSection() {
  const [thankYou, setThankYou] = useState(false);
  const particles = useMemo(() => Array.from({ length: 60 }), []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 overflow-hidden bg-slate-950">
      <StarField count={120} />
      <FloatingHearts count={15} />
      <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl"
      >
        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-lavender-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          These Three Months Were Just The Beginning ❤️
        </h2>

        <div className="relative mt-16 min-h-[8rem] flex justify-center items-center">
          <AnimatePresence mode="wait">
            {!thankYou ? (
              <motion.button
                key="btn"
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={() => setThankYou(true)}
                className="btn-glow px-10 py-5 rounded-full font-medium text-lg text-white"
                style={{ background: 'linear-gradient(135deg, oklch(0.78 0.18 15), oklch(0.82 0.1 50))' }}
              >
                Forever Starts Here
              </motion.button>
            ) : (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative text-center"
              >
                <p className="font-script text-4xl sm:text-5xl text-white drop-shadow-md">
                  Thank you for loving me.
                </p>
                {particles.map((_, i) => {
                  const angle = Math.random() * Math.PI * 2;
                  const dist = 150 + Math.random() * 300;
                  return (
                    <motion.span
                      key={i}
                      initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                      animate={{
                        x: Math.cos(angle) * dist,
                        y: Math.sin(angle) * dist,
                        opacity: 0,
                        scale: 1 + Math.random() * 2,
                      }}
                      transition={{ duration: 1.5 + Math.random() * 2, ease: 'easeOut' }}
                      className="absolute left-1/2 top-1/2 text-rose-400 text-xl"
                    >
                      ❤
                    </motion.span>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
