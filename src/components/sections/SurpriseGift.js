import { AnimatePresence, motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { useMemo, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';

export default function SurpriseGift() {
  const [opened, setOpened] = useState(false);
  const particles = useMemo(() => Array.from({ length: 40 }), []);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <SectionTitle kicker="just for you" title="A Little Surprise" />
      <div className="max-w-xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
        <button
          onClick={() => setOpened(true)}
          className="relative group focus:outline-none"
          disabled={opened}
          aria-label="Open surprise gift"
        >
          <motion.div
            animate={opened ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div
              className="w-48 h-48 rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform cursor-pointer"
              style={{ background: 'linear-gradient(135deg, var(--rose), oklch(0.72 0.16 15))' }}
            >
              <div className="absolute inset-0 bg-white/10" />
              <div className="w-8 h-full bg-white/30 absolute left-1/2 -translate-x-1/2" />
              <div className="h-8 w-full bg-white/30 absolute top-1/2 -translate-y-1/2" />
              <Gift className="w-16 h-16 text-white drop-shadow-md z-10" />
            </div>
          </motion.div>

          <AnimatePresence>
            {opened && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', damping: 15 }}
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
              >
                <div className="glass px-8 py-6 rounded-3xl text-center max-w-sm">
                  <p
                    className="font-script text-3xl sm:text-4xl text-gradient-romantic"
                    style={{ backgroundImage: 'linear-gradient(90deg, var(--rose), var(--rose-gold))' }}
                  >
                    You are my favorite chapter in life&apos;s story ❤️
                  </p>
                </div>
                {particles.map((_, i) => {
                  const angle = Math.random() * Math.PI * 2;
                  const dist = 100 + Math.random() * 200;
                  return (
                    <motion.span
                      key={i}
                      initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                      animate={{
                        x: Math.cos(angle) * dist,
                        y: Math.sin(angle) * dist,
                        opacity: 0,
                        scale: 1 + Math.random(),
                      }}
                      transition={{ duration: 1 + Math.random() * 1.5, ease: 'easeOut' }}
                      className="absolute left-1/2 top-1/2 text-lg"
                      style={{ color: 'var(--rose)' }}
                    >
                      ❤
                    </motion.span>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        {!opened && (
          <p className="mt-8 text-muted-foreground animate-pulse font-script text-2xl">Tap to open</p>
        )}
      </div>
    </section>
  );
}
