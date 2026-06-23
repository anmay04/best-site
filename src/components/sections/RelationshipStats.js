import { motion } from 'framer-motion';
import { Calendar, Heart, Smile, Stars } from 'lucide-react';
import Counter from '../ui/Counter';
import SectionTitle from '../ui/SectionTitle';

const stats = [
  { icon: Calendar, label: 'Months Together', val: 3 },
  { icon: Heart, label: 'Days of Joy', val: 90, suffix: '+' },
  { icon: Stars, label: 'Memories Made', val: '∞', isString: true },
  { icon: Smile, label: 'Smiles Shared', val: '∞', isString: true },
];

export default function RelationshipStats() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-transparent to-primary/5">
      <SectionTitle kicker="our journey" title="Our Story in Numbers" />
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass p-8 text-center flex flex-col items-center justify-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ background: 'oklch(0.72 0.18 15 / 0.1)', color: 'var(--rose)' }}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="font-display text-4xl sm:text-5xl font-semibold mb-2" style={{ color: 'var(--rose)' }}>
                {s.isString ? s.val : <Counter end={s.val} suffix={s.suffix || ''} delay={i * 0.1} />}
              </h4>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">{s.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
