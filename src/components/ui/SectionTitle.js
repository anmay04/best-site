import { motion } from 'framer-motion';

const gradientText = {
  backgroundImage: 'linear-gradient(90deg, var(--rose), var(--rose-gold), var(--lavender))',
};

export default function SectionTitle({ kicker, title }) {
  return (
    <div className="text-center mb-16 relative z-10">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="font-script text-xl mb-3"
        style={{ color: 'var(--rose)' }}
      >
        {kicker}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-gradient-romantic"
        style={gradientText}
      >
        {title}
      </motion.h2>
    </div>
  );
}
