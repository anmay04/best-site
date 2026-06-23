import { motion } from 'framer-motion';
import { Calendar, Heart, Map, Plane, Stars } from 'lucide-react';
import { futureDreams } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';

const iconMap = {
  plane: Plane,
  map: Map,
  calendar: Calendar,
  stars: Stars,
  heart: Heart,
};

export default function FutureDreams() {
  return (
    <section className="relative py-32 px-6">
      <SectionTitle kicker="tomorrow" title="Everything Ahead of Us" />
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {futureDreams.map((d, i) => {
          const Icon = iconMap[d.icon];
          return (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="break-inside-avoid glass p-8 flex flex-col items-start justify-center hover:scale-[1.02] transition-transform"
              style={{ height: d.h }}
            >
              <div
                className="mb-4 p-4 rounded-2xl"
                style={{ background: 'oklch(0.72 0.18 15 / 0.1)', color: 'var(--rose)' }}
              >
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl mb-2">{d.title}</h3>
              <p className="text-muted-foreground font-script text-2xl">{d.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
