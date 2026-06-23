import { motion } from 'framer-motion';
import { timelineEvents } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';

export default function Timeline() {
  return (
    <section id="journey" className="relative py-32 px-6">
      <SectionTitle kicker="our journey" title="A Love Story Timeline" />
      <div className="relative max-w-5xl mx-auto">
        <div
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2"
          style={{ background: 'linear-gradient(to bottom, var(--rose), var(--lavender))' }}
        />
        {timelineEvents.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className={`relative mb-12 md:mb-20 md:w-1/2 ${
              i % 2 === 0 ? 'md:pr-12 md:mr-auto' : 'md:pl-12 md:ml-auto'
            } pl-12`}
          >
            <div
              className={`absolute top-6 w-4 h-4 rounded-full -translate-x-1/2 ring-4 ring-background ${
                i % 2 === 0 ? 'left-4 md:left-auto md:right-0 md:translate-x-1/2' : 'left-4 md:left-0 md:-translate-x-1/2'
              }`}
              style={{
                background: 'linear-gradient(135deg, var(--rose), var(--rose-gold))',
                boxShadow: '0 0 20px oklch(0.78 0.18 15 / 0.7)',
              }}
            />
            <div className="glass p-6 sm:p-8 hover:scale-[1.02] transition-transform duration-300">
              {/*
                PHOTO: Replace item.image in src/data/content.js
                Format: '/photos/first-date.jpg' or Unsplash URL
              */}
              <div className={`h-44 rounded-2xl mb-5 relative overflow-hidden bg-gradient-to-br ${item.color}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <span className="font-script text-lg" style={{ color: 'var(--rose)' }}>
                {item.date}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl mt-1 mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
