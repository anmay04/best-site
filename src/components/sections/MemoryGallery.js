import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { galleryPhotos } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';

export default function MemoryGallery() {
  const [open, setOpen] = useState(null);
  const active = open !== null ? galleryPhotos.find((p) => p.id === open) : null;

  return (
    <section className="relative py-32 px-6">
      <SectionTitle kicker="memories" title="Every Picture Tells Our Story" />

      {/*
        PHOTO: Edit galleryPhotos[] in src/data/content.js
        { id, src: '/photos/memory.jpg', alt, caption, h, grad }
      */}
      <div className="max-w-6xl mx-auto columns-2 md:columns-3 gap-5 space-y-5">
        {galleryPhotos.map((p, i) => (
          <motion.button
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: i * 0.04 }}
            onClick={() => setOpen(p.id)}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-3xl glass text-left"
            style={{ height: p.h }}
          >
            <img
              src={p.src}
              alt={p.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${p.grad} opacity-30 mix-blend-soft-light`} />
            <div className="absolute inset-0 flex items-end p-5 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-script text-2xl">{p.caption}</span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[150] flex items-center justify-center p-6 backdrop-blur-xl"
            style={{ background: 'oklch(0.1 0.04 340 / 0.7)' }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 22 }}
              className="relative w-full max-w-3xl aspect-[4/3] rounded-3xl overflow-hidden glass"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.src} alt={active.alt} className="absolute inset-0 w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-br ${active.grad} opacity-20`} />
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/50 to-transparent">
                <p className="font-script text-3xl text-white">{active.caption}</p>
              </div>
              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
