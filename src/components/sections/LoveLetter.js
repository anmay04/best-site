import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { loveLetterText } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';

export default function LoveLetter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(loveLetterText.slice(0, i));
      if (i >= loveLetterText.length) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section className="relative py-32 px-6">
      <SectionTitle kicker="from my heart" title="A Letter For You" />
      <div ref={ref} className="max-w-3xl mx-auto relative">
        <span className="absolute -top-8 -left-6 text-7xl opacity-70 rotate-[-15deg]">🌸</span>
        <span className="absolute -bottom-6 -right-4 text-6xl opacity-70 rotate-[20deg]">🌷</span>
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="glass p-8 sm:p-14 relative"
          style={{
            background: 'linear-gradient(135deg, oklch(0.99 0.01 60 / 0.85), oklch(0.97 0.03 20 / 0.8))',
            backgroundImage:
              'repeating-linear-gradient(transparent 0 38px, oklch(0.78 0.05 350 / 0.18) 38px 39px)',
          }}
        >
          {/* CUSTOMIZE: Edit loveLetterText in src/data/content.js */}
          <pre className="font-script text-2xl sm:text-3xl leading-[39px] whitespace-pre-wrap text-foreground/90">
            {typed}
            <span className="inline-block w-0.5 h-7 animate-pulse align-middle ml-1" style={{ background: 'var(--rose)' }} />
          </pre>
          <p className="mt-8 font-script text-4xl text-right" style={{ color: 'var(--rose)' }}>
            — Forever Yours ❤
          </p>
        </motion.div>
      </div>
    </section>
  );
}
