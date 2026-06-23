import { motion } from 'framer-motion';
import { dreamDestinations } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';

export default function DreamDestinations() {
  return (
    <section className="relative py-32 px-6">
      <SectionTitle kicker="bucket list" title="Where We'll Go Together" />
      {/*
        PHOTO: Edit dreamDestinations[] in src/data/content.js
        image: '/photos/paris.jpg'  —  Recommended 1200×800
      */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {dreamDestinations.map((place, i) => (
          <motion.div
            key={place.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group glass overflow-hidden hover:-translate-y-3 transition-all duration-300"
            style={{ boxShadow: 'none' }}
            whileHover={{ boxShadow: '0 20px 40px oklch(0.72 0.18 15 / 0.15)' }}
          >
            <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${place.grad}`}>
              <img
                src={place.image}
                alt={place.name}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl mb-1">{place.name}</h3>
              <p className="text-muted-foreground text-sm">{place.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
