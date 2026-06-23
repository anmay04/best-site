import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { reasonsILoveYou } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';

export default function ReasonsILoveYou() {
  const [flipped, setFlipped] = useState(new Set());

  const toggle = (i) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="relative py-32 px-6">
      <SectionTitle kicker="why I love you" title="20 Reasons I Love You" />
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {reasonsILoveYou.map(([title, desc], i) => {
          const isFlipped = flipped.has(i);
          return (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.45, delay: (i % 8) * 0.04 }}
              onClick={() => toggle(i)}
              className="relative aspect-[4/3] rounded-2xl text-left"
              style={{ perspective: 1000 }}
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="absolute inset-0 glass p-6 flex flex-col items-center justify-center text-center hover:scale-[1.03] transition-transform"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Heart className="w-8 h-8 mb-3" style={{ color: 'var(--rose)' }} />
                  <h3 className="font-display text-xl sm:text-2xl">{title}</h3>
                  <p className="text-xs text-muted-foreground mt-2">Tap to reveal</p>
                </div>
                <div
                  className="absolute inset-0 glass p-6 flex flex-col items-center justify-center text-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: 'var(--gradient-hero)',
                  }}
                >
                  <p className="font-script text-xl sm:text-2xl text-white drop-shadow-md">{desc}</p>
                </div>
              </motion.div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
